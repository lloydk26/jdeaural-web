import Image from 'next/image';
import { Target, Eye } from 'lucide-react';
import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Us | JDE Aural Architecture',
  description: 'Learn about our story, mission, and vision. JDE Aural Architecture is a leading Filipino-owned acoustical engineering consultancy.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About JDE Aural Architecture</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/70">
            A Filipino-owned acoustical engineering consultancy with years of experience in contracting and consulting.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className='order-2 md:order-1'>
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-lg text-foreground/80">
                JDE Aural Architecture delivers innovative soundproofing and acoustic solutions that exceed client expectations — always on time, within budget, and to the highest standards. We combine years of contracting and consulting expertise to bring clarity and peace to your environment.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://picsum.photos/800/600?random=21"
                alt="Acoustic panel design"
                data-ai-hint="acoustic panels"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <AnimatedSection as="section" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-12 gap-y-16">
            <AnimatedSection className="row-start-1 col-start-1">
              <div className="text-center md:text-left">
                <div className="inline-block bg-primary/20 p-4 rounded-full mb-4">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="mt-4 text-lg text-foreground/80">
                  To deliver world-class acoustical engineering and consulting services guided by sustainability, innovation, and global best practices.
                </p>
              </div>
            </AnimatedSection>
            <div className="hidden md:block row-start-1 col-start-2"></div>
            <div className="hidden md:block row-start-2 col-start-1"></div>
            <AnimatedSection delay={100} className="row-start-2 col-start-1 md:col-start-2">
              <div className="text-center md:text-left">
                <div className="inline-block bg-primary/20 p-4 rounded-full mb-4">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="mt-4 text-lg text-foreground/80">
                  To be the leading acoustical solutions provider of choice — recognized for efficiency, transparency, and excellence in every project.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
