import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { UtensilsCrossed, Bath, Home, Hammer, Building, Wrench, ArrowRight, Check, ChevronDown, ChevronUp, DollarSign, Clock, Star, Shield, Search } from "lucide-react";

export default function ResidentialServices() {
  const [openCards, setOpenCards] = useState<number[]>([]);
  
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleCard = (index: number) => {
    setOpenCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    {
      icon: UtensilsCrossed,
      title: "Kitchen Remodeling",
      description: "Complete kitchen construction and installation services. You choose your finishes - we handle all the construction work.",
      features: ["Cabinet Installation & Mounting", "Countertop Template & Installation", "Appliance Rough-in & Connections", "Custom Carpentry & Trim Work"],
      priceRange: "$25,000 - $75,000",
      timeline: "3-6 weeks",
      color: "bg-blue-50 text-blue-600",
      detailedInfo: {
        process: [
          "Initial consultation and space analysis",
          "3D design rendering and material selection",
          "Permit acquisition and demolition",
          "Electrical and plumbing rough-in",
          "Cabinet installation and countertop fabrication",
          "Final fixtures, appliances, and finishing touches"
        ],
        materials: [
          "Structural framing and support materials",
          "Drywall, joint compound, and fasteners",
          "Electrical wiring and outlet boxes",
          "Plumbing rough-in materials and fittings",
          "Professional installation and finishing supplies"
        ],

      }
    },
    {
      icon: Bath,
      title: "Bathroom Renovation",
      description: "Professional bathroom construction and installation. You select fixtures and finishes - we provide expert installation.",
      features: ["Shower & Tub Installation", "Tile Substrate & Waterproofing", "Plumbing & Electrical Rough-in", "Vanity & Fixture Mounting"],
      priceRange: "$15,000 - $45,000",
      timeline: "2-4 weeks",
      color: "bg-blue-50 text-blue-600",
      detailedInfo: {
        process: [
          "Design consultation and measurements",
          "Plumbing and electrical planning",
          "Demolition and prep work",
          "Tile installation and waterproofing",
          "Fixture installation and plumbing connections",
          "Final details and quality inspection"
        ],
        materials: [
          "Waterproofing membranes and moisture barriers",
          "Cement board and tile substrate materials",
          "Plumbing rough-in pipes and fittings",
          "Electrical wiring and GFCI outlets",
          "Ventilation ducting and exhaust fans"
        ],

      }
    },
    {
      icon: Home,
      title: "Whole Home Remodeling",
      description: "Complete structural and construction services for whole home renovations. You choose all finishes - we handle the construction.",
      features: ["Structural Modifications", "Systems Installation", "Framing & Drywall", "Trim & Millwork Installation"],
      priceRange: "$75,000+",
      timeline: "8-16 weeks",
      color: "bg-green-50 text-green-600",
      detailedInfo: {
        process: [
          "Comprehensive home assessment and design planning",
          "Architectural drawings and permit applications",
          "Structural modifications and load-bearing analysis",
          "Systems upgrades (electrical, plumbing, HVAC)",
          "Interior renovations and custom millwork",
          "Final inspections and project completion"
        ],
        materials: [
          "Structural steel and engineered lumber",
          "Drywall, insulation, and vapor barriers",
          "Electrical wiring, panels, and outlets",
          "Plumbing pipes, fittings, and rough-in",
          "Framing lumber and construction fasteners"
        ],

      }
    },
    {
      icon: Building,
      title: "Home Additions",
      description: "Complete construction services for home additions. We handle all structural and construction work - you select finishes.",
      features: ["Foundation & Framing", "Roofing & Siding Installation", "Electrical & Plumbing Rough-in", "Drywall & Trim Installation"],
      priceRange: "$50,000 - $150,000",
      timeline: "6-12 weeks",
      color: "bg-purple-50 text-purple-600",
      detailedInfo: {
        process: [
          "Site evaluation and feasibility study",
          "Architectural design and structural engineering",
          "Permit acquisition and code compliance",
          "Foundation work and framing",
          "Roofing, siding, and exterior finishing",
          "Interior completion and final inspections"
        ],
        materials: [
          "Foundation concrete and reinforcement steel",
          "Engineered lumber and steel framing",
          "Structural sheathing and house wrap",
          "Insulation and vapor barrier systems",
          "Drywall, trim, and construction fasteners"
        ],

      }
    },
    {
      icon: Hammer,
      title: "Basement Finishing",
      description: "Complete basement construction services including waterproofing and framing. You choose finishes - we handle the construction.",
      features: ["Waterproofing & Drainage", "Framing & Insulation", "Electrical & Plumbing Rough-in", "Drywall & Ceiling Installation"],
      priceRange: "$20,000 - $50,000",
      timeline: "4-8 weeks",
      color: "bg-red-50 text-red-600",
      detailedInfo: {
        process: [
          "Moisture and structural assessment",
          "Waterproofing and drainage solutions",
          "Insulation and framing installation",
          "Electrical and plumbing rough-in",
          "Drywall, flooring, and ceiling work",
          "Final fixtures and trim installation"
        ],
        materials: [
          "Waterproof membrane systems",
          "Rigid foam and batt insulation",
          "Moisture-resistant framing materials",
          "Electrical wiring and recessed lighting fixtures",
          "Drywall, primer, and construction adhesives"
        ],

      }
    },
    {
      icon: Wrench,
      title: "Exterior Improvements",
      description: "Professional exterior construction services including roofing, siding, and structural work. You select materials - we handle installation.",
      features: ["Roofing & Structural Work", "Siding & Trim Installation", "Window & Door Rough-in", "Deck Framing & Construction"],
      priceRange: "$15,000 - $60,000",
      timeline: "2-6 weeks",
      color: "bg-slate-50 text-slate-600",
      detailedInfo: {
        process: [
          "Exterior inspection and assessment",
          "Material selection and color coordination",
          "Permit applications and safety setup",
          "Removal of existing materials",
          "Installation of new systems",
          "Final cleanup and quality inspection"
        ],
        materials: [
          "Structural sheathing and house wrap",
          "Roofing underlayment and flashing",
          "Framing lumber and fasteners",
          "Electrical wiring and outlet boxes",
          "Construction adhesives and sealants"
        ],

      }
    },
    {
      icon: Search,
      title: "Mold Inspection (Maryland Only)",
      description: "Comprehensive mold inspection and testing services. Early detection and prevention to protect your home and family health.",
      features: ["Visual & Moisture Assessment", "Air Quality Testing", "Lab Analysis & Reports", "Prevention Recommendations"],
      priceRange: "$300 - $1,500",
      color: "bg-teal-50 text-teal-600",
      detailedInfo: {
        process: [
          "Visual inspection of entire property",
          "Moisture meter readings and mapping",
          "Air and surface sample collection",
          "Lab analysis and detailed reporting",
          "Remediation recommendations if needed",
          "Prevention plan development"
        ],
        materials: [
          "Professional moisture meters",
          "Air quality testing equipment",
          "Surface sampling supplies",
          "Lab analysis and reporting",
          "Prevention product recommendations"
        ],
      }
    },
    {
      icon: Shield,
      title: "Mold Remediation (Maryland Only)",
      description: "Professional mold removal and water damage restoration services. Complete remediation with certified expertise and 24/7 emergency response.",
      features: ["Safe Mold Removal", "Water Damage Restoration", "Structural Drying", "Prevention & Waterproofing"],
      priceRange: "$1,500 - $25,000+",
      color: "bg-amber-50 text-amber-600",
      detailedInfo: {
        process: [
          "Containment setup with HEPA filtration",
          "Safe mold removal following EPA guidelines",
          "Affected material removal and disposal",
          "Antimicrobial treatment application",
          "Structural drying and dehumidification",
          "Prevention systems and waterproofing"
        ],
        materials: [
          "HEPA air filtration systems",
          "Antimicrobial treatment solutions",
          "Vapor barriers and waterproof membranes",
          "Industrial dehumidification equipment",
          "EPA-approved cleaning agents and sealants"
        ],
      }
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">🏆 Your Most Trusted Maryland Home Remodeling Contractor</div>
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Complete Home Remodeling Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From concept to completion, we handle every aspect of your home renovation with precision, quality, and care.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>No Money Down</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isOpen = openCards.includes(index);
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${service.color}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center"><DollarSign className="h-3 w-3 mr-1" />{service.priceRange}</span>
                    <span>•</span>
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" />{service.timeline}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Collapsible open={isOpen} onOpenChange={() => toggleCard(index)}>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between mb-4 hover:bg-primary/5"
                      >
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-2" />
                          View Detailed Information
                        </span>
                        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          Our Process
                        </h4>
                        <div className="space-y-2">
                          {service.detailedInfo.process.map((step, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5">
                                {idx + 1}
                              </span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>


                    </CollapsibleContent>
                  </Collapsible>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      onClick={scrollToContact}
                    >
                      Get FREE Quote Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      📞 Or call now: <a href="tel:+1-443-261-0020" className="text-primary font-semibold hover:text-primary/80">443-261-0020</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl text-gray-900 mb-4">Ready to Start Your Home Transformation?</h3>
            <p className="text-gray-600 mb-6">
              Schedule your free consultation today and let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8"
                onClick={scrollToContact}
              >
                Schedule Free Consultation
              </Button>
              <div className="text-sm text-gray-500">
                📞 Or call directly: <a href="tel:+1-443-261-0020" className="text-primary hover:text-primary/80 font-semibold">443-261-0020</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}