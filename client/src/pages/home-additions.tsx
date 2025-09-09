import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Home as HomeIcon, 
  Expand, 
  Ruler, 
  HardHat, 
  FileText, 
  TrendingUp,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";

export default function HomeAdditions() {
  useEffect(() => {
    // Update page SEO
    document.title = "Home Additions Maryland DC | Room Additions & Second Story - TGB Contracting";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Expand your living space with TGB Contracting's home addition services. Room additions, second stories, in-law suites. Licensed MD/DC contractor. Free estimates.");
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "home additions maryland, room addition dc, second story addition, sunroom maryland, in-law suite contractor, home expansion bethesda, garage addition rockville");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', "https://www.tgbcontracting.com/home-additions");
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Home Addition Services",
      "provider": {
        "@type": "Organization",
        "name": "TGB Contracting",
        "url": "https://www.tgbcontracting.com"
      },
      "areaServed": ["Maryland", "Washington DC"],
      "description": "Professional home addition services including room additions, second stories, and sunrooms",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "40000",
        "highPrice": "200000"
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
      icon: <Expand className="h-8 w-8" />,
      title: "Seamless Integration",
      description: "Additions that match your home's existing architecture"
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "Custom Design",
      description: "Tailored floor plans to meet your specific needs"
    },
    {
      icon: <HardHat className="h-8 w-8" />,
      title: "Structural Expertise",
      description: "Licensed engineers ensure safe, code-compliant construction"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Permit Management",
      description: "We handle all permits and HOA approvals"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Value Enhancement",
      description: "Increase your home's value and living space"
    },
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Full-Service Build",
      description: "From foundation to finishing touches"
    }
  ];

  const additionTypes = [
    {
      title: "Room Addition",
      description: "Add a bedroom, office, or family room",
      features: ["Single or multi-room", "Matching exterior", "Full utilities"],
      image: "/attached_assets/image_1749362008880.png"
    },
    {
      title: "Second Story Addition",
      description: "Double your living space by building up",
      features: ["Master suite addition", "Multiple bedrooms", "Structural reinforcement"],
      image: "/attached_assets/image_1749361926484.png"
    },
    {
      title: "Sunroom/Four Season Room",
      description: "Enjoy outdoor living year-round",
      features: ["Climate controlled", "Energy efficient glass", "Custom design"],
      image: "/attached_assets/image_1749362389641.png"
    },
    {
      title: "In-Law Suite",
      description: "Private living space for extended family",
      features: ["Full kitchen/bath", "Separate entrance", "Accessible design"],
      image: "/attached_assets/image_1749363036510.png"
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
              <HomeIcon className="h-4 w-4" />
            </Link>
          </li>
          <ChevronRight className="h-4 w-4" />
          <li>
            <Link href="/#services" className="hover:text-primary">
              Services
            </Link>
          </li>
          <ChevronRight className="h-4 w-4" />
          <li className="text-primary font-medium">Home Additions</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Expand Your Living Space
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional Home Additions That Grow With You
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Need more space? From room additions to second stories, we create seamless 
                expansions that feel like they've always been part of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="btn-accent">
                  Get FREE Addition Quote
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  View Addition Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/attached_assets/image_1749361367462.png" 
                alt="Home addition project by TGB Contracting showing seamless integration with existing structure"
                className="rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Additions Completed</div>
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
              Why Choose TGB for Home Additions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring expertise, precision, and creativity to every home expansion project
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

      {/* Addition Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Types of Home Additions We Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From single rooms to entire floors, we have the expertise for any addition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {additionTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden">
                <img 
                  src={type.image} 
                  alt={`${type.title} by TGB Contracting`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <HomeIcon className="h-4 w-4 text-accent mr-2" />
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Expand Your Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create the perfect addition for your growing needs
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