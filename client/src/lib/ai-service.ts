import { apiRequest } from "./queryClient";

export interface ChatMessage {
  id: string;
  sessionId: string;
  message: string;
  isUser: boolean;
  createdAt: Date;
}

export interface ChatResponse {
  success: boolean;
  message: string;
  sessionId: string;
}

export class AiService {
  static async sendMessage(sessionId: string, message: string): Promise<ChatResponse> {
    const response = await apiRequest("POST", "/api/chat", {
      sessionId,
      message,
      isUser: true
    });
    
    return response.json();
  }

  static async getChatHistory(sessionId: string): Promise<ChatMessage[]> {
    const response = await apiRequest("GET", `/api/chat/${sessionId}`);
    const data = await response.json();
    
    if (data.success) {
      return data.messages;
    }
    
    throw new Error("Failed to fetch chat history");
  }

  static generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
