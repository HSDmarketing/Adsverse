
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "The Future of AI in Marketing",
    category: "Technology",
    date: "July 26, 2024",
    excerpt: "Exploring how artificial intelligence is reshaping brand strategies and customer engagement in the digital age.",
    image: "https://placehold.co/600x400.png",
    aiHint: "ai abstract",
    href: "/blog/future-of-ai-in-marketing",
    altText: "An abstract visualization of an AI neural network with glowing nodes."
  },
  {
    title: "5 SEO Trends to Watch in 2025",
    category: "SEO",
    date: "July 22, 2024",
    excerpt: "Stay ahead of the curve with these upcoming search engine optimization trends that will define online visibility.",
    image: "https://placehold.co/600x400.png",
    aiHint: "data chart",
    href: "/blog/5-seo-trends-to-watch-in-2025",
    altText: "An abstract data chart showing upward trends, representing SEO growth."
  },
  {
    title: "Crafting a Brand Story That Resonates",
    category: "Branding",
    date: "July 18, 2024",
    excerpt: "Learn the art of storytelling to create a powerful and memorable brand identity that connects with your audience.",
    image: "https://placehold.co/600x400.png",
    aiHint: "person writing",
    href: "/blog/crafting-a-brand-story-that-resonates",
    altText: "A person writing a brand story in a journal, with a cup of coffee nearby."
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Insights from Our Universe</h2>
          <p className="mt-4 text-foreground/80">
            Stay informed with the latest news, trends, and strategies from the marketing cosmos.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={post.href} key={post.title} className="group block">
              <Card className="overflow-hidden h-full flex flex-col transition-shadow duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <Image
                    src={post.image}
                    alt={post.altText}
                    data-ai-hint={post.aiHint}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center text-xs text-foreground/70">
                    <Badge variant="outline">{post.category}</Badge>
                    <p>{post.date}</p>
                  </div>
                  <h3 className="font-headline text-xl font-semibold mt-4 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="mt-2 text-foreground/80 text-sm flex-grow">{post.excerpt}</p>
                  <div className="mt-4 text-accent font-semibold group-hover:underline">
                    Read More &rarr;
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
