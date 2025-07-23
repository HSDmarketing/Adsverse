import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Ad Creatives Production - Morningstar Media',
    description: 'Capture attention and drive clicks with high-impact ad creatives, including videos, banners, and carousels, designed by our creative team.',
};

export default function AdCreativesPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Ad Creatives Production
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Designing scroll-stopping visuals that convert.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            In performance marketing, the creative is your most important lever. A great ad creative can be the difference between a campaign that succeeds and one that fails. At Morningstar Media, our creative team specializes in producing high-quality ad creatives that are designed to capture attention, communicate your message clearly, and persuade users to take action.
                        </p>
                        <p>
                            We combine strategic thinking with artistic flair to produce visuals that not only look great but also perform brilliantly.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🎨 Our Creative Services:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Video Ad Production</h3>
                                        <p>Short-form video ads optimized for platforms like Instagram Reels, TikTok, and YouTube Shorts, designed for mobile viewing and engagement.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Static & Carousel Banners</h3>
                                        <p>Eye-catching image ads and multi-slide carousels for Facebook, Instagram, and Google Display Network that showcase your products or services.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Motion Graphics</h3>
                                        <p>Simple but effective animated graphics that add a dynamic element to your ads and help them stand out in a crowded feed.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">A/B Testing Variations</h3>
                                        <p>We provide multiple variations of creatives to enable robust A/B testing, helping you identify the most effective visuals and messaging.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Creativity that drives performance.</p>
                            <p className="mt-2">Let Morningstar Media produce ad creatives that not only look good, but deliver results.</p>
                            <p className="mt-6 text-2xl">
                                ✨ Ready for better ad performance? <Link href="/#contact" className="text-accent hover:underline">Let's create your next winning ad.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
