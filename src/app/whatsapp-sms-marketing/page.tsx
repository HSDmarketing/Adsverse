import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'WhatsApp & SMS Marketing - Morningstar Media',
    description: 'Reach your customers instantly and personally with targeted WhatsApp and SMS marketing campaigns.',
};

export default function WhatsAppSmsMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            WhatsApp & SMS Marketing
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Direct, personal, and powerful communication that drives immediate action.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            In a mobile-first world, WhatsApp and SMS marketing offer an unparalleled opportunity to connect with your customers directly on their most-used devices. At Morningstar Media, we help you leverage these powerful channels to deliver timely promotions, important updates, and personalized messages that cut through the noise.
                        </p>
                        <p>
                            Our services cover everything from strategy and compliance to execution and reporting, ensuring your campaigns are both effective and respectful of your audience.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                📱 Our Messaging Services:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Bulk Campaign Management</h3>
                                        <p>We manage high-volume WhatsApp and SMS campaigns to send promotional offers, event reminders, and new product announcements to your audience segments.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Audience Segmentation</h3>
                                        <p>We segment your contact list based on demographics, purchase history, and engagement to deliver highly relevant and personalized messages.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Content & Creative</h3>
                                        <p>Crafting concise, compelling copy and rich media content (for WhatsApp) that grabs attention and encourages a response.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Compliance & Best Practices</h3>
                                        <p>We ensure your campaigns adhere to all regulatory requirements (like TRAI regulations in India) and follow best practices for deliverability and user experience.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Engage your audience on the go.</p>
                            <p className="mt-2">With Morningstar Media, your message gets delivered right into the hands of your customers.</p>
                            <p className="mt-6 text-2xl">
                                💬 Ready to start the conversation? <Link href="/#contact" className="text-accent hover:underline">Let's plan your messaging campaign.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
