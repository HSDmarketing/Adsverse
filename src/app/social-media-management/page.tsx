import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Social Media Management - Morningstar Media',
    description: 'At Morningstar Media, we manage your digital presence like a constellation: every post, comment, and story aligns to form a stellar brand experience.',
};

export default function SocialMediaManagementPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Social Media Management
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Navigating the social cosmos to build communities, engage followers, and elevate your brand's presence.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            In today’s fast-scrolling world, your social media presence isn’t optional — it’s essential. At Morningstar Media, we manage your digital presence like a constellation: every post, comment, and story aligns to form a stellar brand experience.
                        </p>
                        <p>
                            We don’t just post — we strategize, curate, and connect. Our team crafts magnetic content and manages your platforms with a pulse on trends, ensuring your brand consistently shines across every screen.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🚀 What We Offer:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Platform Strategy &amp; Planning</h3>
                                        <p>Tailored social media strategies for Instagram, Facebook, LinkedIn, Twitter, YouTube, and more — aligned with your business goals and target audience.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Content Creation &amp; Curation</h3>
                                        <p>Scroll-stopping visuals, videos, reels, and carousels that reflect your brand voice and spark engagement.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Community Engagement &amp; Growth</h3>
                                        <p>We build relationships with your followers through real-time responses, DMs, and comment engagement — turning followers into brand advocates.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Content Calendar Management</h3>
                                        <p>Plan ahead with organized, data-driven content calendars designed to keep your feed consistent and meaningful.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Analytics &amp; Reporting</h3>
                                        <p>Monthly performance insights, engagement tracking, and optimization recommendations to keep your strategy evolving.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Let your voice echo across the digital universe.</p>
                            <p className="mt-2">With Morningstar Media, your social presence becomes a living, breathing brand experience — one that inspires, informs, and influences.</p>
                            <p className="mt-6 text-2xl">
                                🌌 Let’s turn followers into loyal fans. <Link href="/#contact" className="text-accent hover:underline">Book your social media audit today.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
