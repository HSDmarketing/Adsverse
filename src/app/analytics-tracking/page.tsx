import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Analytics & Conversion Tracking - Morningstar Media',
    description: 'Make data-driven decisions with a robust analytics and tracking foundation set up by our experts.',
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
                            Turning data into insights, and insights into action.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            You can't improve what you don't measure. In today's digital landscape, a solid analytics and conversion tracking setup is the bedrock of any successful marketing strategy. At Morningstar Media, we provide expert services to ensure you're collecting accurate data and tracking the actions that matter most to your business.
                        </p>
                        <p>
                            We go beyond basic pageview tracking to implement a comprehensive measurement plan that gives you a clear understanding of your customer journey and marketing ROI.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                📊 Our Analytics & Tracking Setup Includes:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Google Analytics (GA4) Setup</h3>
                                        <p>Proper installation and configuration of Google Analytics 4, including data stream setup and cross-domain tracking.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Google Tag Manager (GTM) Implementation</h3>
                                        <p>We set up and manage your marketing tags through GTM, allowing for efficient tag deployment without needing to edit website code.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Conversion Tracking</h3>
                                        <p>We define and track key conversion events such as form submissions, purchases, and button clicks to measure what drives your business forward.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Meta Pixel & CAPI Setup</h3>
                                        <p>Correct installation of the Meta (Facebook) Pixel and setup of the Conversions API (CAPI) for accurate ad campaign tracking and optimization.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Custom Dashboards & Reporting</h3>
                                        <p>We create easy-to-understand dashboards that visualize your key performance indicators (KPIs), helping you make informed decisions quickly.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Unlock the power of your data.</p>
                            <p className="mt-2">With a solid tracking foundation from Morningstar Media, you'll have the clarity you need to grow.</p>
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
