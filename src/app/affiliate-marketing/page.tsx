
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Affiliate Marketing Program Setup | StellarBrand',
    description: 'Launch a powerful, performance-based marketing channel. We help you build and manage an affiliate program that drives sales and expands your brand reach.',
};

export default function AffiliateMarketingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Affiliate Marketing Setup
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Building Powerful Partnerships That Drive Growth.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            Affiliate marketing is a highly effective, performance-based channel to acquire new customers by leveraging the power of trusted partnerships. At StellarBrand, we help you build, launch, and manage a successful affiliate program from the ground up, turning brand advocates into a formidable extension of your sales team.
                        </p>
                        <p>
                            We handle the technical setup, create compelling promotional assets, and provide the strategic framework for a scalable and profitable affiliate program.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🤝 Our Affiliate Program Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Program Strategy & Structure</h3>
                                        <p>We help you define competitive commission structures, cookie duration, and clear terms of service to create an attractive and sustainable program.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Technology & Platform Setup</h3>
                                        <p>Seamless implementation and configuration of leading affiliate tracking software to ensure precise tracking of referrals, clicks, and sales.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Creative Asset Development</h3>
                                        <p>We design a comprehensive suite of high-converting promotional materials for your affiliates, including banners, ad copy, and email templates.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Affiliate Recruitment & Onboarding</h3>
                                        <p>While we build the system, we also provide expert guidance on how to recruit and onboard your first cohort of high-quality affiliate partners.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Turn Your Brand Fans into a Sales Force.</p>
                            <p className="mt-2">With a professionally structured affiliate program from StellarBrand, you can scale your marketing efforts efficiently and effectively.</p>
                            <p className="mt-6 text-2xl">
                                🚀 Ready to launch your affiliate program? <Link href="/#contact" className="text-accent hover:underline">Let's build it together.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
