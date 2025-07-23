import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Online Reputation Management (ORM) - Morningstar Media',
    description: 'We safeguard your brand’s digital image, build trust, and ensure your online presence shines positively.',
};

export default function OrmPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Online Reputation Management
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Shaping a positive narrative for your brand across the digital cosmos.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            In the digital age, your online reputation is your most valuable asset. A single negative review or comment can impact customer trust and your bottom line. At Morningstar Media, we provide comprehensive Online Reputation Management (ORM) services to monitor, manage, and enhance how your brand is perceived online.
                        </p>
                        <p>
                            Our proactive approach focuses on building a positive digital footprint, managing feedback constructively, and ensuring that your brand's story is told accurately and favorably across all platforms.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🛡️ Our ORM Services:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Reputation Monitoring</h3>
                                        <p>We continuously monitor online mentions of your brand across social media, review sites, forums, and blogs to stay ahead of the conversation.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Review Management</h3>
                                        <p>We help you generate more positive reviews and professionally manage negative feedback on platforms like Google, Yelp, and industry-specific sites.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Search Engine Reputation</h3>
                                        <p>We work to suppress negative search results and promote positive content to ensure the first page of Google reflects your brand in the best light.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Brand Mention & Crisis Response</h3>
                                        <p>Crafting timely and appropriate responses to brand mentions and developing a strategy to manage potential PR crises effectively.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Your brand's reputation, protected.</p>
                            <p className="mt-2">With Morningstar Media, you can be confident that your digital presence is a true reflection of your excellence.</p>
                            <p className="mt-6 text-2xl">
                                ✨ Ready to build a five-star reputation? <Link href="/#contact" className="text-accent hover:underline">Let's talk about your brand's image.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
