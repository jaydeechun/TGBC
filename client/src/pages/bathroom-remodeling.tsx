import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Bath, 
  Droplets, 
  Shield, 
  Clock, 
  Sparkles, 
  Accessibility,
  Home,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";

export default function BathroomRemodeling() {
  useEffect(() => {
    // Update page SEO
    document.title = "Bathroom Remodeling Maryland DC | Luxury Bath Renovation - TGB Contracting";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Expert bathroom remodeling in Maryland & DC. Custom showers, vanities, tile work. ADA compliant options. Licensed & insured. Free estimates. Transform your bathroom today!");
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "bathroom remodeling maryland, bathroom renovation dc, walk-in shower installation, bathroom vanity maryland, tile shower dc, ada bathroom remodel, master bath renovation");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', "https://www.tgbcontracting.com/bathroom-remodeling");
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Bathroom Remodeling Services",
      "provider": {
        "@type": "Organization",
        "name": "TGB Contracting",
        "url": "https://www.tgbcontracting.com"
      },
      "areaServed": ["Maryland", "Washington DC"],
      "description": "Professional bathroom remodeling services including custom showers, vanities, and complete renovations",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "8000",
        "highPrice": "35000"
      }
    };

    const existingScript = document.querySelector('script[data-service-page]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-service-page', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const script = document.querySelector('script[data-service-page]');
      if (script) script.remove();
    };
  }, []);

  const features = [
    {
      icon: <Bath className="h-8 w-8" />,
      title: "Custom Walk-In Showers",
      description: "Frameless glass enclosures with luxury tile and fixtures"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Water-Efficient Fixtures",
      description: "Save water and money with modern eco-friendly options"
    },
    {
      icon: <Accessibility className="h-8 w-8" />,
      title: "ADA Compliant Design",
      description: "Accessible bathrooms for aging in place"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Turnaround",
      description: "Most bathrooms completed in 2-3 weeks"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Waterproofing Warranty",
      description: "10-year warranty on all waterproofing work"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Luxury Finishes",
      description: "Premium materials and designer fixtures"
    }
  ];

  const projectTypes = [
    {
      title: "Master Bath Renovation",
      features: ["Double vanity", "Soaking tub", "Walk-in shower", "Heated floors"],
      price: "$15,000 - $35,000"
    },
    {
      title: "Guest Bath Update",
      features: ["New vanity", "Tub/shower combo", "Modern fixtures", "Fresh tile"],
      price: "$8,000 - $15,000"
    },
    {
      title: "Powder Room Refresh",
      features: ["Pedestal sink", "Designer wallpaper", "New lighting", "Luxury fixtures"],
      price: "$5,000 - $10,000"
    },
    {
      title: "ADA Bathroom",
      features: ["Roll-in shower", "Grab bars", "Comfort height toilet", "Wide doorways"],
      price: "$12,000 - $25,000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 pt-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary flex items-center">
              <Home className="h-4 w-4" />
            </Link>
          </li>
          <ChevronRight className="h-4 w-4" />
          <li>
            <Link href="/#services" className="hover:text-primary">
              Services
            </Link>
          </li>
          <ChevronRight className="h-4 w-4" />
          <li className="text-primary font-medium">Bathroom Remodeling</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Transform Your Daily Routine
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Create Your Personal Spa Sanctuary
              </h1>
              <p className="text-xl mb-8 text-white/90">
                From luxurious master baths to efficient powder rooms, we design and build 
                bathrooms that combine beauty, functionality, and relaxation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="btn-accent">
                  Get FREE Bathroom Quote
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  View Bathroom Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/attached_assets/image_1749362373219.png" 
                alt="Luxury bathroom renovation by TGB Contracting featuring modern fixtures and tile work"
                className="rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">300+</div>
                  <div className="text-sm text-muted-foreground">Bathrooms Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose TGB for Bathroom Remodeling
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert craftsmanship meets innovative design to create bathrooms 
              that enhance your daily life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-accent mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Bathroom Remodeling Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple updates to complete transformations, we handle projects of all sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((project, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-primary">{project.price}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Love Your Bathroom Again?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how we can transform 
            your bathroom into a beautiful, functional space
          </p>
          <Button size="lg" variant="secondary" className="btn-accent">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}