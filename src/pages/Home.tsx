import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Building2, Cog, Landmark, FlaskConical, ArrowRight, User } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { HeroCarousel } from '@/components/HeroCarousel';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const services = [
  {
    icon: Building2,
    title: 'Architectural & Building Acoustics',
    description: 'Reverberation control, sound isolation, and system design for performance and public spaces.',
    href: '/services'
  },
  {
    icon: Cog,
    title: 'Industrial & Workplace Acoustics',
    description: 'Noise containment, vibration analysis, and safety compliance for industrial environments.',
    href: '/services'
  },
  {
    icon: Landmark,
    title: 'Urban Infrastructure Acoustics',
    description: 'Noise impact assessments and monitoring for large-scale urban developments.',
    href: '/services'
  },
  {
    icon: FlaskConical,
    title: 'Specialized Acoustic Services',
    description: 'Advanced testing, analysis, system commissioning, and training programs.',
    href: '/services'
  },
];

const portfolioSamples = [
  { src: 'https://picsum.photos/600/400?random=1', alt: 'Corporate office space', category: 'Corporate & Commercial' },
  { src: 'https://picsum.photos/600/400?random=2', alt: 'Hotel lobby', category: 'Hospitality & Residential' },
  { src: 'https://picsum.photos/600/400?random=3', alt: 'School gymnasium', category: 'Education & Institutions' },
  { src: 'https://picsum.photos/600/400?random=4', alt: 'Modern chapel', category: 'Worship & Memorial' },
];

const testimonials = [
  {
    quote: "I can finally sleep through the night! The traffic noise was unbearable, but JDE Aural's acoustic solutions made a world of difference. Professional service and incredible results.",
    name: 'Sara L.',
    title: 'Condo Owner',
  },
  {
    quote: 'Our home office is now a sanctuary. We had our door and windows soundproofed, and the silence is golden. The team was efficient and the quality is top-notch. Highly recommended!',
    name: 'Mark T.',
    title: 'Homeowner',
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>JDE Aural Architecture - Engineering Sound, Designing Silence</title>
        <meta name="description" content="JDE Aural Architecture delivers innovative acoustical engineering solutions for homes, businesses, and institutions — creating spaces where clarity, comfort, and peace of mind come first." />
      </Helmet>

      <HeroCarousel />
      
      {/* Featured Section */}
      <AnimatedSection as="section" className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            
            {/* Titles Row */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg text-gray-300">
                Feedback from those who have experienced the JDE difference.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
              <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg text-gray-300">
                A glimpse into our diverse portfolio.
              </p>
            </div>
            
            {/* Content Row */}
            <div className="mt-4">
              <div className="grid grid-cols-1 gap-8">
                {testimonials.map((testimonial, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <Card className="bg-gray-800/50 border-gray-700 text-gray-300 h-full">
                      <CardContent className="p-6">
                        <blockquote className="italic mb-4">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                        <div className="flex items-center gap-4">
                           <Avatar className="w-12 h-12 bg-gray-700">
                              <AvatarFallback className="bg-gray-600">
                                <User className="w-6 h-6 text-gray-400"/>
                              </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-white">{testimonial.name}</p>
                            <p className="text-primary text-sm">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
              <div className="mt-12 text-right">
                <Button asChild variant="secondary">
                  <Link to="/customer-feedback">
                    View More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {portfolioSamples.map((project, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="group relative overflow-hidden rounded-lg">
                      <img
                        src={project.src}
                        alt={project.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold font-headline">{project.category}</h3>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <div className="mt-12 text-right">
                <Button asChild variant="secondary">
                  <Link to="/portfolio">
                    View Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Expertise</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              We provide a comprehensive range of acoustical services tailored to meet the unique needs of any project.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="flex flex-col text-center items-center h-full">
                  <CardHeader>
                    <div className="bg-primary/10 p-4 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                    <p className="mt-2 text-foreground/70">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
           <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
