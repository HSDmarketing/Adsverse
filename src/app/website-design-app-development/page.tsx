
import { Globe, Smartphone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Website & App Development Services | StellarBrand',
    description: 'We design and develop stunning, high-performance websites and mobile apps that captivate users and drive business results.
',
};

export default function WebsiteDesignAppDevelopmentPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Website & App Development
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Crafting Digital Experiences That Captivate, Connect, and Convert.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-12">
                        <p>
                            At StellarBrand, we bring your vision to life through world-class design and development. We build websites and applications that are not just beautiful, but also fast, functional, and future-ready.
                        </p>
                        <p>
                            Whether you're launching a new brand, scaling a startup, or transforming a legacy system, our team designs and develops digital platforms that reflect your brand’s soul and deliver tangible business results.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                <Globe className="h-8 w-8 text-accent"/> Website Design & Development
                            </h2>
                            <ul className="mt-6 space-y-4 list-none p-0">
                                <li><strong>Custom Web Design:</strong> Visually stunning, strategically structured websites tailored to your brand, designed to maximize conversions.</li>
                                <li><strong>Responsive & Mobile-First:</strong> Flawless performance and intuitive UX across all devices, from desktops to smartphones.</li>
                                <li><strong>SEO & Performance Optimized:</strong> Built with clean code, lightning-fast load times, and search engine best practices from the ground up.</li>
                                <li><strong>CMS Integration:</strong> Easy-to-manage platforms like Next.js, Webflow, or WordPress, giving you total control over your content.</li>
                            </ul>
                        </div>

                        <div>
                           <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                <Smartphone className="h-8 w-8 text-accent"/> App Design & Development
                            </h2>
                            <ul className="mt-6 space-y-4 list-none p-0">
                                <li><strong>UI/UX for Mobile & Web Apps:</strong> Intuitive, elegant interfaces focused on ease of use, user delight, and deep engagement.</li>
                                <li><strong>Cross-Platform Development:</strong> Scalable, high-performance apps built with modern technologies like React Native or Flutter to reach users on any device.</li>
                                <li><strong>End-to-End Development Lifecycle:</strong> From wireframing and prototyping to launch, we handle it all—including backend development, API integration, and rigorous testing.</li>
                                <li><strong>App Store Launch & Support:</strong> We manage the app store deployment process and provide ongoing maintenance and growth support.</li>
                            </ul>
                        </div>
                        
                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">We don’t just design and code—we architect digital journeys.</p>
                            <p className="mt-2">Let your brand shine across screens and platforms with our premium design and development solutions.</p>
                             <p className="mt-6 text-2xl">
                                🚀 Have an idea in mind? <Link href="/#contact" className="text-accent hover:underline">Let’s build it, together.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
