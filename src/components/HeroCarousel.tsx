'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  {
    headline: 'Window Inserts',
    subtext: 'Cut outdoor noise with precision-fit acoustic window inserts.',
    image: { src: 'https://picsum.photos/1920/1080?random=1', 'data-ai-hint': 'quiet window view' },
    learnMoreHref: '/products#window-inserts',
    orderNowHref: '/contact?product=Window%20Inserts',
  },
  {
    headline: 'Acoustic Panels',
    subtext: 'Improve clarity and reduce echo with architectural acoustic panels.',
    image: { src: 'https://picsum.photos/1920/1080?random=2', 'data-ai-hint': 'modern office acoustics' },
    learnMoreHref: '/products#acoustic-panels',
    orderNowHref: '/contact?product=Acoustic%20Panels',
  },
  {
    headline: 'Sound Proofing Services',
    subtext: 'End-to-end acoustical engineering for homes, businesses, and institutions.',
    image: { src: 'https://picsum.photos/1920/1080?random=3', 'data-ai-hint': 'soundproof room' },
    learnMoreHref: '/services',
    orderNowHref: '/contact?product=Sound%20Proofing%20Services',
  },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <Carousel
      className="relative w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative flex h-[calc(100vh-3.5rem)] min-h-[600px] w-full items-center justify-center bg-gray-900 text-white">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <Image
                src={slide.image.src}
                alt={slide.headline}
                data-ai-hint={slide.image['data-ai-hint']}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="relative z-20 max-w-4xl px-4 text-center">
                <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
                  {slide.headline}
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                  {slide.subtext}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href={slide.learnMoreHref}>Learn More</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href={slide.orderNowHref}>Order Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex" />
    </Carousel>
  );
}
