import { useEffect } from "react";

interface ReviewSchemaProps {
  averageRating: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export default function ReviewSchema({ 
  averageRating, 
  reviewCount,
  bestRating = 5,
  worstRating = 1
}: ReviewSchemaProps) {
  
  useEffect(() => {
    // Generate Review/Rating Schema
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "TGB Contracting",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": averageRating.toString(),
        "reviewCount": reviewCount.toString(),
        "bestRating": bestRating.toString(),
        "worstRating": worstRating.toString()
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "reviewBody": "TGB Contracting exceeded our expectations with our kitchen remodel. The attention to detail and craftsmanship was outstanding.",
          "datePublished": "2024-11-15"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Michael Chen"
          },
          "reviewBody": "Professional team that delivered our basement renovation on time and within budget. Highly recommend!",
          "datePublished": "2024-10-22"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Jennifer Williams"
          },
          "reviewBody": "Tom and his team transformed our outdated bathroom into a modern spa-like retreat. Excellent communication throughout.",
          "datePublished": "2024-09-18"
        }
      ]
    };

    const existingScript = document.querySelector('script[data-review-schema]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-review-schema', 'true');
    script.textContent = JSON.stringify(reviewSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.querySelector('script[data-review-schema]');
      if (script) script.remove();
    };
  }, [averageRating, reviewCount, bestRating, worstRating]);

  return null;
}