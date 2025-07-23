
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Expert Blog Writing & SEO Article Services | StellarBrand',
    description: 'Drive organic traffic and establish authority with high-quality, SEO-friendly blog posts and articles written by our expert content creators.',
};

export default function BlogWritingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Blog Writing & SEO Articles
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Content that Ranks, Resonates, and Builds Authority.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            A regularly updated blog is a cornerstone of modern SEO and a powerful tool for building trust with your audience. At StellarBrand, we provide a professional blog and article writing service that delivers well-researched, engaging, and SEO-optimized content tailored to your industry. We help you consistently publish valuable content that drives organic traffic, generates qualified leads, and positions you as a thought leader.
                        </p>
                        <p>
                            Our writers are skilled in crafting compelling narratives that not only please search engines but also provide genuine value and build a loyal readership.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                📝 Our Content Creation Process
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Topic Ideation & Keyword Research</h3>
                                        <p>We identify high-potential topics and keywords that align with your audience's search intent and your business objectives.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">In-Depth Research & Expert Writing</h3>
                                        <p>Our writers conduct thorough research to produce accurate, insightful, and comprehensive articles that establish your expertise.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">On-Page SEO Optimization</h3>
                                        <p>Every article is meticulously optimized for on-page SEO, including proper heading structure, keyword placement, internal linking, and meta descriptions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Editing & Quality Assurance</h3>
                                        <p>A rigorous editing process ensures every piece is polished, error-free, and perfectly aligned with your brand's unique voice and style.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Become the go-to resource in your niche.</p>
                            <p className="mt-2">Let StellarBrand fuel your content engine with articles that attract, engage, and convert.</p>
                            <p className="mt-6 text-2xl">
                                ✍️ Ready to publish content that shines? <Link href="/#contact" className="text-accent hover:underline">Order your first article today.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
