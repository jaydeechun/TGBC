import { users, leads, chatMessages, portfolioItems, testimonials, type User, type InsertUser, type Lead, type InsertLead, type ChatMessage, type InsertChatMessage, type PortfolioItem, type InsertPortfolioItem, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: number): Promise<Lead | undefined>;
  updateLeadStatus(id: number, status: string): Promise<Lead | undefined>;
  
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(sessionId: string): Promise<ChatMessage[]>;

  // Portfolio methods
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItemById(id: number): Promise<PortfolioItem | undefined>;
  updatePortfolioItem(id: number, item: Partial<InsertPortfolioItem>): Promise<PortfolioItem | undefined>;
  deletePortfolioItem(id: number): Promise<void>;

  // Testimonial methods
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonialById(id: number): Promise<Testimonial | undefined>;
  updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db
      .insert(leads)
      .values(insertLead)
      .returning();
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async getLeadById(id: number): Promise<Lead | undefined> {
    const [lead] = await db.select().from(leads).where(eq(leads.id, id));
    return lead || undefined;
  }

  async updateLeadStatus(id: number, status: string): Promise<Lead | undefined> {
    const [lead] = await db
      .update(leads)
      .set({ status })
      .where(eq(leads.id, id))
      .returning();
    return lead || undefined;
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const [message] = await db
      .insert(chatMessages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getChatMessages(sessionId: string): Promise<ChatMessage[]> {
    return await db
      .select()
      .from(chatMessages)
      .where(eq(chatMessages.sessionId, sessionId))
      .orderBy(chatMessages.createdAt);
  }

  // Portfolio methods
  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const [item] = await db
      .insert(portfolioItems)
      .values(insertItem)
      .returning();
    return item;
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return await db
      .select()
      .from(portfolioItems)
      .orderBy(desc(portfolioItems.createdAt));
  }

  async getPortfolioItemById(id: number): Promise<PortfolioItem | undefined> {
    const [item] = await db
      .select()
      .from(portfolioItems)
      .where(eq(portfolioItems.id, id));
    return item || undefined;
  }

  async updatePortfolioItem(id: number, updateData: Partial<InsertPortfolioItem>): Promise<PortfolioItem | undefined> {
    const [item] = await db
      .update(portfolioItems)
      .set(updateData)
      .where(eq(portfolioItems.id, id))
      .returning();
    return item || undefined;
  }

  async deletePortfolioItem(id: number): Promise<void> {
    await db
      .delete(portfolioItems)
      .where(eq(portfolioItems.id, id));
  }

  // Testimonial methods
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db
      .select()
      .from(testimonials)
      .orderBy(desc(testimonials.createdAt));
  }

  async getTestimonialById(id: number): Promise<Testimonial | undefined> {
    const [testimonial] = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.id, id));
    return testimonial || undefined;
  }

  async updateTestimonial(id: number, updateData: Partial<InsertTestimonial>): Promise<Testimonial | undefined> {
    const [testimonial] = await db
      .update(testimonials)
      .set(updateData)
      .where(eq(testimonials.id, id))
      .returning();
    return testimonial || undefined;
  }

  async deleteTestimonial(id: number): Promise<void> {
    await db
      .delete(testimonials)
      .where(eq(testimonials.id, id));
  }
}

export const storage = new DatabaseStorage();