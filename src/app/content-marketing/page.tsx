
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Strategic Content Marketing Services | StellarBrand',
    description: 'We create stellar content that tells your story, engages your audience, and drives meaningful action. Fuel your brand with content that converts.',
};

export default function ContentMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Content Marketing
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Fueling Your Brand's Journey with Stories That Captivate, Connect, and Convert.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            In the digital universe, content is the gravitational force that pulls your audience closer. At StellarBrand, we don’t just write words; we craft strategic narratives that build authority, foster trust, and inspire action. Our content marketing services are designed to transform your brand into the go-to resource in your industry.
                        </p>
                        <p>
                            We manage the entire content lifecycle—from strategy and creation to distribution and analysis—ensuring your content not only reaches the right people but also delivers measurable business results.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                ✍️ Our Content Marketing Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Content Strategy & Roadmapping</h3>
                                        <p>We develop a comprehensive roadmap based on your goals, audience, and market, identifying key themes, formats, and channels to maximize impact.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">SEO Blog & Article Writing</h3>
                                        <p>High-quality, SEO-optimized blog posts and articles that position you as an expert, answer your audience's questions, and drive sustainable organic traffic.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Social Media Content Creation</h3>
                                        <p>Engaging captions, compelling ad copy, and creative concepts for posts that stop the scroll, spark conversations, and build a loyal community.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Website & Landing Page Copywriting</h3>
                                        <p>Persuasive, conversion-focused copy that clearly communicates your value proposition and expertly guides visitors to take the desired action.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Words that build worlds.</p>
                            <p className="mt-2">With StellarBrand, your content becomes your most powerful marketing asset.</p>
                            <p className="mt-6 text-2xl">
                                🚀 Ready to tell your story? <Link href="/#contact" className="text-accent hover:underline">Let's create content that shines.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
