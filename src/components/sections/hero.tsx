
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient -z-10"></div>
      <div className="absolute inset-0 bg-background/50 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300"
            style={{ textShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
          >
            Where Brands Reach for the Stars
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
            StellarBrand is a full-service digital marketing agency that transforms ambitious brands into industry leaders. We blend strategy, creativity, and technology to launch you into a new orbit of success.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg shadow-accent/20 transition-transform duration-300 hover:scale-105">
              <Link href="/#contact">
                Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm border-foreground/30 hover:bg-foreground/10 transition-transform duration-300 hover:scale-105">
              <Link href="/#portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
