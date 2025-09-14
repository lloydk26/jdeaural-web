import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - JDE Aural Architecture</title>
        <meta name="description" content="Learn about JDE Aural Architecture's mission, values, and team of acoustical engineering experts." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Engineering Sound, Designing Silence. We are passionate about creating optimal acoustic environments 
              through innovative engineering solutions and expert craftsmanship.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    At JDE Aural Architecture, our mission is to transform spaces through innovative acoustical 
                    engineering solutions. We believe that optimal sound environments are essential for productivity, 
                    comfort, and well-being, and we're dedicated to delivering excellence in every project.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    We are committed to technical excellence, innovative solutions, and exceptional client service. 
                    Our team of certified acoustical engineers brings decades of combined experience to every project, 
                    ensuring results that exceed expectations.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
