import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Performance Marketing - Morningstar Media',
    description: 'At Morningstar Media, our Performance Marketing approach is built on strategy, creativity, and precision. We turn your budget into meaningful business outcomes.',
};

export default function PerformanceMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Performance Marketing
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Targeted. Tactical. Transformative.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            In the vast universe of online advertising, we help your brand cut through the noise and land exactly where it needs to be — in front of the right audience, at the right time, with the right message.
                        </p>
                        <p>
                           At Morningstar Media, our Performance Marketing approach is built on strategy, creativity, and precision. From launching high-converting ad campaigns to optimizing every click, we turn your budget into meaningful business outcomes.
                        </p>
                         <p>
                            We manage data-backed ad campaigns across platforms like Facebook, Instagram, and Google, focused on one thing: delivering real results.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🌠 Our Performance Marketing Services:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Meta Ads (Facebook & Instagram)</h3>
                                        <p>Engaging creatives and strategic targeting to generate leads, boost sales, and drive traffic where it matters.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Google Search & Display Ads</h3>
                                        <p>Reach high-intent customers through keyword-optimized search ads and attention-grabbing display placements.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Conversion-Focused Campaigns</h3>
                                        <p>Every campaign is designed to maximize ROI with compelling CTAs, optimized landing pages, and smart funnel building.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">A/B Testing & Optimization</h3>
                                        <p>We continuously test creatives, audiences, and messaging to find what performs best — and scale it.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">In-Depth Reporting</h3>
                                        <p>Transparent, easy-to-understand dashboards and reports that show exactly how your campaigns are performing and where we’re improving.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Let your brand shine where it matters most.</p>
                            <p className="mt-2">With Morningstar Media, Performance Marketing isn’t just about spending money — it’s about growing smarter, faster, and farther.</p>
                             <p className="mt-6 text-2xl">
                                🚀 Ready to boost your ROI? <Link href="/#contact" className="text-accent hover:underline">Let's discuss your campaign.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
