import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { servicesData } from '@/lib/services-data';
import { ArrowRight } from 'lucide-react';
import { slugify } from '@/lib/utils';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Services | JDE Aural Architecture',
  description: 'Explore our comprehensive acoustical engineering services, including architectural acoustics, industrial noise control, urban planning, and specialized testing.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Delivering world-class acoustical solutions guided by sustainability, innovation, and global best practices.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <Link href={`/services/${slugify(service.title)}`} key={service.title} className="group block">
                <Card className="h-full overflow-hidden transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <div className="relative h-60">
                     <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={service.image['data-ai-hint']}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                           <service.icon className="h-6 w-6 text-primary" />
                         </div>
                        <div>
                          <h2 className="text-xl font-bold font-headline">{service.title}</h2>
                          <p className="mt-2 text-foreground/80 text-sm">{service.shortDescription}</p>
                        </div>
                      </div>
                       <div className="flex justify-end items-center mt-4">
                        <p className="text-sm font-semibold text-primary">Learn More</p>
                        <ArrowRight className="ml-2 h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
