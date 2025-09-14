import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I can finally sleep through the night! The traffic noise was unbearable, but JDE Aural's acoustic solutions made a world of difference. Professional service and incredible results.",
    name: 'Sara L.',
    title: 'Condo Owner',
    rating: 5
  },
  {
    quote: 'Our home office is now a sanctuary. We had our door and windows soundproofed, and the silence is golden. The team was efficient and the quality is top-notch. Highly recommended!',
    name: 'Mark T.',
    title: 'Homeowner',
    rating: 5
  },
  {
    quote: 'The acoustic treatment in our conference room has dramatically improved our video calls and meetings. Clear communication at last!',
    name: 'Jennifer R.',
    title: 'Office Manager',
    rating: 5
  },
  {
    quote: 'Exceptional work on our restaurant renovation. The noise levels are perfect - intimate enough for conversation but lively enough for ambiance.',
    name: 'David M.',
    title: 'Restaurant Owner',
    rating: 5
  }
];

export default function CustomerFeedback() {
  return (
    <>
      <Helmet>
        <title>Customer Feedback - JDE Aural Architecture</title>
        <meta name="description" content="Read what our clients have to say about their experience with JDE Aural Architecture's acoustical engineering services." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Feedback</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience 
              with JDE Aural Architecture.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-foreground/80 mb-6 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>
                          <User className="w-6 h-6 text-gray-400"/>
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-primary text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
