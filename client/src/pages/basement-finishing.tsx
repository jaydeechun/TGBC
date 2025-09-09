import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Layers, 
  Tv, 
  Dumbbell, 
  Users, 
  Lightbulb, 
  Droplets,
  Home,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";

export default function BasementFinishing() {
  useEffect(() => {
    // Update page SEO
    document.title = "Basement Finishing Maryland DC | Basement Remodeling - TGB Contracting";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Transform your basement into livable space with TGB Contracting. Basement finishing, waterproofing, egress windows. Licensed MD/DC contractor. Free estimates.");
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "basement finishing maryland, basement remodeling dc, finished basement contractor, basement waterproofing maryland, egress window installation, man cave builder, basement renovation bethesda");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', "https://www.tgbcontracting.com/basement-finishing");
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Basement Finishing Services",
      "provider": {
        "@type": "Organization",
        "name": "TGB Contracting",
        "url": "https://www.tgbcontracting.com"
      },
      "areaServed": ["Maryland", "Washington DC"],
      "description": "Professional basement finishing services including waterproofing, framing, and complete renovations",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "20000",
        "highPrice": "80000"
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
      icon: <Droplets className="h-8 w-8" />,
      title: "Waterproofing First",
      description: "Comprehensive moisture control for dry, healthy basements"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Smart Lighting Design",
      description: "Recessed and accent lighting to brighten your space"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Premium Flooring",
      description: "Waterproof luxury vinyl, carpet, or polished concrete"
    },
    {
      icon: <Tv className="h-8 w-8" />,
      title: "Entertainment Ready",
      description: "Pre-wiring for home theaters and sound systems"
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Multi-Purpose Design",
      description: "Flexible spaces for work, play, and exercise"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Legal Bedrooms",
      description: "Egress windows and proper ventilation for bedrooms"
    }
  ];

  const basementIdeas = [
    {
      title: "Entertainment Center",
      description: "Home theater, game room, and bar area",
      features: ["Surround sound pre-wire", "Wet bar with sink", "Gaming zone", "LED accent lighting"],
      image: "/attached_assets/image_1749365215463.png"
    },
    {
      title: "In-Law Suite",
      description: "Complete living space with bedroom and bath",
      features: ["Private entrance", "Full bathroom", "Kitchenette", "Separate HVAC zone"],
      image: "/attached_assets/image_1749365481962.png"
    },
    {
      title: "Home Office",
      description: "Quiet workspace away from household activity",
      features: ["Built-in desks", "Video call lighting", "Soundproofing", "Storage solutions"],
      image: "/attached_assets/image_1749366607803.png"
    },
    {
      title: "Kids' Playroom",
      description: "Safe, fun space for children to play and learn",
      features: ["Soft flooring", "Built-in storage", "Activity zones", "Easy-clean surfaces"],
      image: "/attached_assets/image_1749366728640.png"
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
          <li className="text-primary font-medium">Basement Finishing</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Unlock Your Home's Potential
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Transform Your Basement Into Your Favorite Room
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Double your living space with a professionally finished basement. 
                From entertainment centers to rental suites, we create beautiful, 
                functional spaces below grade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="btn-accent">
                  Get FREE Basement Quote
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  View Basement Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/attached_assets/image_1749367202348.png" 
                alt="Finished basement by TGB Contracting featuring entertainment area and modern design"
                className="rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Basements Finished</div>
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
              Why Choose TGB for Basement Finishing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle every aspect of your basement transformation, from waterproofing to final touches
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

      {/* Basement Ideas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Popular Basement Finishing Ideas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get inspired by these popular basement transformations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {basementIdeas.map((idea, index) => (
              <Card key={index} className="overflow-hidden">
                <img 
                  src={idea.image} 
                  alt={`${idea.title} basement design by TGB Contracting`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{idea.title}</h3>
                  <p className="text-muted-foreground mb-4">{idea.description}</p>
                  <ul className="space-y-2">
                    {idea.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Layers className="h-4 w-4 text-accent mr-2" />
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Basement Finishing Process
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Phase 1: Preparation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Moisture testing and waterproofing
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Egress window installation if needed
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Electrical and plumbing rough-in
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Phase 2: Construction</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Framing and insulation
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Drywall and painting
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Flooring and finishing touches
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Double Your Living Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's transform your basement into the space you've always wanted. 
            Schedule your free consultation today!
          </p>
          <Button size="lg" variant="secondary" className="btn-accent">
            Get Your Free Basement Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}