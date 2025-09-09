import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  project: string;
  image?: string;
}

export default function TestimonialsSection() {
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const stats = [
    { value: "5.0", label: "Average Rating" },
    { value: "150+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">⭐ 5.0 Stars • Verified Reviews</div>
          <h2 className="font-bold text-4xl lg:text-5xl text-primary mb-6">Real Results from Real Homeowners</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 150+ satisfied families who trusted TGB Contracting to transform their homes. See why we're Maryland's highest-rated remodeling contractor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-muted/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">5.0</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {getInitials(testimonial.name)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.project}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center items-center divide-x divide-gray-200 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="px-8 text-center">
                  <div className="font-bold text-4xl text-primary mb-1">{stat.value}</div>
                  {index === 0 && (
                    <div className="flex text-yellow-400 justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <Button className="btn-accent">
              <Star className="mr-2 h-4 w-4" />
              View All Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
