
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const caseStudies = [
  {
    client: "Nebula Inc.",
    title: "Rebranding a Global Tech Leader",
    description: "A complete brand overhaul and website redesign, resulting in a 200% increase in brand recognition and a 50% uplift in qualified leads.",
    image: "https://github.com/HSDmarketing/Adsverse.image/blob/main/43071988186-removebg-preview%20(1).png?raw=true",
    aiHint: "corporate branding",
    altText: "A modern website design for a tech company called Nebula Inc."
  },
  {
    client: "Galaxy Foods",
    title: "Viral Social Media & Influencer Campaign",
    description: "Launched a multi-platform campaign that reached 10 million users, boosted sales by 75% in one quarter, and won a marketing award.",
    image: "https://raw.githubusercontent.com/HSDmarketing/Adsverse.image/main/Social-Media-Campaign-Facebook-Ad-Examples%20(1).png",
    aiHint: "social media campaign",
    altText: "A collage of social media posts for a food brand called Galaxy Foods."
  },
];

const testimonials = [
  {
    quote: "StellarBrand took our vision and launched it into a new galaxy. Their creativity and strategic approach are unparalleled. The results were simply outstanding.",
    name: "Kajol Kale",
    title: "CEO of Namolegallabs",
    avatar: "https://placehold.co/100x100.png",
    logo: "https://placehold.co/120x40.png",
    aiHint: "woman portrait",
    altAvatar: "Portrait of Kajol Kale",
    altLogo: "Logo of Namolegallabs"
  },
  {
    quote: "The ROI from their performance marketing campaigns has been phenomenal. Truly a team of marketing rockstars who understand our business.",
    name: "Brenda Orbit",
    title: "CMO of Galaxy Foods",
    avatar: "https://placehold.co/100x100.png",
    logo: "https://placehold.co/120x40.png",
    aiHint: "woman portrait",
    altAvatar: "Portrait of Brenda Orbit",
    altLogo: "Logo of Galaxy Foods"
  },
  {
    quote: "Working with them was a seamless experience. They understood our complex needs perfectly and delivered beyond our highest expectations.",
    name: "Chris Comet",
    title: "Founder of AstroLaunch",
    avatar: "https://placehold.co/100x100.png",
    logo: "https://placehold.co/120x40.png",
    aiHint: "person portrait",
    altAvatar: "Portrait of Chris Comet",
    altLogo: "Logo of AstroLaunch"
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Success Stories from Our Constellation</h2>
          <p className="mt-4 text-foreground/80">
            We've helped ambitious brands of all sizes reach for the stars. Here's a glimpse of our universe of work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <Image
                  src={study.image}
                  alt={study.altText}
                  data-ai-hint={study.aiHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </CardContent>
              <div className="p-6">
                <p className="text-sm text-accent font-medium">{study.client}</p>
                <h3 className="font-headline text-xl font-bold mt-1">{study.title}</h3>
                <p className="mt-3 text-foreground/80">{study.description}</p>
                <Button variant="link" className="p-0 mt-4 text-accent">View Case Study &rarr;</Button>
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
                                                  <AvatarImage src={testimonial.avatar} alt={testimonial.altAvatar} data-ai-hint={testimonial.aiHint} />
                                                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                              </Avatar>
                                              <div>
                                                  <p className="font-semibold">{testimonial.name}</p>
                                                  <p className="text-xs text-foreground/70">{testimonial.title}</p>
                                              </div>
                                          </div>
                                          <Image src={testimonial.logo} alt={testimonial.altLogo} width={80} height={30} data-ai-hint="company logo" className="opacity-60"/>
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
