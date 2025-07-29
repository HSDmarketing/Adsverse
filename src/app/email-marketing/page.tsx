
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Email Marketing & Automation Services | AdsVerse',
    description: 'Nurture leads and build lasting customer relationships with our targeted, automated email marketing campaigns that deliver results.',
};

export default function EmailMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Email Marketing Services
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Delivering Value Directly to the Inbox, One Campaign at a Time.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            Email marketing remains one of the most powerful and profitable tools for building direct relationships with your audience. At AdsVerse, we design and execute sophisticated email marketing strategies that go beyond simple newsletters. We create personalized, automated journeys that nurture leads, drive sales, and foster long-term customer loyalty.
                        </p>
                        <p>
                            From beautiful, high-converting designs to complex automation sequences, we handle every aspect of your email marketing to ensure your messages are opened, read, and acted upon.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                📧 Our Email Marketing Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Campaign Strategy & Management</h3>
                                        <p>We develop a tailored email strategy, including content planning, audience segmentation, and A/B testing, to meet your specific business objectives.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Template Design & Copywriting</h3>
                                        <p>Custom-designed, mobile-responsive email templates paired with compelling, persuasive copy that reflects your brand voice and drives engagement.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Advanced Marketing Automation</h3>
                                        <p>We set up sophisticated automated workflows for welcome series, lead nurturing, abandoned carts, re-engagement campaigns, and more.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">List Growth & Management</h3>
                                        <p>We implement effective strategies to grow your email list organically and maintain a healthy, engaged subscriber base through proper list hygiene.</p>
                                    </div>
                                </li>
                                 <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Performance Tracking & Reporting</h3>
                                        <p>Detailed analytics on open rates, click-through rates, conversions, and ROI, providing actionable insights to continually optimize your campaigns.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Connect with your audience where it counts.</p>
                            <p className="mt-2">Let AdsVerse build email campaigns that your subscribers will actually look forward to opening.</p>
                            <p className="mt-6 text-2xl">
                                💌 Ready to elevate your email game? <Link href="/#contact" className="text-accent hover:underline">Let's craft your next campaign.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
