import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Images, X } from "lucide-react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: portfolioItems = [], isLoading } = useQuery<any[]>({
    queryKey: ["/api/portfolio"],
  });

  const handleViewDetails = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const createPlaceholderSVG = (category: string) => {
    const colors = {
      kitchen: '#f97316', // orange
      bathroom: '#3b82f6', // blue  
      addition: '#10b981', // green
      commercial: '#8b5cf6' // purple
    };
    
    const icons = {
      kitchen: 'M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z',
      bathroom: 'M9,2V8H11V22H13V8H15V2H9M12,4.5A0.5,0.5 0 0,1 12.5,5A0.5,0.5 0 0,1 12,5.5A0.5,0.5 0 0,1 11.5,5A0.5,0.5 0 0,1 12,4.5Z',
      addition: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
      commercial: 'M6,3V7H18V3H6M4,8V21H20V8H4Z'
    };
    
    const color = colors[category as keyof typeof colors] || '#6b7280';
    const icon = icons[category as keyof typeof icons] || icons.kitchen;
    
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#f3f4f6"/>
        <rect x="50" y="50" width="300" height="200" fill="white" rx="8"/>
        <circle cx="200" cy="120" r="30" fill="${color}" opacity="0.2"/>
        <svg x="185" y="105" width="30" height="30" viewBox="0 0 24 24" fill="${color}">
          <path d="${icon}"/>
        </svg>
        <text x="200" y="180" text-anchor="middle" fill="#374151" font-family="Arial, sans-serif" font-size="16" font-weight="bold">${category.charAt(0).toUpperCase() + category.slice(1)} Project</text>
        <text x="200" y="200" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">Photo Coming Soon</text>
      </svg>
    `)}`;
  };



  const filters = [
    { id: "all", label: "All Projects" },
    { id: "kitchen", label: "Kitchens" },
    { id: "bathroom", label: "Bathrooms" },
    { id: "exterior", label: "Exterior" },
    { id: "whole-home", label: "Whole Home" }
  ];

  const filteredItems = activeFilter === "all" 
    ? (portfolioItems as any[])
    : (portfolioItems as any[]).filter((item: any) => item.category === activeFilter);

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-primary mb-6">Our Transformations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See how we've transformed homes across Maryland, Washington DC, and Delaware with quality craftsmanship and attention to detail.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={activeFilter === filter.id ? "btn-accent" : ""}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={item.image || createPlaceholderSVG(item.category)} 
                  alt={`${item.title} - ${item.category} remodeling project in ${item.location} by TGB Contracting`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = createPlaceholderSVG(item.category);
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors">
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {item.category === "kitchen" ? "Kitchen" : 
                       item.category === "bathroom" ? "Bathroom" :
                       item.category === "exterior" ? "Exterior" : "Whole Home"}
                    </Badge>
                  </div>

                </div>
              </div>
              <div className="bg-white rounded-b-2xl p-6 shadow-lg">
                <h3 className="font-bold text-xl text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{item.location}</span>
                  <Button 
                    variant="ghost" 
                    className="text-accent hover:text-accent/80"
                    onClick={() => handleViewDetails(item)}
                  >
                    View Details →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="btn-accent"
          >
            <Images className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>

      {/* Portfolio Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedItem?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={selectedItem.image || createPlaceholderSVG(selectedItem.category)} 
                  alt={`${selectedItem.title} - ${selectedItem.category} remodeling project in ${selectedItem.location} by TGB Contracting`}
                  className="w-full h-96 object-cover rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = createPlaceholderSVG(selectedItem.category);
                  }}
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {selectedItem.category === "kitchen" ? "Kitchen" : 
                     selectedItem.category === "bathroom" ? "Bathroom" :
                     selectedItem.category === "exterior" ? "Exterior" : "Whole Home"}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Project Overview</h3>
                  <p className="text-muted-foreground mb-4">{selectedItem.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-primary">Location</p>
                      <p className="text-sm">{selectedItem.location}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-primary">Budget Range</p>
                      <p className="text-sm">{selectedItem.details?.budget || "Contact for estimate"}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-sm text-primary">Timeline</p>
                      <p className="text-sm">{selectedItem.details?.timeline || "Contact for estimate"}</p>
                    </div>
                  </div>
                </div>

                {selectedItem.details && (
                  <>
                    {/* Kitchen Details */}
                    {selectedItem.category === "kitchen" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-primary mb-2">Cabinetry</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-medium">Style:</span> {selectedItem.details.cabinets?.style}</p>
                              <p><span className="font-medium">Material:</span> {selectedItem.details.cabinets?.material}</p>
                              <p><span className="font-medium">Finish:</span> {selectedItem.details.cabinets?.finish}</p>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-primary mb-2">Countertops</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-medium">Material:</span> {selectedItem.details.countertops?.material}</p>
                              <p><span className="font-medium">Color:</span> {selectedItem.details.countertops?.color}</p>
                              <p><span className="font-medium">Edge:</span> {selectedItem.details.countertops?.edge}</p>
                              <p><span className="font-medium">Features:</span> {selectedItem.details.countertops?.features}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-primary mb-2">Flooring</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-medium">Type:</span> {selectedItem.details.flooring?.type}</p>
                              <p><span className="font-medium">Color:</span> {selectedItem.details.flooring?.color}</p>
                              <p><span className="font-medium">Size:</span> {selectedItem.details.flooring?.size}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-primary mb-2">Appliances</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-medium">Refrigerator:</span> {selectedItem.details.appliances?.refrigerator}</p>
                              <p><span className="font-medium">Range:</span> {selectedItem.details.appliances?.range}</p>
                              <p><span className="font-medium">Dishwasher:</span> {selectedItem.details.appliances?.dishwasher}</p>
                              <p><span className="font-medium">Microwave:</span> {selectedItem.details.appliances?.microwave}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-primary mb-2">Lighting</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-medium">Pendants:</span> {selectedItem.details.lighting?.pendants}</p>
                              <p><span className="font-medium">Recessed:</span> {selectedItem.details.lighting?.recessed}</p>
                              <p><span className="font-medium">Under Cabinet:</span> {selectedItem.details.lighting?.under_cabinet}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-primary mb-2">Special Features</h4>
                            <ul className="space-y-1 text-sm">
                              {selectedItem.details.special_features?.map((feature: string, index: number) => (
                                <li key={index}>• {feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bathroom Details */}
                    {selectedItem.category === "bathroom" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-primary mb-2">Vanity</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-medium">Style:</span> {selectedItem.details.vanity?.style}</p>
                              <p><span className="font-medium">Material:</span> {selectedItem.details.vanity?.material}</p>
                              <p><span className="font-medium">Finish:</span> {selectedItem.details.vanity?.finish}</p>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-primary mb-2">Countertops</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-medium">Material:</span> {selectedItem.details.countertops?.material}</p>
                              <p><span className="font-medium">Color:</span> {selectedItem.details.countertops?.color}</p>
                              <p><span className="font-medium">Edge:</span> {selectedItem.details.countertops?.edge}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-primary mb-2">Flooring & Tile</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-medium">Floor Type:</span> {selectedItem.details.flooring?.type}</p>
                              <p><span className="font-medium">Floor Color:</span> {selectedItem.details.flooring?.color}</p>
                              <p><span className="font-medium">Shower Walls:</span> {selectedItem.details.tile?.shower_walls}</p>
                              <p><span className="font-medium">Accent Tile:</span> {selectedItem.details.tile?.accent}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-primary mb-2">Fixtures</h4>
                            <div className="space-y-1 text-sm">
                              <p><span className="font-medium">Tub:</span> {selectedItem.details.fixtures?.tub}</p>
                              <p><span className="font-medium">Shower:</span> {selectedItem.details.fixtures?.shower}</p>
                              <p><span className="font-medium">Toilet:</span> {selectedItem.details.fixtures?.toilet}</p>
                              <p><span className="font-medium">Faucets:</span> {selectedItem.details.fixtures?.faucets}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-primary mb-2">Special Features</h4>
                            <ul className="space-y-1 text-sm">
                              {selectedItem.details.special_features?.map((feature: string, index: number) => (
                                <li key={index}>• {feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button 
                  className="btn-accent flex-1"
                  onClick={() => {
                    setIsModalOpen(false);
                    document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Free Estimate
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
