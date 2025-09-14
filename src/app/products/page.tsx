
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Shield } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Products | JDE Aural Architecture',
  description: 'Explore our range of high-performance acoustic products, including window inserts and custom architectural panels.',
};

const products = [
  {
    id: 'window-inserts',
    name: 'Acoustic Window Inserts',
    image: {
      src: 'https://picsum.photos/1200/800?random=53',
      alt: 'A quiet room with a window overlooking a busy city street, demonstrating noise reduction.',
      'data-ai-hint': 'window insert cityscape',
    },
    benefits: [
      'Reduces external noise by up to 70%',
      'Improves thermal insulation, lowering energy bills',
      'Custom-fit to your existing windows',
      'Easy to install and remove',
      'Maintains the aesthetic of your windows',
    ],
    specs: 'Available for various window types and sizes. Laminated glass options for maximum STC rating.',
    orderLink: '/contact?product=Window%20Inserts'
  },
  {
    id: 'acoustic-panels',
    name: 'Architectural Acoustic Panels',
    image: {
      src: 'https://picsum.photos/1200/800?random=52',
      alt: 'A stylish office with designer acoustic wall panels',
      'data-ai-hint': 'office wall panels',
    },
    benefits: [
      'Controls echo and reverberation for sound clarity',
      'Customizable shapes, sizes, and fabrics',
      'Enhances the visual design of any space',
      'High-performance sound absorption',
      'Easy to mount on walls and ceilings',
    ],
    specs: 'Made from high-density fiberglass with a variety of fabric finishes. Class A fire-rated.',
    orderLink: '/contact?product=Acoustic%20Panels'
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-background">
      <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Acoustic Products</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            High-performance solutions designed to bring peace and clarity to your space.
          </p>
        </div>
      </section>

      {products.map((product) => (
        <section key={product.id} id={product.id} className="py-16 md:py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  data-ai-hint={product.image['data-ai-hint']}
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-headline">{product.name}</h2>
                <ul className="mt-6 space-y-4 text-lg text-foreground/80">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Card className="mt-8 bg-gray-50 dark:bg-gray-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Specifications</h4>
                        <p className="text-sm text-foreground/70 mt-1">{product.specs}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Button asChild size="lg" className="mt-8">
                  <Link href={product.orderLink}>Order Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
