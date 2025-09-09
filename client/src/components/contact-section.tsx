import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, IdCard, Check, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    projectDetails: "",
    budget: ""
  });

  const createLeadMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        projectDetails: "",
        budget: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again or call us directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        description: "First name, last name, email, and phone are required.",
        variant: "destructive",
      });
      return;
    }
    createLeadMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "443-261-0020",
      href: "tel:+1-443-261-0020",
      subtitle: "Mon-Fri 9AM-5PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "admin@tgbcontracting.com",
      href: "mailto:admin@tgbcontracting.com",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      content: "Maryland, Washington DC",
      subtitle: "Licensed and insured in all areas"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-5PM",
      subtitle: "Closed weekends"
    }
  ];

  const whyChooseUs = [
    "Licensed & Fully Insured",
    "15+ Years of Experience", 
    "Free Estimates & Consultations",
    "2-Year Limited Warranty"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-700 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white mb-16">
            
            <h2 className="font-bold text-4xl lg:text-5xl mb-6">Get Your FREE Quote Now</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Fast, accurate estimates with detailed project breakdowns. No obligation consultation with our expert team.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-400" />
                <span>No Obligation Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-400" />
                <span>Same-Day Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get Your Free Estimate</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                        <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                        <SelectItem value="whole-home">Whole Home Remodeling</SelectItem>
                        <SelectItem value="exterior">Exterior Improvements</SelectItem>
                        <SelectItem value="basement">Basement Finishing</SelectItem>
                        <SelectItem value="mold-inspection">Mold Inspection (Maryland Only)</SelectItem>
                        <SelectItem value="mold-remediation">Mold Remediation (Maryland Only)</SelectItem>
                        <SelectItem value="carpentry">Custom Carpentry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="projectDetails">Project Details</Label>
                    <Textarea
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                      placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-plus">$100,000+</SelectItem>
                        <SelectItem value="not-sure">I'm not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-accent" 
                    size="lg"
                    disabled={createLeadMutation.isPending}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {createLeadMutation.isPending ? "Sending..." : "Send My Free Quote Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="text-white space-y-8">
              <div>
                <h3 className="font-bold text-2xl mb-6">Get In Touch</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-8">
                  Ready to start your home transformation? Contact us today for a free consultation and personalized estimate.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-accent hover:text-orange-300 transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="opacity-90">{info.content}</p>
                      )}
                      {info.subtitle && (
                        <p className="text-sm opacity-80">{info.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4 text-white">Why Choose TGB Contracting?</h4>
                  <div className="space-y-3">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-accent" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
