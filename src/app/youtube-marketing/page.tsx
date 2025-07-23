
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'YouTube Marketing & Channel Optimization Services | StellarBrand',
    description: 'Grow your YouTube channel, increase views, and convert subscribers into customers with our expert YouTube marketing, SEO, and optimization services.',
};

export default function YouTubeMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            YouTube Marketing & Optimization
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Turning Your Channel into a Powerful Engine for Brand Growth and Audience Engagement.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            YouTube is the world's second-largest search engine, making it a critical platform for brand visibility, education, and community building. At StellarBrand, we offer a complete suite of YouTube marketing services designed to optimize your channel, grow your subscriber base, and turn casual viewers into loyal fans and customers.
                        </p>
                        <p>
                            From content strategy and video SEO to thumbnail design and analytics, we implement proven tactics to help your videos rank higher, get discovered by new audiences, and achieve your business objectives.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                ▶️ Our YouTube Growth Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Channel Growth & Content Strategy</h3>
                                        <p>We analyze your niche and competitors to develop a content and growth strategy that will attract and retain your target audience.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Advanced Video SEO</h3>
                                        <p>We optimize your video titles, descriptions, tags, and transcripts with relevant keywords to improve search ranking and discoverability on YouTube and Google.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Click-Worthy Thumbnail Design</h3>
                                        <p>We design professional, high-contrast thumbnails and craft compelling titles that increase click-through rates (CTR) and grab viewer attention.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Audience Engagement & Community Building</h3>
                                        <p>We implement strategies to increase likes, comments, and shares, signaling to the YouTube algorithm that your content is valuable and worth promoting.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Make your brand the star of the screen.</p>
                            <p className="mt-2">Let StellarBrand elevate your YouTube presence to new heights of success.</p>
                            <p className="mt-6 text-2xl">
                                🚀 Ready to grow your channel? <Link href="/#contact" className="text-accent hover:underline">Let's optimize your YouTube strategy.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
