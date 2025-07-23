
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'High-Impact Ad Creative Production | StellarBrand',
    description: 'Capture attention and drive conversions with stunning ad creatives. Our team designs high-performance video ads, banners, and carousels that deliver results.',
};

export default function AdCreativesPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Ad Creative Production
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Designing Scroll-Stopping Visuals That Convert.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            In performance marketing, the creative is your most powerful lever. A great ad can be the difference between a campaign that breaks records and one that fizzles out. At StellarBrand, our creative team specializes in producing high-impact ad creatives engineered to capture attention, communicate your message with clarity, and compel users to take action.
                        </p>
                        <p>
                            We fuse strategic insights with artistic innovation to produce visuals that don’t just look exceptional—they perform brilliantly.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🎨 Our Creative Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Video Ad Production</h3>
                                        <p>Engaging short-form video ads optimized for platforms like Instagram Reels, TikTok, and YouTube Shorts, designed for maximum mobile impact.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Static & Carousel Ads</h3>
                                        <p>Eye-catching image ads and multi-panel carousels for Facebook, Instagram, and Google Display Network that beautifully showcase your products and services.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Motion Graphics</h3>
                                        <p>Sleek and effective animated graphics that add a dynamic element to your ads, helping them stand out in a crowded digital feed.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">A/B Testing Variations</h3>
                                        <p>We provide multiple creative variations to enable robust A/B testing, helping you pinpoint the visuals and messaging that drive the best results.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Creativity that drives performance.</p>
                            <p className="mt-2">Let StellarBrand produce ad creatives that don't just look good, but deliver measurable success.</p>
                            <p className="mt-6 text-2xl">
                                ✨ Ready for creatives that convert? <Link href="/#contact" className="text-accent hover:underline">Let's craft your next winning ad.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
