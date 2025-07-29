
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Performance Marketing Agency | AdsVerse',
    description: 'Results-driven performance marketing services. We manage data-backed ad campaigns on Meta (Facebook, Instagram) and Google to deliver measurable ROI.',
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
                            Targeted. Tactical. Transformative. Data-Driven Ads That Deliver ROI.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            In the vast universe of online advertising, performance marketing is the science of turning clicks into customers. It's about ensuring every dollar spent is an investment in measurable growth. At AdsVerse, our performance marketing approach is built on a foundation of rigorous strategy, compelling creative, and precision targeting.
                        </p>
                        <p>
                           We manage data-backed ad campaigns across platforms like Meta (Facebook & Instagram) and Google, focusing relentlessly on one thing: delivering real, tangible results for your business.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🌠 Our Performance Marketing Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Meta Ads (Facebook & Instagram)</h3>
                                        <p>We craft engaging ad creatives and utilize advanced targeting to generate leads, boost e-commerce sales, and drive high-quality traffic where it matters most.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Google Ads (Search, Display, YouTube)</h3>
                                        <p>Capture high-intent customers with keyword-optimized search ads, visually compelling display campaigns, and engaging YouTube ads.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Full-Funnel Campaign Strategy</h3>
                                        <p>Every campaign is architected to maximize ROI, with optimized landing pages, strategic retargeting, and a focus on driving profitable conversions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Continuous A/B Testing & Optimization</h3>
                                        <p>We relentlessly test creatives, audiences, ad copy, and landing pages to identify what performs best—and then we scale it for maximum impact.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Transparent, In-Depth Reporting</h3>
                                        <p>We provide clear, easy-to-understand dashboards and reports that show exactly how your campaigns are performing and how we’re improving them.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Let your ad spend work smarter, not harder.</p>
                            <p className="mt-2">With AdsVerse, performance marketing isn’t just about spending money—it’s about growing smarter, faster, and farther.</p>
                             <p className="mt-6 text-2xl">
                                🚀 Ready to boost your ROI? <Link href="/#contact" className="text-accent hover:underline">Let's discuss your next campaign.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
