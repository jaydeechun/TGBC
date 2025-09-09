import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import { getDistanceFromZip, getServiceAvailability } from "@/lib/zip-distances";

export default function ServiceAreasSection() {
  const [zipCode, setZipCode] = useState("");
  const [result, setResult] = useState<{
    status: 'yes' | 'probably' | 'contact';
    message: string;
    color: string;
  } | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckZip = () => {
    if (zipCode.length < 5) {
      setResult({
        status: 'contact',
        message: 'Please enter a valid 5-digit zip code',
        color: 'text-red-600'
      });
      return;
    }

    const distance = getDistanceFromZip(zipCode);
    const availability = getServiceAvailability(distance);
    setResult(availability);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCheckZip();
    }
  };

  const getIcon = () => {
    if (!result) return null;
    switch (result.status) {
      case 'yes':
        return <CheckCircle className="h-5 w-5" />;
      case 'probably':
        return <AlertCircle className="h-5 w-5" />;
      case 'contact':
        return <HelpCircle className="h-5 w-5" />;
    }
  };

  return (
    <section id="service-areas" className="py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h2 className="font-bold text-3xl lg:text-4xl text-white">Service Areas</h2>
          </div>
          
          <p className="text-white/90 text-lg mb-8">
            Licensed contractor serving Maryland & DC homeowners
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-white font-semibold text-xl mb-4">
              Check if we serve your area
            </h3>
            
            <div className="flex gap-3 mb-4">
              <Input
                type="text"
                placeholder="Enter your ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                onKeyPress={handleKeyPress}
                className="bg-white/90 text-gray-900 placeholder:text-gray-600 border-white/30"
                maxLength={5}
              />
              <Button 
                onClick={handleCheckZip}
                className="bg-accent hover:bg-accent/90 text-white px-8"
              >
                Check
              </Button>
            </div>

            {result && (
              <div className={`flex items-center gap-2 p-4 rounded-lg bg-white/20 ${result.color}`}>
                {getIcon()}
                <p className="text-white font-medium">{result.message}</p>
              </div>
            )}

            {result && (result.status === 'probably' || result.status === 'contact') && (
              <Button 
                onClick={scrollToContact}
                className="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30"
              >
                Contact Us to Confirm
              </Button>
            )}
          </div>

          <p className="text-white/80 text-sm mt-6">
            Don't see your area? <button onClick={scrollToContact} className="underline hover:no-underline">Contact us</button> - we may still serve your location!
          </p>
        </div>
      </div>
    </section>
  );
}
