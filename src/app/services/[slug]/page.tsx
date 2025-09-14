import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/services-data';
import { slugify } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find(s => slugify(s.title) === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found'
    }
  }

  return {
    title: `${service.title} | Services`,
    description: service.subtitle,
  };
}

export async function generateStaticParams() {
  return servicesData.map(service => ({
    slug: slugify(service.title),
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = servicesData.find(s => slugify(s.title) === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          className="object-cover"
          priority
          data-ai-hint={service.image['data-ai-hint']}
        />
        <div className="relative z-20 max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Sub-services Section */}
      <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                      <h3 className="text-lg font-semibold">{sub}</h3>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Applications Section */}
      <AnimatedSection as="section" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
           <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Applications</h2>
              <ul className="mt-4 space-y-2 text-foreground/80 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                {service.applications.map((app, index) => (
                  <li key={index} className="flex items-center justify-center bg-background p-4 rounded-lg shadow-sm">
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </AnimatedSection>
    </>
  );
}
