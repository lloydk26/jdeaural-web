'use client';

import { useRef, useEffect, useState, ElementType } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export function AnimatedSection({ children, className, delay = 0, as: Tag = 'div' }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only want the animation to trigger on intersection, not on leaving.
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect the observer once the element is visible to prevent re-triggering
          if(ref.current) observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: '0px 0px -10% 0px', // Trigger when 10% of the element is visible from the bottom
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClasses = isVisible
    ? 'animate-pop-in'
    : 'opacity-0 translate-y-4';

  return (
    <Tag
      ref={ref}
      className={cn('transition-all duration-500', animationClasses, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
