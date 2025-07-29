
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Lead Generation Services That Convert | AdsVerse',
    description: 'We build high-performance lead generation engines that turn targeted traffic into a consistent stream of qualified prospects and sales opportunities for your business.',
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
                            Converting Interest into Opportunity with Strategic, Multi-Channel Campaigns.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            A predictable flow of qualified leads is the lifeblood of any scaling business. At AdsVerse, we specialize in creating and executing end-to-end lead generation campaigns that deliver a consistent pipeline of potential customers. We combine precision-targeted advertising, compelling offers, and optimized funnels to capture and nurture high-intent prospects.
                        </p>
                        <p>
                           Our approach is data-driven and results-obsessed. We focus on attracting the right audience, converting them into leads, and empowering your sales team for success.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🎯 Our Lead Generation Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Strategy & Irresistible Offer Development</h3>
                                        <p>We work with you to define your ideal customer profile and craft compelling lead magnets (e.g., ebooks, webinars, free consultations) that solve their most pressing problems.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Targeted Multi-Platform Ad Campaigns</h3>
                                        <p>We run precision-targeted ads on platforms like Google, Meta (Facebook & Instagram), and LinkedIn to drive high-quality traffic to your dedicated landing pages.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">High-Converting Landing Pages</h3>
                                        <p>We design and build dedicated landing pages with clear, persuasive messaging and a single call-to-action, optimized for maximum lead capture.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Lead Nurturing & Automation</h3>
                                        <p>We set up automated funnels to nurture new leads through email and WhatsApp, delivering value and guiding them toward becoming sales-ready.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Continuous Optimization & Reporting</h3>
                                        <p>We relentlessly monitor campaign performance, A/B test all critical elements, and provide transparent reports to maximize your return on investment.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Fuel your growth with a predictable stream of leads.</p>
                            <p className="mt-2">Let AdsVerse build a lead generation machine that works for you 24/7.</p>
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
