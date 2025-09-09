import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Bath, Home, Hammer, Trees, Footprints, Check } from "lucide-react";
import { Link } from "wouter";

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: UtensilsCrossed,
      title: "Kitchen Remodeling",
      description: "Complete kitchen transformations including custom cabinets, countertops, appliances, and layout optimization for modern living.",
      features: ["Custom Cabinet Installation", "Countertop Replacement", "Appliance Integration"],
      color: "text-accent",
      link: "/kitchen-remodeling"
    },
    {
      icon: Bath,
      title: "Bathroom Renovation",
      description: "Luxury bathroom remodels with modern fixtures, tile work, vanities, and accessibility improvements for comfort and style.",
      features: ["Tile & Flooring Installation", "Fixture Upgrades", "Accessibility Features"],
      color: "text-secondary",
      link: "/bathroom-remodeling"
    },
    {
      icon: Home,
      title: "Whole Home Remodeling",
      description: "Complete home transformations including additions, layout changes, and comprehensive renovations for modern family living.",
      features: ["Room Additions", "Layout Optimization", "Structural Modifications"],
      color: "text-primary",
      link: "/home-additions"
    },
    {
      icon: Hammer,
      title: "Exterior Improvements",
      description: "Enhance your home's curb appeal with siding, roofing, windows, decks, and landscaping improvements.",
      features: ["Siding & Roofing", "Window Replacement", "Deck & Patio Construction"],
      color: "text-accent",
      link: null
    },
    {
      icon: Footprints,
      title: "Basement Finishing",
      description: "Transform unused basement space into functional living areas, home offices, or entertainment rooms.",
      features: ["Waterproofing Solutions", "Insulation & Drywall", "Egress Windows"],
      color: "text-secondary",
      link: "/basement-finishing"
    },
    {
      icon: Trees,
      title: "Custom Carpentry",
      description: "Handcrafted built-ins, trim work, crown molding, and custom millwork to add character and functionality.",
      features: ["Built-in Storage", "Crown Molding", "Custom Millwork"],
      color: "text-primary",
      link: null
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-bold text-4xl lg:text-5xl text-primary mb-6">Our Remodeling Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, we deliver exceptional home renovations that exceed expectations and add lasting value to your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className={`h-10 w-10 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl text-primary mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {service.link ? (
                    <Link href={service.link} className="flex-1">
                      <Button 
                        className="w-full btn-outline"
                        variant="outline"
                      >
                        Learn More
                      </Button>
                    </Link>
                  ) : null}
                  <Button 
                    className={service.link ? "flex-1 btn-primary" : "w-full btn-primary"}
                    onClick={scrollToContact}
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
