import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat is first opened
      setMessages([{
        id: "welcome",
        message: "Hi! I'm Tommy, TGB's AI assistant. I can help with service info, pricing ranges, and project details.\n\nFor scheduling: Call 443-261-0020 and ask for Micah.\n\nWhat may I help you with today?",
        isUser: false,
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  const sendMessageMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest("POST", "/api/chat", {
        sessionId,
        message,
        isUser: true
      });
      return response.json();
    },
    onSuccess: (data) => {
      setMessages(prev => [...prev, {
        id: `ai_${Date.now()}`,
        message: data.message,
        isUser: false,
        timestamp: new Date()
      }]);
    },
    onError: () => {
      setMessages(prev => [...prev, {
        id: `error_${Date.now()}`,
        message: "I apologize, but I'm having technical difficulties. Please contact us directly at (555) TGB-RENO for immediate assistance.",
        isUser: false,
        timestamp: new Date()
      }]);
    }
  });

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      message: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    sendMessageMutation.mutate(inputMessage);
    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-accent hover:bg-accent/90 text-accent-foreground w-16 h-16 rounded-full shadow-2xl animate-bounce-subtle"
        size="lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="absolute bottom-20 right-0 w-80 h-96 shadow-2xl border-2 border-accent/20">
          <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">TGB Assistant</h4>
                  <p className="text-xs opacity-80">Powered by AI</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 h-64 overflow-y-auto">
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.isUser
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {!message.isUser && (
                        <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      {message.isUser && (
                        <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm leading-relaxed">{message.message}</p>
                    </div>
                  </div>
                </div>
              ))}
              {sendMessageMutation.isPending && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground max-w-xs p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask about your remodeling project..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={sendMessageMutation.isPending}
                className="flex-1 text-sm"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || sendMessageMutation.isPending}
                className="btn-accent"
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
