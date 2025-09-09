import { Hammer, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate home first
    if (location !== '/') {
      setLocation('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const services: Array<{
    name: string;
    section?: string;
    route?: string;
  }> = [
    { name: "Kitchen Remodeling", section: "services" },
    { name: "Bathroom Renovation", section: "services" }, 
    { name: "Whole Home Remodeling", section: "services" },
    { name: "Exterior Improvements", section: "services" },
    { name: "Basement Finishing", section: "services" },
    { name: "IKEA Kitchen Installation", route: "/ikea-kitchens" }
  ];

  const serviceAreas = [
    "Maryland Remodeling",
    "Washington DC Remodeling",
    "Bethesda Contractors",
    "Georgetown Contractors",
    "Ocean City Contractors",
    "Baltimore Contractors"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Sitemap",
    "Accessibility"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/attached_assets/TGB-Contracting-logo-white_1749358570931.png" 
                alt="TGB Contracting White Logo" 
                className="h-12 w-auto"
              />
              
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Veteran-owned residential remodeling contractor serving Maryland and Washington DC with military precision and quality craftsmanship since 2009.
            </p>
            
            {/* Certifications */}
            <div className="mb-6">
              <h4 className="font-semibold text-background mb-3">Certifications & Licenses</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <img src="/attached_assets/MHIC Logo_1749358570929.png" alt="MHIC Licensed" className="w-6 h-6" />
                  <span className="text-xs text-background/80">MHIC Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="/attached_assets/Veteran-Owned Certified_1749358570932.jpg" alt="Veteran Owned" className="w-6 h-6" />
                  <span className="text-xs text-background/80">Veteran-Owned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="/attached_assets/SBR - Seal_1749358570930.png" alt="SBR Program" className="w-6 h-6" />
                  <span className="text-xs text-background/80">SBR Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="/attached_assets/VSBE Program Seal_1749358570932.png" alt="VSBE Certified" className="w-6 h-6" />
                  <span className="text-xs text-background/80">VSBE Certified</span>
                </div>
              </div>
              
              {/* Military Insignia */}
              <div className="mt-4">
                <img 
                  src="/attached_assets/25th_Infantry_Division_shoulder_sleeve_insignia_1751826587717.png" 
                  alt="25th Infantry Division" 
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity mb-2"
                />
                <p className="text-xs text-background/80 font-medium">
                  25th Infantry<br />
                  "Light Fighters Lead the Way"
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-background/10 hover:bg-accent text-background w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="bg-background/10 hover:bg-accent text-background w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="bg-background/10 hover:bg-accent text-background w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="bg-background/10 hover:bg-accent text-background w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-google text-sm"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  {service.route ? (
                    <Link 
                      href={service.route} 
                      className="text-background/80 hover:text-accent transition-colors"
                    >
                      {service.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={() => service.section && scrollToSection(service.section)}
                      className="text-background/80 hover:text-accent transition-colors text-left"
                    >
                      {service.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection("service-areas")}
                    className="text-background/80 hover:text-accent transition-colors text-left"
                  >
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+1-443-261-0020" className="text-background/80 hover:text-accent transition-colors">
                  443-261-0020
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:admin@tgbcontracting.com" className="text-background/80 hover:text-accent transition-colors">
                  admin@tgbcontracting.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-accent mt-1"></i>
                <span className="text-background/80">
                  Serving MD & DC<br />
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-clock text-accent mt-1"></i>
                <span className="text-background/80">
                  Mon-Fri: 9AM-5PM<br />
                  Closed weekends
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 mb-4">
            &copy; {currentYear} TGB Contracting Group. All rights reserved. MHIC Licensed Contractor • SBA Certified Veteran-Owned Small Business • Serving MD, DC & DE since 2009
          </p>
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            {legalLinks.map((link, index) => (
              <a key={index} href="#" className="text-background/60 hover:text-accent transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
