import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Brand Strategy & Identity - StellarBrand',
    description: 'At StellarBrand, we don’t just build brands — we ignite cosmic identities that align purpose, emotion, and perception into a powerful brand experience.',
};

export default function BrandStrategyPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Brand Strategy &amp; Identity
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Crafting unique brand universes that resonate with your target audience and stand the test of time.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            At StellarBrand, we don’t just build brands — we ignite cosmic identities that align purpose, emotion, and perception into a powerful brand experience.
                        </p>
                        <p>
                            Our approach blends strategy with storytelling to help your brand stand out in the galaxy of competitors. Whether you're launching a new venture or repositioning an existing one, we help shape a narrative that’s not only visually stunning but also authentically you.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🔭 What We Deliver:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Brand Discovery Workshops</h3>
                                        <p>Uncover your brand’s core mission, values, voice, and vision through collaborative sessions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Audience &amp; Competitor Research</h3>
                                        <p>Get deep insights into your market and position your brand to speak directly to your ideal customer.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Brand Positioning &amp; Messaging</h3>
                                        <p>Define what you stand for, what makes you different, and how to express it clearly across all touchpoints.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Visual Identity Systems</h3>
                                        <p>Logos, typography, color palettes, iconography — everything you need for a consistent, memorable visual identity.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Brand Guidelines &amp; Playbooks</h3>
                                        <p>We equip you with a clear and concise guide to maintain consistency across your team, partners, and platforms.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Let your brand orbit the spotlight.</p>
                            <p className="mt-2">With StellarBrand, your identity becomes more than a logo — it becomes a legacy.</p>
                            <p className="mt-6 text-2xl">
                                🌟 Ready to rise? <Link href="/#contact" className="text-accent hover:underline">Let’s build a brand that outshines the ordinary.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
