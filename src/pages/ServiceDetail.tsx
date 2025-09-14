import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { services } from '@/data/services-data';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - JDE Aural Architecture</title>
        <meta name="description" content={service.fullDescription} />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mb-8">
              <Button asChild variant="outline">
                <Link to="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <service.icon className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
                    <p className="text-xl text-foreground/70">{service.description}</p>
                  </div>
                </div>

                <div className="prose max-w-none mb-8">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Get Started</h3>
                    <p className="text-foreground/70 mb-6">
                      Ready to discuss your acoustical needs? Contact our team for a consultation.
                    </p>
                    <div className="space-y-3">
                      <Button asChild className="w-full">
                        <Link to="/contact">
                          Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/portfolio">
                          View Our Work
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
