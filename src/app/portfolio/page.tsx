import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Metadata } from 'next';
import { portfolio, categories } from '@/lib/portfolio-data';
import Link from 'next/link';
import { slugify } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Portfolio | JDE Aural Architecture',
  description: 'View our portfolio of acoustical engineering projects across corporate, residential, educational, and industrial sectors.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Project Portfolio</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            A showcase of our commitment to excellence and innovation in acoustical engineering.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto flex-wrap justify-start">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">{category}</TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {(portfolio as any)[category].map((project: any) => (
                    <Link href={`/portfolio/${slugify(project.name)}`} key={project.name} className="group relative block overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={project.images[0].src}
                        alt={`Project: ${project.name}`}
                        width={600}
                        height={400}
                        className="h-64 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        data-ai-hint={project.images[0]['data-ai-hint']}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <h3 className="text-xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-headline">
                          {project.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}
