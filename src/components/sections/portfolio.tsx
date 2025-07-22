import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const caseStudies = [
  {
    client: "Nebula Inc.",
    title: "Rebranding a Tech Giant",
    description: "A complete brand overhaul, resulting in a 200% increase in brand recognition and a 50% uplift in conversions.",
    image: "https://placehold.co/600x400.png",
    aiHint: "corporate branding",
  },
  {
    client: "Galaxy Foods",
    title: "Viral Social Media Campaign",
    description: "Launched a multi-platform campaign that reached 10 million users and boosted sales by 75% in one quarter.",
    image: "https://placehold.co/600x400.png",
    aiHint: "social media campaign",
  },
];

const testimonials = [
  {
    quote: "Morningstar Media took our vision and launched it into a new galaxy. Their creativity and strategic approach are unparalleled.",
    name: "Alex Starr",
    title: "CEO of Nebula Inc.",
    avatar: "https://placehold.co/100x100.png",
    logo: "https://placehold.co/120x40.png",
    aiHint: "man portrait"
  },
  {
    quote: "The results speak for themselves. Our ROI has never been better. Truly a team of marketing rockstars.",
    name: "Brenda Orbit",
    title: "CMO of Galaxy Foods",
    avatar: "https://placehold.co/100x100.png",
    logo: "https://placehold.co/120x40.png",
    aiHint: "woman portrait"
  },
  {
    quote: "Working with them was a breeze. They understood our needs perfectly and delivered beyond expectations.",
    name: "Chris Comet",
    title: "Founder of AstroLaunch",
    avatar: "https://placehold.co/100x100.png",
    logo: "https://placehold.co/120x40.png",
    aiHint: "person portrait"
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Success Stories from Our Constellation</h2>
          <p className="mt-4 text-foreground/80">
            We've helped brands of all sizes reach for the stars. Here's a glimpse of our work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <Image
                  src={study.image}
                  alt={`Case study for ${study.client}`}
                  data-ai-hint={study.aiHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </CardContent>
              <div className="p-6">
                <h3 className="font-headline text-xl font-bold">{study.title}</h3>
                <p className="text-sm text-accent font-medium mt-1">{study.client}</p>
                <p className="mt-3 text-foreground/80">{study.description}</p>
                <Button variant="link" className="p-0 mt-4 text-accent">View Case Study</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-center">What Our Clients Say</h3>
            <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full max-w-4xl mx-auto mt-8"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                            <div className="p-1">
                                <Card className="h-full bg-card">
                                    <CardContent className="p-6 flex flex-col justify-between h-full">
                                        <p className="text-foreground/90 italic">"{testimonial.quote}"</p>
                                        <div className="mt-6 flex items-center justify-between">
                                          <div className="flex items-center gap-4">
                                              <Avatar>
                                                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                                                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                              </Avatar>
                                              <div>
                                                  <p className="font-semibold">{testimonial.name}</p>
                                                  <p className="text-xs text-foreground/70">{testimonial.title}</p>
                                              </div>
                                          </div>
                                          <Image src={testimonial.logo} alt="Client logo" width={80} height={30} data-ai-hint="company logo" className="opacity-60"/>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
