import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Engineering Sound, Designing Silence',
    subtitle: 'Innovative Acoustical Solutions',
    description: 'Transform any space with our expert acoustical engineering services. From corporate offices to residential homes, we create environments where sound serves your purpose.',
    image: 'https://picsum.photos/1920/1080?random=1',
    cta: 'Explore Our Services',
    ctaLink: '/services'
  },
  {
    id: 2,
    title: 'Precision in Every Project',
    subtitle: 'Expert Acoustic Engineering',
    description: 'Our team of certified acoustic engineers brings decades of experience to every project, ensuring optimal sound quality and noise control solutions.',
    image: 'https://picsum.photos/1920/1080?random=2',
    cta: 'View Our Portfolio',
    ctaLink: '/portfolio'
  },
  {
    id: 3,
    title: 'Tailored Solutions for Every Space',
    subtitle: 'Custom Acoustic Design',
    description: 'Whether it\'s a recording studio, conference room, or industrial facility, we deliver custom acoustic solutions that meet your specific requirements.',
    image: 'https://picsum.photos/1920/1080?random=3',
    cta: 'Get Started Today',
    ctaLink: '/contact'
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${currentSlideData.image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-pop-in">
          <p className="text-lg md:text-xl mb-4 text-blue-200 font-medium">
            {currentSlideData.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-6">
            {currentSlideData.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            {currentSlideData.description}
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-3 h-auto">
            <Link to={currentSlideData.ctaLink}>
              {currentSlideData.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
