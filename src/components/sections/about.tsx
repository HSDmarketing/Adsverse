import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const values = [
  "Cosmic-level Creativity",
  "Data-driven Strategies",
  "Client-centric Universe",
  "Transparent Constellations",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Bringing cosmic-level creativity to earthly brands.</h2>
            <p className="text-foreground/80">
              At Morningstar Media, our mission is to propel your brand beyond the stratosphere. We believe every business has the potential to be a star, and our purpose is to provide the rocket fuel to get you there. We are a team of dreamers, strategists, and creators dedicated to making your brand shine its brightest.
            </p>
            <div className="space-y-4">
              <h3 className="font-headline text-xl font-semibold">Our Core Values</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground/90">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <Card className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 border-none">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Abstract cosmic art"
                  data-ai-hint="abstract galaxy"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
