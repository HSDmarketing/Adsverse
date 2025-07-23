import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Funnel Building & Automation - Morningstar Media',
    description: 'We design and build automated marketing funnels that guide your prospects from awareness to conversion, seamlessly.',
};

export default function FunnelBuildingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Funnel Building & Automation
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Architecting automated journeys that nurture and convert.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            A well-structured marketing funnel is an automated system that works around the clock to attract, educate, and convert your ideal customers. At Morningstar Media, we specialize in building strategic sales and marketing funnels that provide a seamless and persuasive journey for your prospects.
                        </p>
                        <p>
                            From the initial landing page to the final thank you message, we map out and implement every step, integrating email and WhatsApp automation to nurture leads and maximize conversions without manual effort.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🏗️ Our Funnel Building Blocks:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Funnel Strategy & Mapping</h3>
                                        <p>We design a custom funnel strategy tailored to your business goals, mapping out each stage of the customer journey from top to bottom.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Landing Page Design</h3>
                                        <p>Creation of high-converting, mobile-responsive landing pages with compelling copy and a clear call-to-action to capture leads effectively.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Email & WhatsApp Automation</h3>
                                        <p>We set up automated follow-up sequences to nurture new leads, deliver value, and guide them towards a purchase decision.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Integration & Tech Stack</h3>
                                        <p>We integrate all the necessary tools—landing page builders, email marketing software, and CRMs—to ensure your funnel runs smoothly.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Put your conversions on autopilot.</p>
                            <p className="mt-2">Let Morningstar Media build a powerful, automated funnel that grows your business.</p>
                            <p className="mt-6 text-2xl">
                                ⚙️ Ready to automate your growth? <Link href="/#contact" className="text-accent hover:underline">Let's design your perfect funnel.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
