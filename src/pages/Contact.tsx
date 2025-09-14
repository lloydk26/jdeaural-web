import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - JDE Aural Architecture</title>
        <meta name="description" content="Get in touch with JDE Aural Architecture for your acoustical engineering needs. We're here to help with consultations and project inquiries." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Ready to discuss your acoustical engineering needs? Get in touch with our team for a consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection>
              <Card className="text-center">
                <CardContent className="p-8">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-foreground/70">info@jdeaural.com</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <Card className="text-center">
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-foreground/70">(555) 123-4567</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="text-center">
                <CardContent className="p-8">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-foreground/70">123 Sound Ave<br />Acoustic City, AC 12345</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Get a Quote</h2>
                <p className="text-foreground/70 mb-6">
                  Contact form coming soon. For now, please reach out directly using the information above.
                </p>
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
