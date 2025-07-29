
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Expert SEO & Google Ads Management Services | AdsVerse',
    description: 'We blend the art of content with the science of search. Our SEO and Google Ads services are designed to boost visibility, drive qualified traffic, and increase conversions.',
};

export default function SeoAdsPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            SEO & Paid Search (PPC)
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Dominating Search Results to Drive Targeted Traffic and Growth.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-12">
                        <p>
                           At AdsVerse, we combine the long-term power of Search Engine Optimization (SEO) with the immediate impact of Paid Search Advertising (PPC). Our integrated approach ensures your brand is discovered, remembered, and chosen by your ideal customers.
                        </p>
                        <p>
                           Our goal is simple: to boost your visibility, drive highly qualified traffic to your website, and convert that traffic into loyal customers. Whether it’s sustainable organic growth through SEO or rapid results through paid ads, we guide your brand to the top of the search engine results page (SERP).
                        </p>
                        
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🔍 Search Engine Optimization (SEO)
                            </h2>
                            <ul className="mt-6 space-y-4 list-none p-0">
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" /><strong>On-Page & Content Strategy:</strong> Keyword optimization, meta tags, and high-quality content creation designed to inform, engage, and convert.</li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" /><strong>Technical SEO:</strong> Comprehensive site audits, crawlability optimization, and site speed enhancements to ensure search engines love your site.</li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" /><strong>Off-Page SEO & Link Building:</strong> Building high-authority backlinks to establish your credibility and domain authority in your industry.</li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" /><strong>Local SEO:</strong> Optimization for Google Maps, local search queries, and review management—perfect for location-based businesses.</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                💡 Paid Ads (Google Ads & PPC)
                            </h2>
                            <ul className="mt-6 space-y-4 list-none p-0">
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" /><strong>Google Search & Display Ads:</strong> Targeted campaigns that put your brand in front of high-intent users, right when they’re actively searching for your solutions.</li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" /><strong>YouTube & Retargeting Ads:</strong> Video-based storytelling and smart remarketing campaigns to keep your brand top-of-mind and re-engage past visitors.</li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" /><strong>Landing Page Optimization:</strong> Creating optimized ad-to-page journeys for lower cost-per-click (CPC) and higher conversion rates.</li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" /><strong>Continuous Monitoring & Scaling:</strong> Relentless performance tracking, A/B testing, and continuous improvement to maximize your Return On Ad Spend (ROAS).</li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Rise in search. Rule the results.</p>
                            <p className="mt-2">Let AdsVerse craft a visibility strategy that lights up the web and generates real business growth.</p>
                            <p className="mt-6 text-2xl">
                                🌟 Ready to get seen? <Link href="/#contact" className="text-accent hover:underline">Let's optimize your path to the top.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
