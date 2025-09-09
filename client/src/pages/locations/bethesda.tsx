import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Home, Phone, Clock, Star, Award } from "lucide-react";
import FAQSection from "@/components/faq-section";
import { Link } from "wouter";

export default function BethesdaPage() {
  useEffect(() => {
    document.title = "Home Remodeling Bethesda MD | Kitchen & Bath Contractor - TGB Contracting";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Top-rated home remodeling contractor in Bethesda, MD. Kitchen renovations, bathroom remodels, home additions. Serving Chevy Chase, Potomac, and surrounding areas. Licensed & insured. Free estimates.");
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "bethesda home remodeling, kitchen renovation bethesda md, bathroom remodel bethesda, contractor bethesda maryland, home additions bethesda, chevy chase contractor");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', "https://www.tgbcontracting.com/locations/bethesda");
    }

    // Location-specific schema
    const locationSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "TGB Contracting - Bethesda",
      "description": "Home remodeling contractor serving Bethesda, MD and surrounding areas",
      "areaServed": {
        "@type": "City",
        "name": "Bethesda",
        "addressRegion": "MD"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bethesda",
        "addressRegion": "MD",
        "postalCode": "20814"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "38.9847",
        "longitude": "-77.0947"
      },
      "url": "https://www.tgbcontracting.com/locations/bethesda",
      "telephone": "(301) 637-2194",
      "priceRange": "$$-$$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    };

    const existingScript = document.querySelector('script[data-location-schema]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-location-schema', 'true');
    script.textContent = JSON.stringify(locationSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.querySelector('script[data-location-schema]');
      if (script) script.remove();
    };
  }, []);

  const bethesdaFAQs = [
    {
      question: "Do you serve all neighborhoods in Bethesda?",
      answer: "Yes, we serve all Bethesda neighborhoods including Downtown Bethesda, Chevy Chase, Bradley Hills, Burning Tree, Carderock, and surrounding areas. We're familiar with local HOA requirements and architectural guidelines."
    },
    {
      question: "What's the average cost of a kitchen remodel in Bethesda?",
      answer: "Kitchen remodels in Bethesda typically range from $40,000 to $150,000 depending on size and finishes. High-end renovations with luxury appliances and custom cabinetry can exceed $200,000. We provide free detailed estimates."
    },
    {
      question: "How long have you been working in Bethesda?",
      answer: "TGB Contracting has been serving Bethesda homeowners for over 15 years. We've completed hundreds of projects in the area and understand the unique architectural styles and requirements of Bethesda homes."
    },
    {
      question: "Do you handle historic home renovations in Bethesda?",
      answer: "Yes, we have extensive experience renovating historic homes in Bethesda while preserving their architectural integrity. We work closely with the Montgomery County Historic Preservation Commission when required."
    }
  ];

  const localProjects = [
    {
      title: "Downtown Bethesda Kitchen",
      type: "Complete kitchen renovation",
      features: ["Custom cabinetry", "Waterfall island", "Professional appliances"],
      neighborhood: "Downtown Bethesda"
    },
    {
      title: "Chevy Chase Master Bath",
      type: "Luxury bathroom remodel",
      features: ["Steam shower", "Heated floors", "Double vanity"],
      neighborhood: "Chevy Chase"
    },
    {
      title: "Bradley Hills Addition",
      type: "Second story addition",
      features: ["Master suite", "Home office", "Walk-in closets"],
      neighborhood: "Bradley Hills"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-1" />
              Serving Bethesda Since 2009
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Bethesda's Premier Home Remodeling Contractor
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Transform your Bethesda home with TGB Contracting. From luxury kitchen renovations 
              to complete home remodels, we bring 15+ years of local expertise to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="btn-accent">
                Get Free Bethesda Quote
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                <Phone className="h-5 w-5 mr-2" />
                Call (301) 637-2194
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Bethesda Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5.0</div>
              <div className="text-muted-foreground">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Years in Area</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Bethesda */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Home Remodeling Services in Bethesda
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions for Bethesda's diverse architectural styles, from contemporary 
              condos to historic colonials
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <Home className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kitchen Remodeling</h3>
              <p className="text-muted-foreground mb-4">
                Modern kitchens designed for Bethesda lifestyles. Custom cabinets, 
                premium countertops, and smart appliances.
              </p>
              <Link href="/kitchen-remodeling">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </Card>
            
            <Card className="p-6">
              <Home className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bathroom Renovation</h3>
              <p className="text-muted-foreground mb-4">
                Spa-like bathrooms with luxury fixtures, custom tile work, and 
                innovative storage solutions.
              </p>
              <Link href="/bathroom-remodeling">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </Card>
            
            <Card className="p-6">
              <Home className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Home Additions</h3>
              <p className="text-muted-foreground mb-4">
                Expand your Bethesda home with seamless additions. Master suites, 
                home offices, and in-law suites.
              </p>
              <Link href="/home-additions">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Recent Bethesda Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Quality craftsmanship delivered to your neighbors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {localProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6">
                  <Badge className="mb-3">{project.neighborhood}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.type}</p>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Bethesda Neighborhoods We Serve
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Downtown Bethesda", "Chevy Chase", "Bradley Hills", "Burning Tree",
              "Carderock", "Glen Echo Heights", "Westmoreland Hills", "Battery Park",
              "Edgemoor", "Wyngate", "Bannockburn", "Congressional Country Club Estates"
            ].map((area) => (
              <div key={area} className="flex items-center">
                <MapPin className="h-4 w-4 text-accent mr-2" />
                <span className="text-muted-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection 
        faqs={bethesdaFAQs}
        title="Bethesda Home Remodeling FAQs"
        schemaContext="Bethesda Home Remodeling"
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Bethesda Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Bethesda homeowners. Schedule your free 
            consultation and get a detailed quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="btn-accent">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              <Phone className="h-5 w-5 mr-2" />
              (301) 637-2194
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
