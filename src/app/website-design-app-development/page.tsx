import { Globe, Smartphone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Website Design, App Design & Development - Morningstar Media',
    description: 'Crafting digital experiences that captivate, connect, and convert.',
};

export default function WebsiteDesignAppDevelopmentPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Website Design, App Design &amp; Development
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Crafting digital experiences that captivate, connect, and convert.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-12">
                        <p>
                            At Morningstar Media, we bring your ideas to life through world-class design and development — building websites and apps that are not just beautiful, but also fast, functional, and future-ready.
                        </p>
                        <p>
                            Whether you're launching a brand, scaling a startup, or transforming a legacy system, our team designs and develops digital platforms that reflect your brand’s soul and deliver real results.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                <Globe className="h-8 w-8 text-accent"/> Website Design &amp; Development
                            </h2>
                            <ul className="mt-6 space-y-4 list-none p-0">
                                <li><strong>Custom Website Design:</strong> Visually stunning, strategically structured sites tailored to your brand and goals.</li>
                                <li><strong>Responsive &amp; Mobile-First Design:</strong> Flawless performance across devices with adaptive layouts and optimized UX.</li>
                                <li><strong>SEO &amp; Speed Optimization:</strong> Clean code, lightning-fast load times, and search engine best practices built in.</li>
                                <li><strong>CMS Integration:</strong> Easy-to-manage platforms like Webflow, WordPress, or Firebase for total control.</li>
                            </ul>
                        </div>

                        <div>
                           <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                <Smartphone className="h-8 w-8 text-accent"/> App Design &amp; Development
                            </h2>
                            <ul className="mt-6 space-y-4 list-none p-0">
                                <li><strong>UI/UX for Mobile &amp; Web Apps:</strong> Intuitive, elegant interfaces focused on ease of use and deep engagement.</li>
                                <li><strong>Cross-Platform Development:</strong> Scalable, high-performance apps built with technologies like React Native, Flutter, or Firebase.</li>
                                <li><strong>End-to-End App Development:</strong> From wireframing to launch — we handle it all, including backend, API integration, and testing.</li>
                                <li><strong>Launch &amp; Growth Support:</strong> App store deployment, analytics setup, and ongoing maintenance included.</li>
                            </ul>
                        </div>
                        
                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">We don’t just design and code — we shape digital journeys.</p>
                            <p className="mt-2">Let your brand shine across screens, platforms, and user moments with our premium design and development solutions.</p>
                             <p className="mt-6 text-2xl">
                                🚀 Have an idea in mind? <Link href="/#contact" className="text-accent hover:underline">Let’s build it — pixel by pixel, screen by screen.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
