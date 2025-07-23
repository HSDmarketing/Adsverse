
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'E-commerce Marketing Services for Online Stores | StellarBrand',
    description: 'Drive traffic, increase sales, and grow your e-commerce brand with our specialized marketing services for Shopify, Amazon, and other online stores.',
};

export default function EcommerceMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            E-commerce Marketing
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Turning Clicks into Customers and Browsers into Buyers.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            Running a successful e-commerce store requires more than just a great product. You need a powerful, multi-channel marketing strategy to stand out in a competitive marketplace. At StellarBrand, we offer specialized marketing services for e-commerce brands on platforms like Shopify and marketplaces like Amazon and Flipkart. We help you attract the right customers, optimize your store for conversions, and maximize your profitability.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🛒 Our E-commerce Marketing Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Marketplace Advertising (Amazon/Flipkart)</h3>
                                        <p>We manage your product listings, run targeted PPC campaigns, and optimize for visibility and sales within major online marketplaces.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Holistic Shopify Store Marketing</h3>
                                        <p>A comprehensive approach for your Shopify store, including SEO, paid ads (Google Shopping, Meta Ads), email marketing, and full-funnel strategy.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Conversion Rate Optimization (CRO)</h3>
                                        <p>We analyze user behavior and data to identify and eliminate friction points in your store, improving add-to-cart rates and checkout completions.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Email & SMS Marketing for E-commerce</h3>
                                        <p>We build powerful automated campaigns for abandoned carts, welcome series, and post-purchase follow-ups to significantly increase customer lifetime value.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Build a thriving online retail empire.</p>
                            <p className="mt-2">Let StellarBrand be the expert marketing partner that helps your e-commerce brand succeed.</p>
                            <p className="mt-6 text-2xl">
                                🛍️ Ready to boost your online sales? <Link href="/#contact" className="text-accent hover:underline">Let's discuss your e-commerce strategy.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
