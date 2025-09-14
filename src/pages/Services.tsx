import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services-data';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - JDE Aural Architecture</title>
        <meta name="description" content="Comprehensive acoustical engineering services for architectural, industrial, urban infrastructure, and specialized applications." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Comprehensive acoustical engineering solutions tailored to meet the unique needs of any project, 
              from small residential spaces to large industrial complexes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-6">{service.fullDescription}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-foreground/70">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
