import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Star, Users } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      image: "/attached_assets/MHIC Logo_1749358570929.png",
      title: "MHIC Licensed",
      description: "Maryland Home Improvement Commission Licensed Contractor",
      category: "License"
    },
    {
      image: "/attached_assets/Veteran-Owned Certified_1749358570932.jpg",
      title: "Veteran-Owned Certified",
      description: "SBA Certified Veteran-Owned Small Business",
      category: "Certification"
    },
    {
      image: "/attached_assets/SBR - Seal_1749358570930.png",
      title: "Small Business Reserve",
      description: "Maryland Small Business Reserve Program Member",
      category: "Program"
    },
    {
      image: "/attached_assets/VSBE Program Seal_1749358570932.png",
      title: "VSBE Certified",
      description: "Veteran-Owned Small Business Enterprise Program",
      category: "Program"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Licensed & Certified Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a veteran-owned, fully licensed contractor, we bring military precision and professionalism to every residential project in Maryland and DC.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-gray-200">
              <CardContent className="p-6">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-16 h-16 mx-auto object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{cert.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {cert.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              Why Choose a Licensed & Certified Contractor?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our certifications ensure we meet the highest standards for quality, safety, and professionalism. 
              As a veteran-owned business, we bring military discipline and attention to detail to every project. 
              All work is backed by our 2-year limited warranty and full insurance coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}