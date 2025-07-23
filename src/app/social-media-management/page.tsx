
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
                            In today’s fast-scrolling world, your social media presence isn’t optional — it’s your digital storefront, your community hub, and a powerful engine for growth. At Morningstar Media, we manage your presence on platforms like Facebook and Instagram not just to post content, but to build a living, breathing brand experience that resonates with your audience and drives real business results.
                        </p>
                        <p>
                            We don’t just post — we strategize, create, engage, and analyze. Our team combines creative storytelling with data-driven tactics to ensure your brand consistently shines across every screen, turning casual followers into loyal advocates.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🚀 What We Offer:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Custom Social Media Strategy</h3>
                                        <p>We begin by understanding your business goals, target audience, and competitive landscape. We then develop a tailored strategy for platforms like Facebook and Instagram, defining your brand voice, content pillars, and key performance indicators (KPIs) for success.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Content Creation &amp; Posting</h3>
                                        <p>Our team creates and curates high-quality, scroll-stopping content—including graphics, videos, reels, and carousels—that reflects your brand and sparks conversations. We manage a consistent posting schedule to keep your audience engaged and your feed active.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Audience Growth &amp; Engagement</h3>
                                        <p>We actively work to grow your follower base with organic tactics and targeted outreach. More importantly, we build a thriving community by engaging with your audience through comments, DMs, and real-time interactions, fostering loyalty and trust.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Content Calendar Management</h3>
                                        <p>Stay ahead with a well-organized, data-driven content calendar. We plan your content weeks in advance, aligning with marketing campaigns, holidays, and trends to ensure a cohesive and impactful social media presence.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Analytics &amp; Performance Reporting</h3>
                                        <p>We provide clear, monthly reports that track key metrics like reach, engagement, follower growth, and website clicks. These insights help us continuously refine your strategy and demonstrate the ROI of your social media investment.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Let your voice echo across the digital universe.</p>
                            <p className="mt-2">With Morningstar Media, your social presence becomes more than just a profile—it becomes a powerful asset for your brand.</p>
                            <p className="mt-6 text-2xl">
                                🌌 Ready to turn followers into loyal fans? <Link href="/#contact" className="text-accent hover:underline">Book your social media audit today.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
