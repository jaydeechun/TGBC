import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Star, Home, Wrench, Clock, Shield } from "lucide-react";

export default function BowieLevittHomesPage() {
  return (
    <>
      <SEOHead
        title="Bowie Levitt Homes - Premium Home Services | TGB Contracting"
        description="TGB Contracting provides comprehensive home services for Bowie Levitt Homes community. Kitchen remodeling, bathroom renovations, and maintenance services for your luxury home."
        keywords="Bowie Levitt Homes, home services, kitchen remodeling, bathroom renovation, luxury home maintenance, TGB Contracting"
        canonicalUrl="https://tgbcontracting.com/bowie-levitt-homes"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent pt-20 pb-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="bg-white/10 text-white border-white/30 mb-6">
              Preferred Contractor
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bowie Levitt Homes
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-white/90">
                Premium Home Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Trusted contractor for Bowie Levitt Homes community. Expert kitchen remodeling, 
              bathroom renovations, and comprehensive home maintenance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                onClick={() => window.location.href = 'tel:443-261-0020'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (443) 261-0020
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TGB for Bowie Levitt Homes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Bowie Levitt Homes Choose TGB
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the quality and craftsmanship standards of Bowie Levitt Homes. 
              Our expertise ensures your home improvements maintain and enhance your property value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
                <p className="text-muted-foreground">
                  Fully licensed MHIC contractor with comprehensive insurance coverage for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">5-Star Quality</h3>
                <p className="text-muted-foreground">
                  Consistently rated 5-stars by homeowners who demand excellence in craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Luxury Home Expert</h3>
                <p className="text-muted-foreground">
                  Specialized experience with high-end homes and luxury finishes that match Bowie Levitt standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Timely Completion</h3>
                <p className="text-muted-foreground">
                  Projects completed on time and within budget, minimizing disruption to your daily life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services for Bowie Levitt Homes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Services for Bowie Levitt Homes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From kitchen renovations to complete home improvements, we deliver the quality 
              and attention to detail your Bowie Levitt home deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kitchen Remodeling */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 mb-2">
                    Most Popular
                  </Badge>
                  <h3 className="text-2xl font-bold">Kitchen Remodeling</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  Transform your kitchen with custom cabinetry, premium countertops, and luxury finishes 
                  that complement your home's sophisticated design.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Custom cabinet design and installation
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Quartz and granite countertops
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Premium appliance integration
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Luxury flooring installation
                  </li>
                </ul>
                <Button className="btn-accent w-full">
                  View Kitchen Portfolio
                </Button>
              </CardContent>
            </Card>

            {/* Bathroom Renovations */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 mb-2">
                    Luxury Focus
                  </Badge>
                  <h3 className="text-2xl font-bold">Bathroom Renovations</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  Create spa-like bathrooms with elegant fixtures, custom vanities, and premium tile work 
                  that reflects the luxury of your Bowie Levitt home.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Custom vanity design and installation
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Luxury tile and stone work
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Premium fixture installation
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Heated flooring systems
                  </li>
                </ul>
                <Button className="btn-accent w-full">
                  View Bathroom Portfolio
                </Button>
              </CardContent>
            </Card>

            {/* Home Additions */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 mb-2">
                    Expand Living
                  </Badge>
                  <h3 className="text-2xl font-bold">Home Additions</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  Expand your living space with seamless additions that match your home's architectural 
                  style and maintain the Bowie Levitt aesthetic.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Second story additions
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Sunroom and family room additions
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Master suite additions
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Garage and storage additions
                  </li>
                </ul>
                <Button className="btn-accent w-full">
                  View Addition Portfolio
                </Button>
              </CardContent>
            </Card>

            {/* Maintenance Services */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-purple-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 mb-2">
                    Ongoing Care
                  </Badge>
                  <h3 className="text-2xl font-bold">Maintenance Services</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  Keep your Bowie Levitt home in pristine condition with our comprehensive maintenance 
                  and repair services designed for luxury homes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Preventive maintenance programs
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Emergency repair services
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Seasonal home inspections
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Warranty and follow-up care
                  </li>
                </ul>
                <Button className="btn-accent w-full">
                  Schedule Maintenance
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Bowie Levitt Home?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact TGB Contracting today for a free consultation and estimate. 
              Let us help you maintain and improve your luxury home with the quality it deserves.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-white/90">(443) 261-0020</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-white/90">info@tgbcontracting.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Service Area</h3>
                <p className="text-white/90">Maryland, DC</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                onClick={() => window.location.href = 'tel:443-261-0020'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Free Estimate
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                onClick={() => window.location.href = 'mailto:info@tgbcontracting.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}