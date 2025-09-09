import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  ChefHat, 
  Sparkles, 
  Wrench, 
  Clock, 
  Shield, 
  TrendingUp,
  Home,
  ChevronRight
} from "lucide-react";
import { Link } from "wouter";

export default function KitchenRemodeling() {
  useEffect(() => {
    // Update page SEO
    document.title = "Kitchen Remodeling Maryland DC | Custom Kitchen Renovation - TGB Contracting";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Transform your kitchen with TGB Contracting's expert remodeling services. Custom cabinets, countertops, islands. Licensed in MD/DC. Free design consultation. 15+ years experience.");
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "kitchen remodeling maryland, kitchen renovation dc, custom kitchen cabinets, granite countertops maryland, kitchen design bethesda, kitchen remodel rockville, quartz countertops dc");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', "https://www.tgbcontracting.com/kitchen-remodeling");
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Kitchen Remodeling Services",
      "provider": {
        "@type": "Organization",
        "name": "TGB Contracting",
        "url": "https://www.tgbcontracting.com"
      },
      "areaServed": ["Maryland", "Washington DC"],
      "description": "Professional kitchen remodeling services including custom cabinets, countertops, and complete renovations",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "15000",
        "highPrice": "75000"
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
      icon: <ChefHat className="h-8 w-8" />,
      title: "Custom Cabinet Design",
      description: "Tailored storage solutions that maximize space and match your style"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Premium Countertops",
      description: "Granite, quartz, marble, and butcher block options"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Professional Installation",
      description: "Licensed plumbers and electricians for code-compliant work"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Completion",
      description: "Average kitchen remodel completed in 4-6 weeks"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Warranty Protection",
      description: "Comprehensive warranties on materials and workmanship"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "ROI Focused",
      description: "Kitchen remodels typically return 70-80% of investment"
    }
  ];

  const processSteps = [
    { number: "01", title: "Free Consultation", description: "Discuss your vision and budget" },
    { number: "02", title: "Design & Planning", description: "3D renderings and material selection" },
    { number: "03", title: "Permits & Prep", description: "Handle all necessary permits" },
    { number: "04", title: "Construction", description: "Professional installation by experts" },
    { number: "05", title: "Final Walkthrough", description: "Ensure complete satisfaction" }
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
          <li className="text-primary font-medium">Kitchen Remodeling</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Maryland & DC's Kitchen Experts
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Transform Your Kitchen Into a Culinary Masterpiece
              </h1>
              <p className="text-xl mb-8 text-white/90">
                From minor updates to complete renovations, we create kitchens that blend 
                beauty with functionality. Licensed, insured, and committed to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="btn-accent">
                  Get FREE Kitchen Design
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  View Kitchen Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/attached_assets/TGB Kitchen 1_1749359176367.png" 
                alt="Modern kitchen renovation by TGB Contracting featuring custom cabinets and granite countertops"
                className="rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Kitchens Completed</div>
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
              Why Choose TGB for Kitchen Remodeling
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expert craftsmanship with innovative design to create kitchens 
              that exceed expectations
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

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Kitchen Remodeling Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach that ensures your project stays on time and on budget
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4 mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Create Your Dream Kitchen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and receive a detailed quote 
            within 48 hours
          </p>
          <Button size="lg" variant="secondary" className="btn-accent">
            Start Your Kitchen Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}