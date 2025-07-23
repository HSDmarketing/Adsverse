
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Digital Strategy & Marketing Consultation | StellarBrand',
    description: 'Get a clear, actionable roadmap for your digital marketing success with our expert 1-on-1 consultation sessions and strategic planning.',
};

export default function DigitalStrategyPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Digital Strategy & Consultation
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Your Roadmap to Navigating the Digital Cosmos with Clarity and Confidence.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            Feeling lost in the vast expanse of digital marketing? Our Digital Strategy & Consultation service is designed to provide clarity and expert direction. In a dedicated one-on-one session, we'll dive deep into your business, analyze your current efforts, and deliver a customized, actionable roadmap for success.
                        </p>
                        <p>
                            This isn't a sales pitch; it's a valuable strategy session packed with insights, bespoke recommendations, and a clear plan to help you achieve your most ambitious goals.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🗺️ What's Included in Your Strategy Session
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">1-on-1 Deep Dive Call</h3>
                                        <p>A dedicated session with a senior digital marketing strategist to discuss your business goals, challenges, and untapped opportunities.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Customized Digital Roadmap</h3>
                                        <p>We deliver a clear, step-by-step plan outlining which channels, tactics, and messaging you should focus on to get the best results.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Tools & Technology Recommendations</h3>
                                        <p>Get a curated list of the best tools and software for your specific needs, from analytics and SEO to social media management and automation.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">High-Level Competitor Analysis</h3>
                                        <p>An overview of what your top competitors are doing successfully online, highlighting opportunities for you to gain a competitive edge.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Navigate your digital journey with an expert co-pilot.</p>
                            <p className="mt-2">Book a consultation with StellarBrand and get the strategic clarity you've been searching for.</p>
                            <p className="mt-6 text-2xl">
                                🚀 Ready to map out your success? <Link href="/#contact" className="text-accent hover:underline">Book your free strategy session today.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
