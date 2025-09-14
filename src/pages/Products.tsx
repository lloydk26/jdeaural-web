import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Our Products - JDE Aural Architecture</title>
        <meta name="description" content="Explore our range of acoustical products and solutions for various applications." />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Coming soon - our comprehensive range of acoustical products and solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
