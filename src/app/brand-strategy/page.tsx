
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Brand Strategy & Identity Design Services | AdsVerse',
    description: 'We build unforgettable brands. Our services include brand discovery, positioning, messaging, visual identity design, and comprehensive brand guidelines.',
};

export default function BrandStrategyPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Brand Strategy & Identity
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Crafting Brands That Resonate, Captivate, and Endure.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            A strong brand is more than a logo; it's a promise. It’s the feeling your customers have when they interact with you. At AdsVerse, we don’t just design visuals—we architect brand experiences. We align your purpose, emotion, and perception into a cohesive identity that stands out in a crowded universe.
                        </p>
                        <p>
                            Our approach blends rigorous strategy with compelling storytelling. Whether you're launching a new venture or revitalizing an established one, we help you shape a narrative that is not only visually stunning but also authentically you.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🔭 Our Branding Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Brand Discovery & Workshops</h3>
                                        <p>We facilitate collaborative sessions to unearth your brand’s core mission, values, voice, and unique vision for the future.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Audience & Competitor Analysis</h3>
                                        <p>Gain deep market insights to position your brand effectively and speak directly to the hearts and minds of your ideal customers.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Brand Positioning & Messaging</h3>
                                        <p>We define what you stand for, what makes you different, and how to express your core message powerfully across all touchpoints.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Visual Identity Systems</h3>
                                        <p>A complete visual toolkit including logos, typography, color palettes, and iconography, creating a consistent and memorable identity.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Comprehensive Brand Guidelines</h3>
                                        <p>We provide a clear and concise playbook to ensure your brand remains consistent and strong across your team, partners, and platforms.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Let your brand command the spotlight.</p>
                            <p className="mt-2">With AdsVerse, your identity becomes more than a logo—it becomes a legacy.</p>
                            <p className="mt-6 text-2xl">
                                🌟 Ready to build an iconic brand? <Link href="/#contact" className="text-accent hover:underline">Let’s shape your universe.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
