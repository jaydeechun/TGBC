import { Button } from "@/components/ui/button";
import { Calculator, Images, IdCard, Star, Clock } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(210, 70%, 24%) 0%, hsl(196, 40%, 54%) 70%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h1 className="font-bold text-5xl lg:text-7xl mb-6 leading-tight">
            Maryland's #1 Rated 
            <span className="text-accent"> Home Remodeling</span> Experts
          </h1>
          <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
            Transform your house into your dream home. Kitchen renovations, bathroom remodels, home additions & more. 
            Licensed in MD/DC/DE with 15+ years of excellence. Free estimates!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="btn-accent text-lg px-8 py-4 h-auto"
              onClick={() => scrollToSection("contact")}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Get Free Estimate
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white text-lg px-8 py-4 h-auto"
              onClick={() => scrollToSection("portfolio")}
            >
              <Images className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 opacity-80">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <IdCard className="h-5 w-5 text-accent" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="font-medium">5-Star Reviews</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-medium">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
