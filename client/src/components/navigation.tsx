import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Hammer } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location !== '/') {
      setLocation('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems: Array<{
    label: string;
    id?: string;
    route?: string;
    isPage?: boolean;
    isSection?: boolean;
  }> = [
    { label: "Services", id: "services", isSection: true },
    { label: "IKEA Kitchens", route: "/ikea-kitchens", isPage: true },
    { label: "Portfolio", id: "portfolio", isSection: true },
    { label: "Service Areas", id: "service-areas", isSection: true },
    { label: "Testimonials", id: "testimonials", isSection: true },
    { label: "Contact", id: "contact", isSection: true },
  ];

  return (
    <header className="bg-white/98 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick}
              className="flex items-center hover:opacity-80 transition-opacity bg-white rounded-lg p-2 shadow-sm"
            >
              <img 
                src="/attached_assets/TGB Contracting Logo_1749358570931.png" 
                alt="TGB Contracting Logo" 
                className="h-8 w-auto"
              />
            </button>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center bg-gray-50/80 rounded-full px-1 py-1">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.route || item.label}
                  href={item.route || "/"}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white px-4 py-2 rounded-full transition-all duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id || item.label}
                  onClick={() => item.id && scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white px-4 py-2 rounded-full transition-all duration-200"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
          
          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <a 
              href="tel:+1-443-261-0020" 
              className="hidden xl:flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors bg-blue-50/80 px-4 py-2 rounded-full text-sm font-semibold"
            >
              <Phone className="h-4 w-4" />
              <span>443-261-0020</span>
            </a>
            <Button 
              className="btn-accent px-5 py-2 text-sm font-semibold rounded-full"
              onClick={() => scrollToSection("contact")}
            >
              Free Quote
            </Button>
            <a 
              href="/admin-login" 
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors font-medium px-2"
            >
              Admin
            </a>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    item.isPage ? (
                      <Link
                        key={item.route || item.label}
                        href={item.route || "/"}
                        className="text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        key={item.id || item.label}
                        onClick={() => item.id && scrollToSection(item.id)}
                        className="text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors py-2"
                      >
                        {item.label}
                      </button>
                    )
                  ))}
                  <div className="pt-4 border-t space-y-2">
                    <a 
                      href="tel:+1-443-261-0020" 
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors py-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-semibold">443-261-0020</span>
                    </a>
                    <a 
                      href="/admin-login" 
                      className="block text-xs text-gray-600 hover:text-gray-800 transition-colors py-1 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Portal
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
