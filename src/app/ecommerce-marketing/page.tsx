import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'E-Commerce Store Marketing - Morningstar Media',
    description: 'Drive traffic, increase sales, and grow your e-commerce brand with our specialized marketing services for online stores.',
};

export default function EcommerceMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            E-Commerce Store Marketing
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Turning clicks into customers and browsers into buyers.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            Running a successful e-commerce store requires more than just a great product. You need a powerful marketing strategy to stand out in a crowded marketplace. At Morningstar Media, we offer specialized marketing services for e-commerce brands on platforms like Shopify, Amazon, and Flipkart. We help you attract the right customers, optimize your store for conversions, and increase your overall sales.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🛒 Our E-Commerce Services:
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Marketplace Promotion (Amazon/Flipkart)</h3>
                                        <p>We manage your product listings, run targeted ad campaigns, and optimize for visibility within major online marketplaces.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Shopify Store Marketing</h3>
                                        <p>A holistic approach for your Shopify store, including SEO, paid ads (Google Shopping, Facebook), email marketing, and conversion rate optimization.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Conversion Rate Optimization (CRO)</h3>
                                        <p>We analyze your store's user experience and data to identify and fix friction points, improving your add-to-cart and checkout completion rates.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Email & SMS for E-Commerce</h3>
                                        <p>Automated campaigns for abandoned carts, welcome series, and post-purchase follow-ups to increase customer lifetime value.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Build a thriving online store.</p>
                            <p className="mt-2">Let Morningstar Media be the marketing partner that helps your e-commerce brand succeed.</p>
                            <p className="mt-6 text-2xl">
                                🛍️ Ready to boost your sales? <Link href="/#contact" className="text-accent hover:underline">Let's discuss your e-commerce strategy.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
