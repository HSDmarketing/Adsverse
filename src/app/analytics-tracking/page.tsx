
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Analytics & Conversion Tracking Setup | AdsVerse',
    description: 'Make data-driven decisions with a robust analytics and tracking foundation. Our experts implement GA4, GTM, and server-side tracking for accurate insights.',
};

export default function AnalyticsTrackingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Analytics & Conversion Tracking
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Turning Data into Insights, and Insights into Action.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            You can't improve what you don't measure. A solid analytics and conversion tracking setup is the bedrock of any successful marketing strategy. At AdsVerse, we provide expert services to ensure you're collecting accurate, reliable data and tracking the actions that matter most to your business.
                        </p>
                        <p>
                            We go beyond basic pageview tracking to implement a comprehensive measurement plan that gives you a crystal-clear understanding of your customer journey and marketing ROI.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                📊 Our Analytics & Tracking Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Google Analytics 4 (GA4) Setup</h3>
                                        <p>Expert installation and configuration of GA4, including data stream setup, event-based tracking, and cross-domain measurement.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Google Tag Manager (GTM) Implementation</h3>
                                        <p>We set up and manage your marketing tags through GTM, enabling efficient tag deployment and streamlined tracking without editing website code.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">E-commerce & Goal Conversion Tracking</h3>
                                        <p>We meticulously define and track key conversion events—such as form submissions, purchases, and lead magnet downloads—to measure what truly drives your business forward.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Meta Pixel & Conversions API (CAPI)</h3>
                                        <p>Correct installation of the Meta Pixel and setup of the server-side Conversions API for maximum data accuracy and ad campaign optimization in a post-iOS14 world.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Custom Dashboards & Reporting</h3>
                                        <p>We create intuitive, easy-to-understand dashboards (e.g., in Looker Studio) that visualize your key performance indicators (KPIs), empowering you to make informed decisions quickly.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Unlock the power of your data.</p>
                            <p className="mt-2">With a solid tracking foundation from AdsVerse, you'll have the clarity you need to grow with confidence.</p>
                            <p className="mt-6 text-2xl">
                                💡 Ready to get clear on your numbers? <Link href="/#contact" className="text-accent hover:underline">Request an analytics audit today.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
