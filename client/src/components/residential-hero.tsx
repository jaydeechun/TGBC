import { Button } from "@/components/ui/button";
import { Calculator, Images, Award, Shield, Clock, Star } from "lucide-react";

export default function ResidentialHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-700 to-slate-800">
      {/* Background overlay with kitchen image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/attached_assets/TGB Kitchen 1_1749359176367.png')`
        }}
      />
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-white animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">5.0 Rating</span>
              </div>
              
              <h1 className="font-bold text-4xl lg:text-6xl mb-6 leading-tight">
                The Remodeling Contractor
                <span className="text-blue-400"> Maryland & DC</span>
                <span className="block">Homeowners Trust</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
                <strong>Licensed • Insured • Veteran-Owned</strong><br/>
                Kitchen renovations, bathroom remodels, home additions. 150+ five-star reviews. Free estimates available.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span>Licensed MD/DC</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>Free Estimates</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                  onClick={() => scrollToSection("contact")}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Get FREE Quote Now
                </Button>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                  onClick={() => window.location.href = 'tel:+1-443-261-0020'}
                >
                  📞 Call (443) 261-0020
                </Button>
              </div>
            </div>
            
            {/* Right Column - Stats & Certifications */}
            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <h3 className="text-white font-bold text-2xl mb-6 text-center">Why Homeowners Choose TGB</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
                    <div className="text-sm">Happy Families</div>
                  </div>
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold text-green-400 mb-2">5.0</div>
                    <div className="text-sm">Star Rating</div>
                  </div>
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
                    <div className="text-sm">States Licensed</div>
                  </div>
                </div>
                
                {/* Certification badges */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <img src="/attached_assets/MHIC Logo_1749358570929.png" alt="Maryland Home Improvement Commission Licensed Contractor - TGB Contracting" className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-xs text-white">MHIC Licensed</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <img src="/attached_assets/Veteran-Owned Certified_1749358570932.jpg" alt="Veteran-Owned Small Business Certified - TGB Contracting" className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-xs text-white">Veteran-Owned</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm">Licensed & Fully Insured</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Free Design Consultations</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Financing Options Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}