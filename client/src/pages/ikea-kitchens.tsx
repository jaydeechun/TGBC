import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import SEOHead from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, DollarSign, Clock, Award, Wrench, Home } from "lucide-react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@shared/schema";

export default function IkeaKitchensPage() {
  // Fetch IKEA kitchen portfolio items
  const { data: ikeaKitchens, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ['/api/portfolio', 'ikea'],
    queryFn: async () => {
      const response = await fetch('/api/portfolio?category=ikea');
      if (!response.ok) throw new Error('Failed to fetch IKEA kitchens');
      return response.json();
    }
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SEO data for IKEA page
  const seoData = {
    title: "IKEA Kitchen Installation Maryland DC | Official IKEA Referral Partner - TGB Contracting",
    description: "Professional IKEA kitchen installation by TGB Contracting - Official IKEA Referral Partner serving Maryland & DC. 2,500+ completed projects. Expert assembly, mechanical, electrical, plumbing. Free quotes!",
    keywords: "IKEA kitchen installation Maryland, IKEA kitchen installer DC, IKEA referral partner, IKEA SEKTION kitchen, kitchen remodeling maryland, IKEA cabinet installation, professional kitchen installer, IKEA kitchen assembly",
    canonicalUrl: "https://www.tgbcontracting.com/ikea-kitchens"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "IKEA Kitchen Installation Services - TGB Contracting",
    "description": "Professional IKEA kitchen installation and remodeling services by Official IKEA Referral Partner serving Maryland and Washington DC",
    "url": "https://www.tgbcontracting.com/ikea-kitchens",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TGB Contracting Group",
      "telephone": "+1-443-261-0020",
      "email": "admin@tgbcontracting.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Maryland",
        "addressRegion": "MD",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      { "@type": "State", "name": "Maryland" },
      { "@type": "City", "name": "Washington DC" }
    ],
    "serviceType": "IKEA Kitchen Installation",
    "brand": {
      "@type": "Brand",
      "name": "IKEA",
      "description": "Official IKEA Referral Partner"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Essential IKEA Kitchen Installation",
        "description": "Complete IKEA kitchen installation with basic mechanical, electrical, and plumbing work",
        "priceRange": "$15,000 - $25,000",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "name": "Premium IKEA Kitchen Installation",
        "description": "Enhanced IKEA kitchen installation with upgraded finishes and lighting",
        "priceRange": "$25,000 - $40,000",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Luxury IKEA Kitchen Installation", 
        "description": "Complete IKEA kitchen remodel with high-end finishes and custom modifications",
        "priceRange": "$40,000 - $60,000",
        "availability": "https://schema.org/InStock"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IKEA Kitchen Installation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IKEA Cabinet Assembly & Installation",
            "description": "Expert assembly and installation of IKEA SEKTION kitchen cabinets"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Mechanical, Electrical & Plumbing",
            "description": "Complete mechanical, electrical, and plumbing work for IKEA kitchen installations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "IKEA Kitchen Design Consultation",
            "description": "Professional IKEA kitchen design and planning services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "2500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Official IKEA Referral Partner",
        "value": "true"
      },
      {
        "@type": "PropertyValue",
        "name": "Completed IKEA Projects",
        "value": "2500+"
      },
      {
        "@type": "PropertyValue",
        "name": "MHIC Licensed",
        "value": "true"
      }
    ]
  };

  useEffect(() => {
    // Update page SEO
    document.title = seoData.title;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seoData.description);
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.setAttribute('content', seoData.keywords);
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', seoData.canonicalUrl);
    
    // Add structured data
    const existingScript = document.querySelector('script[type="application/ld+json"][data-ikea-page]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-ikea-page', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      // Cleanup structured data on unmount
      const script = document.querySelector('script[data-ikea-page]');
      if (script) script.remove();
    };
  }, []);

  const pricePackages = [
    {
      name: "Essential IKEA Kitchen",
      price: "Starting at $15,000",
      description: "Perfect starter kitchen installation package",
      features: [
        "IKEA cabinet assembly and installation",
        "Basic mechanical, electrical, and plumbing work",
        "Standard countertop installation",
        "Basic flooring preparation",
        "Simple backsplash installation"
      ]
    },
    {
      name: "Premium IKEA Kitchen",
      price: "Starting at $25,000", 
      description: "Enhanced installation with upgraded finishes",
      features: [
        "Premium IKEA cabinet installation",
        "Enhanced mechanical, electrical, and plumbing work and lighting",
        "Quartz or granite countertops",
        "Quality flooring installation",
        "Custom backsplash and tile work",
        "Professional painting and finishing"
      ],
      popular: true
    },
    {
      name: "Luxury IKEA Kitchen",
      price: "Starting at $40,000",
      description: "Complete remodel with high-end finishes",
      features: [
        "Expert IKEA cabinet modifications",
        "Advanced mechanical, electrical, and plumbing and electrical design",
        "Premium countertop materials",
        "Luxury flooring installation",
        "Designer backsplash and tile work",
        "Complete painting and trim work"
      ]
    }
  ];

  const whyChooseIkea = [
    {
      title: "Affordable Quality",
      description: "European design and quality at accessible prices",
      icon: <DollarSign className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Fast Installation", 
      description: "Streamlined process gets your kitchen done faster",
      icon: <Clock className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Proven Durability",
      description: "IKEA's 25-year warranty on cabinet frames",
      icon: <Award className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Professional Service",
      description: "Expert installation by licensed contractors",
      icon: <Wrench className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section 
        className="text-white py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 88, 163, 0.7) 0%, rgba(0, 61, 115, 0.75) 100%)' }}></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 text-white font-semibold px-4 py-2" style={{ backgroundColor: '#FFDB00', color: '#0058A3' }}>
                🇸🇪 Official IKEA Referral Partner
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                IKEA Kitchen Specialists
                <span className="block text-4xl mt-2">Maryland & DC</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                TGB Contracting Group is an official IKEA Referral Partner serving Maryland and Washington DC. 
                We are expert IKEA kitchen installers with over 2,500 completed IKEA kitchen projects from design to completion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="px-8 py-3 font-semibold text-lg"
                  style={{ backgroundColor: '#FFDB00', color: '#0058A3' }}
                  onClick={() => scrollToSection("contact")}
                >
                  Get Free IKEA Kitchen Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 px-8 py-3 font-semibold hover:bg-white hover:text-blue-700 transition-all"
                  style={{ borderColor: '#FFDB00', color: '#FFDB00', backgroundColor: '#0264ed' }}
                  onClick={() => scrollToSection("packages")}
                >
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TGB IKEA Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0058A3' }}>
              Your IKEA Kitchen Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              As an official IKEA Referral Partner with over 2,500 completed IKEA kitchen projects, 
              we know IKEA kitchens inside and out. Our dedicated IKEA division provides turnkey 
              solutions with out-of-the-box expertise for custom modifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FFDB00' }}>2,500+</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#0058A3' }}>IKEA Kitchens Completed</h3>
              <p className="text-gray-600">Years of experience with every IKEA cabinet system and configuration</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FFDB00' }}>Official</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#0058A3' }}>IKEA Referral Partner</h3>
              <p className="text-gray-600">Authorized referral partner serving Maryland and Washington DC markets</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FFDB00' }}>Expert</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#0058A3' }}>Custom Modifications</h3>
              <p className="text-gray-600">Safe cabinet modifications without compromising structural integrity</p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose IKEA Kitchens */}
      <section className="py-16" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0058A3' }}>
              Why Choose IKEA Kitchens with TGB?
            </h2>
            <p className="text-xl text-gray-600">
              European design quality with professional installation expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseIkea.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#FFDB00' }}>
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    <div style={{ color: '#0058A3' }}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#0058A3' }}>{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Package Pricing */}
      <section className="py-16 bg-white" id="packages">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0058A3' }}>
              IKEA Kitchen Installation Packages
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Professional installation packages to fit every budget
            </p>
            <div className="border rounded-lg p-4 max-w-3xl mx-auto" style={{ backgroundColor: '#FFF9E6', borderColor: '#FFDB00' }}>
              <p className="text-sm" style={{ color: '#0058A3' }}>
                <strong>Note:</strong> IKEA cabinets are purchased directly by the customer from IKEA. 
                Our packages cover installation, mechanical, electrical, and plumbing work, flooring, countertops, backsplash, and painting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricePackages.map((pkg, index) => (
              <Card key={index} className={`relative p-6 border-2 ${pkg.popular ? 'shadow-xl' : 'hover:shadow-lg'} transition-shadow`} 
                    style={{ borderColor: pkg.popular ? '#FFDB00' : '#E5E5E5' }}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 font-semibold" 
                         style={{ backgroundColor: '#FFDB00', color: '#0058A3' }}>
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#0058A3' }}>{pkg.name}</h3>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#FFDB00' }}>{pkg.price}</div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#0058A3' }} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-semibold ${pkg.popular ? '' : 'border-2'}`}
                    style={pkg.popular ? 
                      { backgroundColor: '#0058A3', color: 'white' } : 
                      { backgroundColor: 'white', color: '#0058A3', borderColor: '#0058A3' }
                    }
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0058A3' }}>
                Our IKEA Kitchen Process
              </h2>
              <p className="text-xl text-gray-600">
                From design to installation, we handle everything
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                     style={{ backgroundColor: '#0058A3' }}>
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0058A3' }}>Design Consultation</h3>
                <p className="text-gray-600">Free in-home consultation and IKEA kitchen planning using professional design tools</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                     style={{ backgroundColor: '#FFDB00', color: '#0058A3' }}>
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0058A3' }}>Customer Orders IKEA</h3>
                <p className="text-gray-600">Customer purchases IKEA kitchen directly from IKEA using our professional design</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                     style={{ backgroundColor: '#0058A3' }}>
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0058A3' }}>TGB Inventory Service</h3>
                <p className="text-gray-600">We inventory all your IKEA  materials to ensure nothing is missing before installation begins</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                     style={{ backgroundColor: '#FFDB00', color: '#0058A3' }}>
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0058A3' }}>Expert Installation</h3>
                <p className="text-gray-600">Professional assembly with custom modifications while maintaining structural integrity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed IKEA Kitchens Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0058A3' }}>
              Our Completed IKEA Kitchens
            </h2>
            
            <Badge className="mb-4 text-white font-semibold px-4 py-2" style={{ backgroundColor: '#FFDB00', color: '#0058A3' }}>
              🇸🇪 Official IKEA Referral Partner Projects
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {isLoading ? (
              // Loading skeleton
              [...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-video bg-gray-200 animate-pulse" />
                  <CardContent className="p-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-16 bg-gray-200 rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))
            ) : ikeaKitchens && ikeaKitchens.length > 0 ? (
              // Display IKEA kitchen portfolio items
              ikeaKitchens.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2" style={{ color: '#0058A3' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              // Fallback if no IKEA kitchens in database
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600">No IKEA kitchen projects available. Please add some through the admin panel.</p>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="px-8 py-3 font-semibold text-lg"
              style={{ backgroundColor: '#0058A3', color: 'white' }}
              onClick={() => scrollToSection("contact")}
            >
              Start Your IKEA Kitchen Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our IKEA Kitchen Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "TGB made our IKEA kitchen installation seamless. They handled everything from design to the final details. The quality is amazing and we saved thousands compared to custom cabinets."
                </p>
                <div className="font-semibold">Jessica M.</div>
                <div className="text-sm text-gray-600">Rockville, MD</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Professional service from start to finish. They coordinated everything with IKEA and the installation was flawless. Highly recommend for anyone considering an IKEA kitchen."
                </p>
                <div className="font-semibold">David L.</div>
                <div className="text-sm text-gray-600">Bethesda, MD</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "We got a beautiful, modern kitchen at a fraction of the cost. TGB's expertise in IKEA installation really shows. The project finished on time and within budget."
                </p>
                <div className="font-semibold">Maria S.</div>
                <div className="text-sm text-gray-600">Silver Spring, MD</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 text-white" style={{ backgroundColor: '#0058A3' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Your Dream IKEA Kitchen?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and quote for your IKEA kitchen installation
          </p>
          <Button 
            size="lg" 
            className="px-8 py-3 font-semibold text-lg"
            style={{ backgroundColor: '#FFDB00', color: '#0058A3' }}
            onClick={() => scrollToSection("contact")}
          >
            <Home className="mr-2 h-5 w-5" />
            Get Free Quote Today
          </Button>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}