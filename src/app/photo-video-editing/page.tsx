import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Photo, Video Shoot & Editing - StellarBrand',
    description: 'From influence to impact — we make every post, story, and reel count.',
};

export default function PhotoVideoEditingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Photo, Video Shoot &amp; Editing
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Capturing your brand’s best moments with professional photography and videography services.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                           With StellarBrand, your brand’s story comes alive with cinematic visuals, real engagement, and cosmic-level creativity. We handle everything from concept to final cut, ensuring your content is not just seen, but felt.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🌟 What We Offer:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Influencer Strategy & Partnerships</h3>
                                        <p>Influencer identification, relationship management, and cross-platform campaigns on Instagram, YouTube, TikTok, and more.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Video Shoots & Content Creation</h3>
                                        <p>Professional, branded video shoots including reels, ads, and vlogs with creative direction and high-end production.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Photo Shoots</h3>
                                        <p>Styled photo shoots for products and lifestyle content, optimized for social media with on-brand visual storytelling.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Editing & Post-Production</h3>
                                        <p>High-quality video editing, image retouching, color correction, and format optimization with fast turnarounds.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Campaign Management & Reporting</h3>
                                        <p>Content scheduling, publishing, performance tracking, and data-driven insights to improve future collaborations.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">From influence to impact — we make every post, story, and reel count.</p>
                            <p className="mt-2">Let’s shoot something unforgettable.</p>
                            <p className="mt-6 text-2xl">
                                🎬 <Link href="/#contact" className="text-accent hover:underline">Book your influencer strategy call today.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
