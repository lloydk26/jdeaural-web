import { notFound } from 'next/navigation';
import { portfolio, allProjects, categories } from '@/lib/portfolio-data';
import { slugify } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = allProjects.find(p => slugify(p.name) === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }

  return {
    title: `${project.name} | Portfolio`,
    description: project.description.substring(0, 160),
  };
}

export async function generateStaticParams() {
  return allProjects.map(project => ({
    slug: slugify(project.name),
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = allProjects.find(p => slugify(p.name) === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 min-h-screen">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">{project.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{project.name}</h1>
                <p className="text-lg text-foreground/80">
                  {project.description}
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video relative">
                          <Image
                            src={image.src}
                            alt={`${project.name} image ${index + 1}`}
                            fill
                            className="object-cover"
                            data-ai-hint={image['data-ai-hint']}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                </Carousel>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
