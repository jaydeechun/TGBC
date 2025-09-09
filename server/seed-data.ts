import { storage } from "./storage";
import type { InsertPortfolioItem, InsertTestimonial } from "@shared/schema";

const portfolioData: InsertPortfolioItem[] = [
  {
    title: "Modern Farmhouse Kitchen",
    location: "Montgomery County, MD",
    category: "kitchen",
    image: "/attached_assets/TGB Kitchen 1_1749359176367.png",
    description: "Complete kitchen remodel featuring white shaker cabinets, wood island, quartz countertops, and industrial pendant lighting."
  },
  {
    title: "Luxury Master Bathroom",
    location: "Washington, DC",
    category: "bathroom", 
    image: "/attached_assets/image_1749358850224.png",
    description: "Spa-like retreat with custom hexagonal tile, walk-in shower, freestanding tub, and brass fixtures."
  },
  {
    title: "Home Addition & Deck",
    location: "Delaware",
    category: "addition",
    image: "/attached_assets/image_1749359051997.png", 
    description: "Beautiful home addition with matching siding, new windows, custom deck with railings and lattice skirting."
  },
  {
    title: "Custom Kitchen Island",
    location: "Anne Arundel County, MD",
    category: "kitchen",
    image: "/attached_assets/image_1749359060714.png",
    description: "Stunning kitchen featuring two-tone cabinetry with natural wood island and white perimeter cabinets."
  },
  {
    title: "Designer Bathroom Suite", 
    location: "Montgomery County, MD",
    category: "bathroom",
    image: "/attached_assets/image_1749359164449.png",
    description: "Sophisticated bathroom design with geometric tile patterns, luxury fixtures, and seamless glass shower."
  },
  {
    title: "Whole Home Renovation",
    location: "Prince George's County, MD", 
    category: "whole-home",
    image: "/attached_assets/image_1749359709392.png",
    description: "Complete home transformation including kitchen, bathrooms, flooring, and exterior updates."
  }
];

const testimonialData: InsertTestimonial[] = [
  {
    name: "Sarah Johnson",
    location: "Bethesda, MD", 
    rating: 5,
    review: "TGB Contracting exceeded our expectations with our kitchen remodel. The attention to detail and craftsmanship was outstanding. They completed the project on time and within budget.",
    project: "Kitchen Remodel"
  },
  {
    name: "Michael Chen",
    location: "Washington, DC",
    rating: 5, 
    review: "Professional team that transformed our master bathroom into a spa-like retreat. The communication throughout the project was excellent and the quality is top-notch.",
    project: "Bathroom Renovation"
  },
  {
    name: "Jennifer Martinez",
    location: "Annapolis, MD",
    rating: 5,
    review: "We hired TGB for a home addition and couldn't be happier. They handled everything from permits to final inspection. The new space perfectly matches our existing home.",
    project: "Home Addition"
  },
  {
    name: "David Wilson", 
    location: "Rockville, MD",
    rating: 5,
    review: "Excellent work on our whole home renovation. TGB Contracting managed multiple trades seamlessly and delivered exceptional results. Highly recommend their services.",
    project: "Whole Home Renovation"
  },
  {
    name: "Lisa Thompson",
    location: "Silver Spring, MD",
    rating: 5,
    review: "The team was professional, clean, and efficient. Our new deck is beautiful and we've received so many compliments from neighbors. Great value for the quality of work.",
    project: "Deck Construction"
  }
];

export async function seedDatabase() {
  try {
    console.log("Seeding portfolio items...");
    for (const item of portfolioData) {
      await storage.createPortfolioItem(item);
    }

    console.log("Seeding testimonials...");
    for (const testimonial of testimonialData) {
      await storage.createTestimonial(testimonial);
    }

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}