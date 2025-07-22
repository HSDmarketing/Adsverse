import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SEO & Ads - Morningstar Media',
    description: 'At Morningstar Media, we blend the art of storytelling with the science of search. From crafting high-impact content to running precision-targeted ads, we ensure your brand gets discovered — and remembered.',
};

export default function SeoAdsPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            SEO &amp; Ads
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Creating stellar content that captivates audiences and climbs the ranks of search engine results.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-12">
                        <p>
                           At Morningstar Media, we blend the art of storytelling with the science of search. From crafting high-impact content to running precision-targeted ads, we ensure your brand gets discovered — and remembered.
                        </p>
                        <p>
                           Our goal is simple: to boost your visibility, drive qualified traffic, and turn that traffic into loyal customers. Whether it’s organic growth through SEO or fast-track results through paid ads, we guide your brand to the top of search engines and minds.
                        </p>
                        
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🔍 Search Engine Optimization (SEO)
                            </h2>
                            <ul className="mt-6 space-y-4 list-none p-0">
                                <li><strong>On-Page SEO:</strong> Keyword optimization, meta tags, structured content, and speed tuning for better rankings.</li>
                                <li><strong>Content Strategy & Creation:</strong> Engaging blog posts, landing pages, and website copy designed to both inform and convert.</li>
                                <li><strong>Technical SEO:</strong> Site audits, crawl optimization, and performance fixes that help search engines love your site.</li>
                                <li><strong>Local SEO:</strong> Optimize for maps, reviews, and geo-based searches — perfect for location-based businesses.</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                💡 Paid Ads (Google &amp; Search)
                            </h2>
                            <ul className="mt-6 space-y-4 list-none p-0">
                                <li><strong>Google Search & Display Ads:</strong> Targeted campaigns that put your brand in front of high-intent users, right when they’re searching.</li>
                                <li><strong>YouTube & Retargeting Ads:</strong> Video-based storytelling and smart remarketing to keep your brand top-of-mind.</li>
                                <li><strong>Landing Page Alignment:</strong> Optimized ad-to-page journeys for lower cost per click and higher conversion rates.</li>
                                <li><strong>Ongoing Monitoring & Scaling:</strong> Performance tracking, A/B testing, and continuous improvement for maximized ROI.</li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Rise in search. Rule the results.</p>
                            <p className="mt-2">Let Morningstar Media help you craft visibility strategies that light up the web and generate real business growth.</p>
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
