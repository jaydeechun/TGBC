# TGB Contracting - Home Remodeling Platform

## Overview

TGB Contracting is a veteran-owned residential remodeling contractor serving Maryland and DC. This is a full-stack web application showcasing their services, portfolio, and providing customer engagement tools including AI-powered chat support and lead generation capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI components with shadcn/ui styling system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **AI Integration**: OpenAI API for chat functionality
- **Session Management**: Express sessions with PostgreSQL store

### Key Components

#### Database Schema
- **Users**: Authentication and user management
- **Leads**: Customer inquiries and project requests
- **Chat Messages**: AI chat conversation history
- **Portfolio Items**: Project showcase with detailed metadata
- **Testimonials**: Customer reviews and ratings

#### API Endpoints
- `/api/leads` - Lead creation and management
- `/api/chat` - AI-powered customer support chat
- `/api/portfolio` - Portfolio item management
- `/api/testimonials` - Customer testimonial management

#### UI Components
- **Navigation**: Responsive navigation with mobile menu
- **Hero Sections**: Multiple hero variants for different pages
- **Portfolio Gallery**: Filterable project showcase
- **Contact Forms**: Lead generation with validation
- **AI Chat Widget**: Real-time customer support
- **Service Sections**: Detailed service offerings including mold remediation (Maryland only)

## Data Flow

1. **Customer Interaction**: Users browse services, view portfolio, and interact with AI chat
2. **Lead Generation**: Contact forms capture leads and store in PostgreSQL via Drizzle ORM
3. **AI Chat**: OpenAI integration provides real-time customer support with company knowledge base
4. **Content Management**: Portfolio and testimonials managed through admin interface
5. **Static Assets**: Images served from `/attached_assets` directory

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL (serverless)
- **AI Service**: OpenAI API for chat functionality
- **UI Framework**: React with TypeScript
- **Styling**: Tailwind CSS + Radix UI components

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **Drizzle Kit**: Database schema management and migrations
- **Vite**: Frontend build tool with HMR
- **ESBuild**: Backend bundling for production

## Deployment Strategy

### Replit Configuration
- **Environment**: Node.js 20 with PostgreSQL 16
- **Development**: `npm run dev` runs both frontend and backend
- **Production Build**: `npm run build` creates optimized bundles
- **Deployment**: Autoscale deployment target on port 80

### Build Process
1. Frontend: Vite builds React app to `dist/public`
2. Backend: ESBuild bundles server code to `dist/index.js`
3. Assets: Static assets served from `attached_assets` directory
4. Database: Drizzle migrations handle schema updates

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `OPENAI_API_KEY`: OpenAI API key for chat functionality
- `NODE_ENV`: Environment setting (development/production)

## Changelog

```
Changelog:
- June 14, 2025. Initial setup
- July 6, 2025. Integrated mold remediation services (Maryland only) into main Services section
- July 6, 2025. Added interactive zip code service area checker with distance calculations from base location 20715
- July 7, 2025. Replaced all "Get Free 3D Design" references with "Get FREE Quote Now" throughout the site
- July 7, 2025. Implemented comprehensive SEO improvements:
  - Added descriptive alt text to all images for better accessibility and image SEO
  - Created individual service pages (Kitchen, Bathroom, Home Additions, Basement Finishing)
  - Implemented breadcrumb navigation for better site structure
  - Added FAQ schema markup for rich snippets
  - Implemented review/rating schema (5.0 rating, 150 reviews)
  - Created location-specific landing page for Bethesda
  - Added lazy loading to images for performance
  - Created image optimization utilities for Core Web Vitals
- July 9, 2025. Enhanced IKEA kitchen portfolio management:
  - Fixed navigation runtime errors between IKEA page and admin panel
  - Added "IKEA Kitchen" category option to admin portfolio management
  - Extended portfolio system to support category-based filtering
  - Converted hardcoded IKEA kitchen images to dynamic database-driven content
  - Seeded initial IKEA kitchen portfolio data (6 projects)
  - IKEA kitchen portfolio items now fully manageable through admin interface
  - Changed IKEA pricing display from ranges to "Starting at" format (Essential: Starting at $15,000, Premium: Starting at $25,000, Luxury: Starting at $40,000)
  - Removed all 2-year warranty references from the entire site per client request
- July 14, 2025. Form submission improvements:
  - Updated main hero heading to "The Remodeling Contractor Maryland & DC Homeowners Trust"
  - Removed Delaware (DE) references from licensing badges (now shows MD/DC only)
  - Implemented SendGrid email notifications for all form submissions to admin@tgbcontracting.com
  - Added comprehensive email formatting with all lead details and timestamps
  - Changed "Free 24hr Estimates" to "Free Estimates" in hero section trust indicators
  - Removed special offer banner with 10% discount promotion from hero section
  - Updated license information with correct numbers: MD MHIC #156643, DC DCRA #410525000646
  - Removed all Delaware references from FAQ, certifications, SEO content, and AI knowledge base (now MD/DC only)
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```