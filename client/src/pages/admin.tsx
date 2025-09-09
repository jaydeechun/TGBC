import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Edit, Plus, Star } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

interface PortfolioItem {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  details?: {
    budget?: string;
    timeline?: string;
    cabinets?: {
      style?: string;
      material?: string;
      finish?: string;
    };
    countertops?: {
      material?: string;
      color?: string;
    };
    flooring?: {
      type?: string;
      color?: string;
    };
    vanity?: {
      style?: string;
      material?: string;
    };
    fixtures?: {
      faucets?: string;
    };
    special_features?: string[];
  };
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  project: string;
  image?: string;
}

export default function AdminPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, navigate] = useLocation();
  
  const [portfolioForm, setPortfolioForm] = useState<PortfolioItem | Partial<PortfolioItem>>({});
  const [testimonialForm, setTestimonialForm] = useState<Partial<Testimonial>>({});
  const [editingPortfolio, setEditingPortfolio] = useState<number | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<number | null>(null);
  const [portfolioDialogOpen, setPortfolioDialogOpen] = useState(false);
  const [testimonialDialogOpen, setTestimonialDialogOpen] = useState(false);
  
  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/check', {
          credentials: 'include'
        });
        const data = await response.json();
        if (!data.isAuthenticated) {
          navigate('/admin-login');
        }
      } catch (error) {
        navigate('/admin-login');
      }
    };
    checkAuth();
  }, [navigate]);

  // Queries
  const { data: portfolioItems = [] } = useQuery<PortfolioItem[]>({
    queryKey: ['/api/portfolio'],
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  // Portfolio Mutations
  const createPortfolioMutation = useMutation({
    mutationFn: async (data: Partial<PortfolioItem>) => {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to create portfolio item');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolio'] });
      setPortfolioForm({});
      setPortfolioDialogOpen(false);
      toast({ title: "Portfolio item created successfully" });
    },
  });

  const updatePortfolioMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<PortfolioItem> }) => {
      const response = await fetch(`/api/portfolio/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to update portfolio item');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolio'] });
      setPortfolioForm({});
      setEditingPortfolio(null);
      setPortfolioDialogOpen(false);
      toast({ title: "Portfolio item updated successfully" });
    },
  });

  const deletePortfolioMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/portfolio/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete portfolio item');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolio'] });
      toast({ title: "Portfolio item deleted successfully" });
    },
  });

  // Testimonial Mutations
  const createTestimonialMutation = useMutation({
    mutationFn: async (data: Partial<Testimonial>) => {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to create testimonial');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      setTestimonialForm({});
      setTestimonialDialogOpen(false);
      toast({ title: "Testimonial created successfully" });
    },
  });

  const updateTestimonialMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<Testimonial> }) => {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to update testimonial');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      setTestimonialForm({});
      setEditingTestimonial(null);
      setTestimonialDialogOpen(false);
      toast({ title: "Testimonial updated successfully" });
    },
  });

  const deleteTestimonialMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete testimonial');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      toast({ title: "Testimonial deleted successfully" });
    },
  });

  const handlePortfolioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPortfolio) {
      updatePortfolioMutation.mutate({ id: editingPortfolio, data: portfolioForm });
    } else {
      createPortfolioMutation.mutate(portfolioForm);
    }
  };

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTestimonial) {
      updateTestimonialMutation.mutate({ id: editingTestimonial, data: testimonialForm });
    } else {
      createTestimonialMutation.mutate(testimonialForm);
    }
  };

  const editPortfolio = (item: PortfolioItem) => {
    setPortfolioForm(item);
    setEditingPortfolio(item.id);
    setPortfolioDialogOpen(true);
  };

  const editTestimonial = (item: Testimonial) => {
    setTestimonialForm(item);
    setEditingTestimonial(item.id);
    setTestimonialDialogOpen(true);
  };

  const resetPortfolioForm = () => {
    setPortfolioForm({});
    setEditingPortfolio(null);
  };

  const resetTestimonialForm = () => {
    setTestimonialForm({});
    setEditingTestimonial(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">TGB Contracting Admin</h1>
              <p className="text-gray-600">Manage your portfolio projects and customer testimonials</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={async () => {
                  try {
                    await apiRequest("POST", "/api/admin/logout");
                    navigate("/admin-login");
                  } catch (error) {
                    toast({
                      title: "Error",
                      description: "Failed to logout",
                      variant: "destructive"
                    });
                  }
                }}
              >
                Logout
              </Button>
              <a 
                href="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                ← Back to Website
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Portfolio Management */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Portfolio Projects</CardTitle>
              <Dialog open={portfolioDialogOpen} onOpenChange={setPortfolioDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={resetPortfolioForm}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      {editingPortfolio ? 'Edit Project' : 'Add New Project'}
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handlePortfolioSubmit} className="space-y-4">
                    <Input
                      placeholder="Project Title"
                      value={portfolioForm.title || ''}
                      onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Location"
                      value={portfolioForm.location || ''}
                      onChange={(e) => setPortfolioForm({ ...portfolioForm, location: e.target.value })}
                      required
                    />
                    <Select
                      value={portfolioForm.category || ''}
                      onValueChange={(value) => setPortfolioForm({ ...portfolioForm, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitchen">Kitchen</SelectItem>
                        <SelectItem value="bathroom">Bathroom</SelectItem>
                        <SelectItem value="addition">Addition</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="whole-home">Whole Home</SelectItem>
                        <SelectItem value="ikea">IKEA Kitchen</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="space-y-2">
                      <Label htmlFor="image-upload">Project Images</Label>
                      <Tabs defaultValue="url" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="url">Image URL</TabsTrigger>
                          <TabsTrigger value="upload">Upload File</TabsTrigger>
                        </TabsList>
                        <TabsContent value="url" className="mt-2">
                          <Input
                            placeholder="Enter image URL or path (e.g., https://example.com/image.jpg or /attached_assets/project1.jpg)"
                            value={portfolioForm.image || ''}
                            onChange={(e) => setPortfolioForm({ ...portfolioForm, image: e.target.value })}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Supports both external URLs and local paths
                          </p>
                        </TabsContent>
                        <TabsContent value="upload" className="mt-2">
                          <Input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => {
                              const files = Array.from(e.target.files || []);
                              if (files.length > 0) {
                                // For now, just use the first file's name as a placeholder
                                // In a real implementation, you'd upload to a file storage service
                                const fileName = files[0].name;
                                setPortfolioForm({ ...portfolioForm, image: `/attached_assets/${fileName}` });
                              }
                            }}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Upload images to the attached_assets folder, then they'll be available for use
                          </p>
                        </TabsContent>
                      </Tabs>
                      {portfolioForm.image && (
                        <div className="text-sm text-gray-600">
                          Current image: <span className="font-mono">{portfolioForm.image}</span>
                        </div>
                      )}
                    </div>
                    <Textarea
                      placeholder="Project Description"
                      value={portfolioForm.description || ''}
                      onChange={(e) => setPortfolioForm({ ...portfolioForm, description: e.target.value })}
                      rows={3}
                      required
                    />

                    {/* Detailed Specifications Section */}
                    <div className="space-y-4 border-t pt-4">
                      <h4 className="font-semibold text-gray-900">Project Details (Optional)</h4>
                      
                      {/* Budget and Timeline */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Budget Range (e.g., $50,000 - $60,000)"
                          value={portfolioForm.details?.budget || ''}
                          onChange={(e) => setPortfolioForm({ 
                            ...portfolioForm, 
                            details: { 
                              ...portfolioForm.details, 
                              budget: e.target.value 
                            } 
                          })}
                        />
                        <Input
                          placeholder="Timeline (e.g., 6-8 weeks)"
                          value={portfolioForm.details?.timeline || ''}
                          onChange={(e) => setPortfolioForm({ 
                            ...portfolioForm, 
                            details: { 
                              ...portfolioForm.details, 
                              timeline: e.target.value 
                            } 
                          })}
                        />
                      </div>

                      {/* Kitchen Details */}
                      {(portfolioForm.category === 'kitchen' || portfolioForm.category === 'ikea') && (
                        <div className="space-y-3">
                          <h5 className="font-medium text-gray-800">Kitchen Specifications</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <Input
                              placeholder="Cabinet Style"
                              value={portfolioForm.details?.cabinets?.style || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  cabinets: { 
                                    ...portfolioForm.details?.cabinets, 
                                    style: e.target.value 
                                  } 
                                } 
                              })}
                            />
                            <Input
                              placeholder="Cabinet Material"
                              value={portfolioForm.details?.cabinets?.material || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  cabinets: { 
                                    ...portfolioForm.details?.cabinets, 
                                    material: e.target.value 
                                  } 
                                } 
                              })}
                            />
                            <Input
                              placeholder="Cabinet Finish"
                              value={portfolioForm.details?.cabinets?.finish || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  cabinets: { 
                                    ...portfolioForm.details?.cabinets, 
                                    finish: e.target.value 
                                  } 
                                } 
                              })}
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <Input
                              placeholder="Countertop Material"
                              value={portfolioForm.details?.countertops?.material || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  countertops: { 
                                    ...portfolioForm.details?.countertops, 
                                    material: e.target.value 
                                  } 
                                } 
                              })}
                            />
                            <Input
                              placeholder="Countertop Color"
                              value={portfolioForm.details?.countertops?.color || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  countertops: { 
                                    ...portfolioForm.details?.countertops, 
                                    color: e.target.value 
                                  } 
                                } 
                              })}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <Input
                              placeholder="Flooring Type"
                              value={portfolioForm.details?.flooring?.type || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  flooring: { 
                                    ...portfolioForm.details?.flooring, 
                                    type: e.target.value 
                                  } 
                                } 
                              })}
                            />
                            <Input
                              placeholder="Flooring Color"
                              value={portfolioForm.details?.flooring?.color || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  flooring: { 
                                    ...portfolioForm.details?.flooring, 
                                    color: e.target.value 
                                  } 
                                } 
                              })}
                            />
                          </div>
                          <Textarea
                            placeholder="Special Features (one per line)"
                            value={portfolioForm.details?.special_features?.join('\n') || ''}
                            onChange={(e) => setPortfolioForm({ 
                              ...portfolioForm, 
                              details: { 
                                ...portfolioForm.details, 
                                special_features: e.target.value.split('\n').filter(f => f.trim()) 
                              } 
                            })}
                            rows={3}
                          />
                        </div>
                      )}

                      {/* Bathroom Details */}
                      {portfolioForm.category === 'bathroom' && (
                        <div className="space-y-3">
                          <h5 className="font-medium text-gray-800">Bathroom Specifications</h5>
                          <div className="grid grid-cols-2 gap-3">
                            <Input
                              placeholder="Vanity Style"
                              value={portfolioForm.details?.vanity?.style || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  vanity: { 
                                    ...portfolioForm.details?.vanity, 
                                    style: e.target.value 
                                  } 
                                } 
                              })}
                            />
                            <Input
                              placeholder="Vanity Material"
                              value={portfolioForm.details?.vanity?.material || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  vanity: { 
                                    ...portfolioForm.details?.vanity, 
                                    material: e.target.value 
                                  } 
                                } 
                              })}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <Input
                              placeholder="Flooring Type"
                              value={portfolioForm.details?.flooring?.type || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  flooring: { 
                                    ...portfolioForm.details?.flooring, 
                                    type: e.target.value 
                                  } 
                                } 
                              })}
                            />
                            <Input
                              placeholder="Fixture Style"
                              value={portfolioForm.details?.fixtures?.faucets || ''}
                              onChange={(e) => setPortfolioForm({ 
                                ...portfolioForm, 
                                details: { 
                                  ...portfolioForm.details, 
                                  fixtures: { 
                                    ...portfolioForm.details?.fixtures, 
                                    faucets: e.target.value 
                                  } 
                                } 
                              })}
                            />
                          </div>
                          <Textarea
                            placeholder="Special Features (one per line)"
                            value={portfolioForm.details?.special_features?.join('\n') || ''}
                            onChange={(e) => setPortfolioForm({ 
                              ...portfolioForm, 
                              details: { 
                                ...portfolioForm.details, 
                                special_features: e.target.value.split('\n').filter(f => f.trim()) 
                              } 
                            })}
                            rows={3}
                          />
                        </div>
                      )}
                    </div>

                    <Button type="submit" className="w-full">
                      {editingPortfolio ? 'Update Project' : 'Create Project'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {portfolioItems.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => editPortfolio(item)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deletePortfolioMutation.mutate(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.location}</p>
                    <Badge variant="secondary">{item.category}</Badge>
                    <p className="text-sm text-gray-700 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Testimonials Management */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Customer Testimonials</CardTitle>
              <Dialog open={testimonialDialogOpen} onOpenChange={setTestimonialDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={resetTestimonialForm}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Review
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                    <Input
                      placeholder="Customer Name"
                      value={testimonialForm.name || ''}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Location"
                      value={testimonialForm.location || ''}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, location: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Project Type"
                      value={testimonialForm.project || ''}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, project: e.target.value })}
                      required
                    />
                    <Select
                      value={testimonialForm.rating?.toString() || ''}
                      onValueChange={(value) => setTestimonialForm({ ...testimonialForm, rating: parseInt(value) })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 Stars</SelectItem>
                        <SelectItem value="4">4 Stars</SelectItem>
                        <SelectItem value="3">3 Stars</SelectItem>
                        <SelectItem value="2">2 Stars</SelectItem>
                        <SelectItem value="1">1 Star</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      placeholder="Customer Review"
                      value={testimonialForm.review || ''}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, review: e.target.value })}
                      rows={4}
                      required
                    />
                    <Input
                      placeholder="Image URL (optional)"
                      value={testimonialForm.image || ''}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, image: e.target.value })}
                    />
                    <Button type="submit" className="w-full">
                      {editingTestimonial ? 'Update Testimonial' : 'Create Testimonial'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="p-4 border rounded-lg bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <div className="flex items-center space-x-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => editTestimonial(testimonial)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteTestimonialMutation.mutate(testimonial.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{testimonial.location} • {testimonial.project}</p>
                    <p className="text-sm text-gray-700">{testimonial.review}</p>
                    {testimonial.image && (
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name} testimonial`} 
                        className="mt-2 h-20 w-20 object-cover rounded-lg"
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}