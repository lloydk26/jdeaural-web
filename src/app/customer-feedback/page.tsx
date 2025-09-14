import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Feedback | JDE Aural Architecture',
  description: 'See what our clients say about our acoustical engineering services.',
};

const testimonials = [
  {
    quote: "I can finally sleep through the night! The traffic noise was unbearable, but Bre SoundProof's window inserts made a world of difference. Professional service and incredible results.",
    name: 'Sara L.',
    title: 'Condo Owner',
  },
  {
    quote: 'Our home office is now a sanctuary. We had our door and windows soundproofed, and the silence is golden. The team was efficient and the quality is top-notch. Highly recommended!',
    name: 'Mark T.',
    title: 'Homeowner',
  },
  {
    quote: "We hired Bre SoundProof for several units in our building. The tenants are thrilled with the noise reduction. It's a fantastic investment for property value and tenant satisfaction.",
    name: 'Jennifer C.',
    title: 'Building Manager',
  },
   {
    quote: "The transformation in our restaurant is amazing. Customers can now enjoy their meals without the overwhelming background noise. The acoustic panels look great too!",
    name: 'David R.',
    title: 'Restaurant Owner',
  },
  {
    quote: "Our new recording studio sounds incredible. The sound isolation is perfect, and the room acoustics are spot on. JDE Aural Architecture nailed it.",
    name: 'Emily S.',
    title: 'Musician',
  },
];

export default function CustomerFeedbackPage() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="outline" className="mb-4">Customer Feedback</Badge>
        <h1 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/70">
          We're proud to have helped so many people find peace and quiet in their own spaces.
        </p>
        
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full flex">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <Avatar className="w-20 h-20 mb-6 bg-muted">
                        <AvatarFallback className="bg-gray-200 dark:bg-gray-700">
                           <User className="w-10 h-10 text-gray-400 dark:text-gray-500"/>
                        </AvatarFallback>
                    </Avatar>
                    <blockquote className="text-foreground/80 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-primary">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-1rem] md:left-[-2rem] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-1rem] md:right-[-2rem] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
