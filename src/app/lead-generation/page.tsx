import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Lead Generation Campaigns - Morningstar Media',
    description: 'We build high-performance lead generation engines that turn targeted traffic into a consistent stream of qualified prospects for your business.',
};

export default function LeadGenerationPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Lead Generation Campaigns
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Converting interest into opportunity with strategic, multi-channel campaigns.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            A steady flow of qualified leads is the lifeblood of any growing business. At Morningstar Media, we specialize in creating and executing end-to-end lead generation campaigns that deliver a predictable pipeline of potential customers. We combine targeted advertising, compelling offers, and optimized funnels to capture and nurture high-intent prospects.
                        </p>
                        <p>
                           Our approach is data-driven and results-oriented. We focus on attracting the right audience, converting them into leads, and setting your sales team up for success.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🎯 Our Lead Generation Process:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Strategy & Offer Development</h3>
                                        <p>We work with you to define your ideal customer profile and craft irresistible lead magnets (e.g., ebooks, webinars, free consultations) that solve their problems.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Targeted Ad Campaigns</h3>
                                        <p>We run precision-targeted ads on platforms like Google, Facebook, and Instagram to drive high-quality traffic to your landing pages.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">High-Converting Landing Pages</h3>
                                        <p>We design and build dedicated landing pages with clear messaging and a single call-to-action, optimized for maximum lead capture.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Funnel & WhatsApp Integration</h3>
                                        <p>We set up automated funnels to nurture leads, including instant lead delivery and follow-up sequences via Email and WhatsApp.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Optimization & Reporting</h3>
                                        <p>We continuously monitor campaign performance, A/B test different elements, and provide transparent reports to maximize your return on investment.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Fuel your growth with a predictable stream of leads.</p>
                            <p className="mt-2">Let Morningstar Media build a lead generation machine that works for you 24/7.</p>
                            <p className="mt-6 text-2xl">
                                📈 Ready to grow your pipeline? <Link href="/#contact" className="text-accent hover:underline">Book a lead generation strategy call.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
