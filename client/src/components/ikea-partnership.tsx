import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Award, DollarSign, Clock, Wrench } from "lucide-react";

export default function IkeaPartnership() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: "Cost-Effective Solutions",
      description: "IKEA kitchens starting at $15,000 with professional installation"
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "European Design Quality",
      description: "Modern Scandinavian aesthetics with functional storage solutions"
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-600" />,
      title: "Professional Installation",
      description: "Expert assembly and installation with our full warranty coverage"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Faster Timeline",
      description: "Streamlined process from design to completion in 3-4 weeks"
    }
  ];

  const process = [
    "Free consultation and IKEA kitchen design",
    "Professional measurement and 3D planning",
    "Coordination of IKEA ordering and delivery",
    "Expert installation and finishing work",
    "Integration with custom countertops and backsplashes"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50" id="ikea-partnership">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
            Exclusive Partnership
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Authorized IKEA Kitchen Installer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to be an authorized IKEA kitchen installer, combining affordable European design 
            with our professional craftsmanship and installation expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Choose IKEA Kitchens with TGB?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4 border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      {benefit.icon}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our IKEA Installation Process
            </h3>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Perfect Combination: IKEA Design + Professional Installation
              </h3>
              <p className="text-gray-600 mb-4">
                Get the best of both worlds with IKEA's innovative kitchen solutions and our 15+ years 
                of professional installation experience. We handle everything from design planning to 
                final finishing touches.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-green-200 text-green-700">
                  <Check className="h-3 w-3 mr-1" />
                  Free Design Consultation
                </Badge>
                <Badge variant="outline" className="border-green-200 text-green-700">
                  <Check className="h-3 w-3 mr-1" />
                  Custom Integration Available
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => scrollToSection("contact")}
              >
                Get IKEA Kitchen Quote
              </Button>
              <p className="text-sm text-gray-500 mt-2">Free consultation & estimate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}