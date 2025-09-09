import Navigation from "@/components/navigation";
import ResidentialHero from "@/components/residential-hero";
import ResidentialServices from "@/components/residential-services";
import PortfolioSection from "@/components/portfolio-section";
import UrgencyOfferSection from "@/components/urgency-offer-section";
import ServiceAreasSection from "@/components/service-areas-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AiChat from "@/components/ai-chat";
import SEOContent from "@/components/seo-content";
import FAQSection from "@/components/faq-section";
import ReviewSchema from "@/components/review-schema";
import { useEffect } from "react";

export default function Home() {
  const homeFAQs = [
    {
      question: "How long does a typical home remodeling project take?",
      answer: "Project timelines vary based on scope. Kitchen remodels typically take 4-6 weeks, bathroom renovations 2-3 weeks, and home additions 3-6 months. We provide detailed timelines during your consultation."
    },
    {
      question: "Do you offer financing options for remodeling projects?",
      answer: "Yes, we work with several financing partners to offer flexible payment options. We can discuss financing during your free consultation to find a solution that fits your budget."
    },
    {
      question: "Are you licensed and insured in Maryland and DC?",
      answer: "Absolutely. TGB Contracting is fully licensed and insured in Maryland (MHIC #156643) and Washington DC (DCRA #410525000646). We carry comprehensive liability insurance and all our work is warranted."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve all of Maryland and Washington DC, with a focus on Montgomery County, Prince George's County, Anne Arundel County, and surrounding areas."
    },
    {
      question: "Do you handle permits and HOA approvals?",
      answer: "Yes, we handle all necessary permits and HOA approvals as part of our comprehensive service. Our team is experienced with local building codes and regulations."
    },
    {
      question: "What makes TGB Contracting different from other contractors?",
      answer: "We're a veteran-owned business with 15+ years of experience, official IKEA referral partner status, and a commitment to transparency. We provide detailed quotes, stick to timelines, and maintain constant communication throughout your project."
    }
  ];

  useEffect(() => {
    // Reset home page SEO when navigating back from other pages
    document.title = "TGB Contracting - Top-Rated Home Remodeling Contractor | Maryland, DC & Delaware";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Transform your home with TGB Contracting - Maryland's #1 rated residential remodeling contractor. Kitchen renovations, bathroom remodels, home additions. Licensed MD/DC/DE. Free estimates. Call today!");
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "home remodeling maryland, kitchen renovation dc, bathroom remodeling delaware, home additions maryland, veteran owned contractor, MHIC licensed contractor, residential remodeling, kitchen cabinets installation, IKEA kitchen installer");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', "https://www.tgbcontracting.com/");
    }
    
    // Remove any page-specific structured data
    const pageSpecificScript = document.querySelector('script[data-ikea-page]');
    if (pageSpecificScript) {
      pageSpecificScript.remove();
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <ResidentialHero />
      <ResidentialServices />
      <PortfolioSection />
      <UrgencyOfferSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FAQSection 
        faqs={homeFAQs}
        schemaContext="Home Remodeling"
      />
      <ContactSection />
      <Footer />
      <AiChat />
      <SEOContent />
      <ReviewSchema averageRating={5.0} reviewCount={150} />
    </main>
  );
}
