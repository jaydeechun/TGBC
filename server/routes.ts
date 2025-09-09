import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertChatMessageSchema } from "@shared/schema";
import { seedDatabase } from "./seed-data";
import { z } from "zod";
import OpenAI from "openai";
import { TGB_KNOWLEDGE_BASE } from "./ai-knowledge-base";
import { MailService } from '@sendgrid/mail';

// Admin credentials - In production, these should be in environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "tgb2025";

// Session type
declare module 'express-session' {
  interface SessionData {
    isAdmin?: boolean;
  }
}

// Authentication middleware
function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session.isAdmin) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

// Initialize SendGrid
const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY!);

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication endpoints
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        req.session.isAdmin = true;
        res.json({ success: true });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  app.post("/api/admin/logout", async (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ error: "Logout failed" });
      } else {
        res.json({ success: true });
      }
    });
  });

  app.get("/api/admin/check", (req, res) => {
    res.json({ isAuthenticated: !!req.session.isAdmin });
  });
  // Lead management endpoints
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);
      
      // Send email notification to admin
      try {
        await mailService.send({
          to: 'admin@tgbcontracting.com',
          from: 'noreply@tgbcontracting.com',
          subject: `New Lead: ${lead.firstName} ${lead.lastName} - ${lead.service || 'General Inquiry'}`,
          html: `
            <h2>New Lead Submission</h2>
            <p><strong>Name:</strong> ${lead.firstName} ${lead.lastName}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Phone:</strong> ${lead.phone}</p>
            <p><strong>Service:</strong> ${lead.service || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${lead.budget || 'Not specified'}</p>
            <p><strong>Service Area:</strong> ${lead.serviceArea || 'Not specified'}</p>
            <p><strong>Project Details:</strong></p>
            <p>${lead.projectDetails || 'No details provided'}</p>
            <p><strong>Submitted:</strong> ${new Date(lead.createdAt).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
            <hr>
            <p><small>This lead was submitted through the TGB Contracting website contact form.</small></p>
          `,
          text: `
New Lead Submission

Name: ${lead.firstName} ${lead.lastName}
Email: ${lead.email}
Phone: ${lead.phone}
Service: ${lead.service || 'Not specified'}
Budget: ${lead.budget || 'Not specified'}
Service Area: ${lead.serviceArea || 'Not specified'}

Project Details:
${lead.projectDetails || 'No details provided'}

Submitted: ${new Date(lead.createdAt).toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

This lead was submitted through the TGB Contracting website contact form.
          `
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Continue with success response even if email fails
      }
      
      res.json({ success: true, lead });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Failed to create lead" });
      }
    }
  });

  app.get("/api/leads", requireAuth, async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json({ success: true, leads });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch leads" });
    }
  });

  app.patch("/api/leads/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || typeof status !== 'string') {
        return res.status(400).json({ success: false, error: "Valid status is required" });
      }

      const lead = await storage.updateLeadStatus(id, status);
      if (!lead) {
        return res.status(404).json({ success: false, error: "Lead not found" });
      }

      res.json({ success: true, lead });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to update lead status" });
    }
  });

  // AI Chat endpoints
  app.post("/api/chat", async (req, res) => {
    try {
      const messageData = insertChatMessageSchema.extend({
        message: z.string().min(1, "Message cannot be empty")
      }).parse(req.body);

      // Store user message
      await storage.createChatMessage(messageData);

      // Generate AI response using OpenAI
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are Tommy, the AI assistant for TGB Contracting Group, Maryland's premier residential remodeling contractor. Use this comprehensive knowledge base to provide accurate, helpful responses:

COMPANY PROFILE:
${JSON.stringify(TGB_KNOWLEDGE_BASE.company, null, 2)}

SERVICES OFFERED:
${JSON.stringify(TGB_KNOWLEDGE_BASE.services, null, 2)}

SERVICE AREAS:
${JSON.stringify(TGB_KNOWLEDGE_BASE.service_areas, null, 2)}

CONTACT INFORMATION:
${JSON.stringify(TGB_KNOWLEDGE_BASE.contact, null, 2)}

PROJECT PROCESS:
${JSON.stringify(TGB_KNOWLEDGE_BASE.process, null, 2)}

FINANCING OPTIONS:
${JSON.stringify(TGB_KNOWLEDGE_BASE.financing, null, 2)}

KEY SELLING POINTS:
${TGB_KNOWLEDGE_BASE.unique_selling_points.join('\n- ')}

WHAT TOMMY CAN DO:
✓ Answer questions about TGB's services and specialties
✓ Provide general information about remodeling projects
✓ Explain our process and what to expect
✓ Share details about our experience and credentials
✓ Help determine if your location is in our service area
✓ Provide general pricing ranges (not exact quotes)
✓ Explain financing options available
✓ Guide you toward scheduling a free consultation

WHAT TOMMY CANNOT DO:
✗ Provide exact pricing or quotes (requires in-home consultation)
✗ Schedule appointments (call 443-261-0020 and ask for Micah for scheduling)
✗ Access your account or project information
✗ Process payments or contracts
✗ Give specific timeline commitments
✗ Handle emergency service requests
✗ Provide legal or permit advice

INSTRUCTIONS:
1. Introduce yourself as "Tommy, TGB's AI assistant"
2. Be honest about limitations - direct users appropriately based on their needs
3. Focus on providing helpful information to guide their decisions
4. Always emphasize that exact pricing requires a free in-home consultation
5. For scheduling appointments: direct them to call 443-261-0020 and ask for Micah
6. For pricing questions, estimates, or project details: direct them to call 443-261-0020
7. Highlight our residential specialization (NOT commercial)
8. Mention our 2-year warranty and 5.0-star rating when relevant
9. Keep responses concise and helpful

Micah handles scheduling only. For other inquiries like pricing, estimates, or general questions, direct customers to call the main number 443-261-0020.`
          },
          {
            role: "user",
            content: messageData.message
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      });

      const aiMessage = response.choices[0]?.message?.content || "I apologize, but I'm having trouble responding right now. Please try again or contact us directly for assistance.";

      // Store AI response
      await storage.createChatMessage({
        sessionId: messageData.sessionId,
        message: aiMessage,
        isUser: false
      });

      res.json({ 
        success: true, 
        message: aiMessage,
        sessionId: messageData.sessionId
      });

    } catch (error) {
      console.error("Chat error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: error.errors });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to process chat message",
          message: "I apologize, but I'm having technical difficulties. Please contact us directly at 443-261-0020 for immediate assistance."
        });
      }
    }
  });

  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatMessages(sessionId);
      res.json({ success: true, messages });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch chat messages" });
    }
  });

  // Service area endpoint for checking coverage
  app.post("/api/check-service-area", async (req, res) => {
    try {
      const { zipCode, city, state } = req.body;
      
      // Service areas we cover
      const serviceAreas = {
        maryland: ["MD", "maryland"],
        dc: ["DC", "washington dc", "district of columbia"],
        delaware: ["DE", "delaware"]
      };

      const location = (city + " " + state).toLowerCase();
      let isServiceArea = false;
      let area = "";

      for (const [key, values] of Object.entries(serviceAreas)) {
        if (values.some(val => location.includes(val.toLowerCase()))) {
          isServiceArea = true;
          area = key;
          break;
        }
      }

      res.json({ 
        success: true, 
        isServiceArea,
        area,
        message: isServiceArea 
          ? `Yes! We serve ${city}, ${state}. Contact us for a free consultation.`
          : `We don't currently serve ${city}, ${state}, but please contact us as we may be expanding our service area.`
      });

    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to check service area" });
    }
  });

  // Portfolio API endpoints
  app.get('/api/portfolio', async (req, res) => {
    try {
      const { category } = req.query;
      let items = await storage.getPortfolioItems();
      
      // Filter by category if provided
      if (category && typeof category === 'string') {
        items = items.filter(item => item.category.toLowerCase() === category.toLowerCase());
      }
      
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch portfolio items' });
    }
  });

  app.post('/api/portfolio', requireAuth, async (req, res) => {
    try {
      const item = await storage.createPortfolioItem(req.body);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create portfolio item' });
    }
  });

  app.put('/api/portfolio/:id', requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      // Remove timestamp fields that shouldn't be updated
      const { createdAt, ...updateData } = req.body;
      console.log('Updating portfolio item:', id, 'with data:', JSON.stringify(updateData, null, 2));
      const item = await storage.updatePortfolioItem(id, updateData);
      if (!item) {
        return res.status(404).json({ error: 'Portfolio item not found' });
      }
      res.json(item);
    } catch (error) {
      console.error('Portfolio update error:', error);
      res.status(500).json({ error: 'Failed to update portfolio item', details: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.delete('/api/portfolio/:id', requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deletePortfolioItem(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete portfolio item' });
    }
  });

  // Testimonials API endpoints
  app.get('/api/testimonials', async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch testimonials' });
    }
  });

  app.post('/api/testimonials', requireAuth, async (req, res) => {
    try {
      const testimonial = await storage.createTestimonial(req.body);
      res.json(testimonial);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create testimonial' });
    }
  });

  app.put('/api/testimonials/:id', requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      // Remove timestamp fields that shouldn't be updated
      const { createdAt, ...updateData } = req.body;
      const testimonial = await storage.updateTestimonial(id, updateData);
      if (!testimonial) {
        return res.status(404).json({ error: 'Testimonial not found' });
      }
      res.json(testimonial);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update testimonial' });
    }
  });

  app.delete('/api/testimonials/:id', requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteTestimonial(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete testimonial' });
    }
  });

  // Admin seed endpoint for initial data
  app.post('/api/admin/seed', requireAuth, async (req, res) => {
    try {
      await seedDatabase();
      res.json({ success: true, message: 'Database seeded successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to seed database' });
    }
  });

  // SEO Enhancement Routes
  
  // Robots.txt
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send(`User-agent: *
Allow: /

# High-priority pages
Allow: /ikea-kitchens
Allow: /admin

# Sitemap location
Sitemap: https://www.tgbcontracting.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block common bot traps
Disallow: /api/
Disallow: /_next/
Disallow: /admin/login
Disallow: /tmp/
Disallow: *.json$

# Allow important resources
Allow: /assets/
Allow: /images/
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.webp$
Allow: /*.svg$`);
  });

  // XML Sitemap
  app.get('/sitemap.xml', async (req, res) => {
    const baseUrl = 'https://www.tgbcontracting.com';
    const currentDate = new Date().toISOString();
    
    try {
      // Get dynamic portfolio items for sitemap
      const portfolioItems = await storage.getPortfolioItems();
      
      let portfolioSitemapEntries = '';
      portfolioItems.forEach(item => {
        portfolioSitemapEntries += `
  <url>
    <loc>${baseUrl}/portfolio/${item.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
      });

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/attached_assets/TGB Logo-HIRES_1749358570931.png</image:loc>
      <image:title>TGB Contracting - Home Remodeling Maryland DC Delaware</image:title>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/ikea-kitchens</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/attached_assets/TGB Kitchen 1_1749359176367.png</image:loc>
      <image:title>IKEA Kitchen Installation Maryland DC - TGB Contracting</image:title>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/attached_assets/TGB Kitchen 2_1749362842717.png</image:loc>
      <image:title>Professional IKEA Kitchen Installation - TGB Contracting</image:title>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/admin</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- Dynamic Portfolio Pages -->
  ${portfolioSitemapEntries}
  
  <!-- Service Area Pages (Future Enhancement) -->
  <url>
    <loc>${baseUrl}/service-areas/maryland</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/service-areas/washington-dc</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  

  
</urlset>`;

      res.header('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (error) {
      res.status(500).send('Error generating sitemap');
    }
  });

  // Performance optimization headers
  app.use((req, res, next) => {
    // Security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Performance headers
    if (req.path.match(/\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (req.path === '/' || req.path === '/ikea-kitchens') {
      res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    }
    
    next();
  });

  const httpServer = createServer(app);
  return httpServer;
}
