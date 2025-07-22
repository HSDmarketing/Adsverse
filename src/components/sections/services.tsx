import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Share2, Target, MonitorSmartphone, PenTool, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Crown,
    title: "Brand Strategy & Identity",
    description: "Crafting unique brand universes that resonate with your target audience and stand the test of time.",
    href: "/brand-strategy",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Navigating the social cosmos to build communities, engage followers, and elevate your brand's presence.",
    href: "/social-media-management",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Launching precision-targeted ad campaigns on Facebook & Google to maximize your ROI and reach."
  },
  {
    icon: MonitorSmartphone,
    title: "Website & Landing Page Design",
    description: "Building stunning, high-converting digital flagships that offer seamless user experiences across all devices."
  },
  {
    icon: PenTool,
    title: "SEO & Content Creation",
    description: "Creating stellar content that captivates audiences and climbs the ranks of search engine results."
  },
  {
    icon: Star,
    title: "Influencer Marketing",
    description: "Collaborating with stars of the digital world to amplify your message and build authentic connections."
  },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <Card className="group bg-card hover:bg-secondary/50 border-border hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/20">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <service.icon className="h-6 w-6 text-accent" />
        </div>
        <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80">{service.description}</p>
        <div className="mt-4 text-accent font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More <ArrowRight className="h-4 w-4" />
        </div>
      </CardContent>
    </Card>
);

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Universe of Services</h2>
          <p className="mt-4 text-foreground/80">
            We offer a comprehensive suite of services designed to launch your brand into the stratosphere.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
            service.href ? (
              <Link href={service.href} key={index}>
                <ServiceCard service={service} />
              </Link>
            ) : (
              <ServiceCard key={index} service={service} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
