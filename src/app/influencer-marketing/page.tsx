
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Influencer Marketing Agency | StellarBrand',
    description: 'We connect brands with authentic creators to tell your story, engage audiences, and drive real impact. Full-service campaign management from discovery to ROI.',
};

export default function InfluencerMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Influencer Marketing
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Amplifying Your Message Through Authentic Voices and Trusted Connections.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            In a world driven by trust and authenticity, influencer marketing isn’t just a trend—it’s a powerful bridge between brands and their target audiences. At StellarBrand, we help you connect with the right creators to tell your story in a way that feels natural, credible, and genuinely engaging.
                        </p>
                        <p>
                            From micro-influencers with niche communities to established digital icons, we handpick partners who align with your brand values and audience interests—turning passive followers into loyal fans and impressions into conversions.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                ✨ Our Influencer Marketing Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Influencer Discovery & Vetting</h3>
                                        <p>We use a data-driven approach to identify and vet influencers who genuinely resonate with your brand and speak to your target market.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Creative Campaign Strategy</h3>
                                        <p>We design strategic and creative campaigns that align with your brand goals while empowering the influencer to use their authentic voice.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Cross-Platform Campaign Management</h3>
                                        <p>We execute and manage campaigns across Instagram, YouTube, TikTok, and more—wherever your audience spends their time.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Contracting & Negotiation</h3>
                                        <p>We handle all negotiations and contracts, ensuring transparent agreements, fair pricing, and smooth collaborations from start to finish.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Performance Tracking & ROI Analysis</h3>
                                        <p>We provide data-driven reports on engagement, reach, conversions, and overall impact, so you can see the clear ROI of your campaigns.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Real voices. Real impact.</p>
                            <p className="mt-2">With StellarBrand, your brand doesn't just advertise—it influences, connects, and inspires.</p>
                            <p className="mt-6 text-2xl">
                                🌠 Let’s partner with the digital stars who’ll help your brand shine brighter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
