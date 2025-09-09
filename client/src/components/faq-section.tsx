import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
  schemaContext?: string; // Page-specific context for schema
}

export default function FAQSection({ 
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services",
  faqs,
  schemaContext = "General"
}: FAQSectionProps) {
  
  useEffect(() => {
    // Generate FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": `${schemaContext} FAQ - TGB Contracting`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const existingScript = document.querySelector('script[data-faq-schema]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.querySelector('script[data-faq-schema]');
      if (script) script.remove();
    };
  }, [faqs, schemaContext]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{title}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}