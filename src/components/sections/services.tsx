
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Share2, Target, MonitorSmartphone, PenTool, Star, ArrowRight, Camera, FileText, Mail, Users, BarChart2, MessageCircle, Link2, Filter, Mic, Youtube, PencilRuler, Store, FileImage, GanttChartSquare, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const services = [
  {
    icon: Crown,
    title: "Brand Strategy & Identity",
    description: "Crafting unique brand universes that resonate, captivate, and stand the test of time.",
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
    description: "Launching precision-targeted ad campaigns on Meta & Google to maximize your ROI and reach.",
    href: "/performance-marketing",
  },
  {
    icon: MonitorSmartphone,
    title: "Website & App Development",
    description: "Building stunning, high-converting digital flagships that offer seamless user experiences.",
    href: "/website-design-app-development",
  },
  {
    icon: PenTool,
    title: "SEO & Paid Search",
    description: "Climbing the ranks of search results with content and ads that captivate and convert.",
    href: "/seo-ads",
  },
  {
    icon: Star,
    title: "Influencer Marketing",
    description: "Collaborating with digital stars to amplify your message and build authentic connections.",
    href: "/influencer-marketing",
  },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    return (
      <Link href={service.href} className="group block h-full">
        <Card className="group bg-card hover:bg-secondary/50 border-border hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/20 h-full flex flex-col">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <service.icon className="h-6 w-6 text-accent" />
            </div>
            <CardTitle className="font-headline text-lg group-hover:text-accent transition-colors">{service.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <div>
                <p className="text-foreground/80">{service.description}</p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    );
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Universe of Services</h2>
          <p className="mt-4 text-foreground/80">
            We offer a comprehensive suite of digital marketing services designed to launch your brand into the stratosphere.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/pricing">
                View All Services & Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
