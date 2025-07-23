import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Share2, Target, MonitorSmartphone, PenTool, Star, ArrowRight, Camera, FileText, Mail, Users, BarChart2, MessageCircle, Link2, Filter, Mic, Youtube, PencilRuler, Store, FileImage, GanttChartSquare, PhoneCall } from "lucide-react";
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
    title: "Social media management & Social media handling",
    description: "Navigating the social cosmos to build communities, engage followers, and elevate your brand's presence.",
    href: "/social-media-management",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Launching precision-targeted ad campaigns on Facebook & Google to maximize your ROI and reach.",
    href: "/performance-marketing",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Design, App Design & Development",
    description: "Building stunning, high-converting digital flagships that offer seamless user experiences across all devices.",
    href: "/website-design-app-development",
  },
  {
    icon: PenTool,
    title: "SEO & Ads",
    description: "Creating stellar content that captivates audiences and climbs the ranks of search engine results.",
    href: "/seo-ads",
  },
  {
    icon: Star,
    title: "Influencer Marketing",
    description: "Collaborating with stars of the digital world to amplify your message and build authentic connections.",
    href: "/influencer-marketing",
  },
  {
    icon: Camera,
    title: "Photo, Video shoot and editing",
    description: "Capturing your brand's best moments with professional photography and videography services.",
    href: "/photo-video-editing",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Blogs, captions, marketing copies, strategy. (Starts at ₹999/post)",
    href: "#",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Design + Automation + Bulk Email Tools. (Starts at ₹1,999/month)",
    href: "#",
  },
  {
    icon: Users,
    title: "Online Reputation Management (ORM)",
    description: "Reviews, ratings, Google listing. (Starts at ₹3,999/month)",
    href: "#",
  },
  {
    icon: GanttChartSquare,
    title: "Lead Generation Campaigns",
    description: "Funnel + Ads + WhatsApp lead setup. (Starts at ₹4,999/campaign)",
    href: "#",
  },
  {
    icon: BarChart2,
    title: "Analytics & Conversion Tracking",
    description: "Google Analytics, GTM, Pixel setup. (Starts at ₹2,999/setup)",
    href: "#",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & SMS Marketing",
    description: "Bulk message campaigns. (Starts at ₹1,999/month)",
    href: "#",
  },
  {
    icon: Link2,
    title: "Affiliate Marketing Setup",
    description: "Affiliate tracking system & creatives. (Starts at ₹4,999/project)",
    href: "#",
  },
  {
    icon: Filter,
    title: "Funnel Building & Automation",
    description: "Landing page + Email/WA Automation. (Starts at ₹3,999/funnel)",
    href: "#",
  },
  {
    icon: Mic,
    title: "Podcast Distribution & Promotion",
    description: "Upload, SEO, thumbnails, platform setup. (Starts at ₹2,999/episode)",
    href: "#",
  },
  {
    icon: Youtube,
    title: "YouTube Marketing & Optimization",
    description: "Channel growth, SEO, thumbnails, titles. (Starts at ₹2,499/video)",
    href: "#",
  },
  {
    icon: PencilRuler,
    title: "Blog Writing & SEO Articles",
    description: "1000+ words SEO-friendly blog posts. (Starts at ₹999/article)",
    href: "#",
  },
  {
    icon: Store,
    title: "E-Commerce Store Marketing",
    description: "Flipkart/Amazon/Shopify promotion. (Starts at ₹6,999/month)",
    href: "#",
  },
  {
    icon: FileImage,
    title: "Ad Creatives Production (Graphics/Video)",
    description: "Videos, banners, carousels, motion design. (Starts at ₹1,499/ad)",
    href: "#",
  },
  {
    icon: PhoneCall,
    title: "Digital Strategy & Consultation",
    description: "1-on-1 call + roadmap + tools + competitor analysis. (Starts at ₹999/session)",
    href: "#",
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
        {service.href && service.href !== "#" && (
            <div className="mt-4 text-accent font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight className="h-4 w-4" />
            </div>
        )}
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
            service.href && service.href !== "#" ? (
              <Link href={service.href} key={index} className="flex">
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
