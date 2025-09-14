import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio-data';

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioProjects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - JDE Aural Architecture</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mb-8">
              <Button asChild variant="outline">
                <Link to="/portfolio">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div>
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <Button asChild className="w-full sm:w-auto">
                    <Link to="/contact">
                      Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto sm:ml-4">
                    <Link to="/services">
                      Our Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
