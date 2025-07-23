
import { Check, Star } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pricing - Morningstar Media',
    description: 'Transparent pricing for our suite of digital marketing services. Find the right plan for your brand\'s trajectory.',
};

const serviceTiers = [
    {
        name: 'Digital Marketing Services',
        services: [
            { name: 'Social Media Marketing (SMM)', price: '$59/month', description: 'FB/Instagram page growth, strategy, posting & engagement' },
            { name: 'Search Engine Optimization (SEO)', price: '$89/month', description: 'On-page, off-page, keyword ranking, technical SEO' },
            { name: 'Google Ads / SEM', price: '$49/campaign', description: 'Google search, display, shopping ads' },
            { name: 'Content Marketing', price: '$12/post', description: 'Blogs, captions, marketing copies, strategy' },
            { name: 'Email Marketing', price: '$25/month', description: 'Design + Automation + Bulk Email Tools' },
            { name: 'Influencer Marketing', price: '$39/campaign', description: 'Influencer selection, collab, tracking' },
            { name: 'Website Design & Development', price: '$99+', description: 'Static or dynamic website (WordPress/Firebase)' },
            { name: 'Reel/Short Video Marketing', price: '$12/reel', description: 'Reels production + posting + boosting' },
            { name: 'Branding & Logo Design', price: '$30/package', description: 'Logo, colors, typography, brand guide' },
            { name: 'Online Reputation Management (ORM)', price: '$49/month', description: 'Reviews, ratings, Google listing' },
            { name: 'Performance Marketing', price: '$75/month', description: 'ROI-based paid ads & analytics' },
            { name: 'Lead Generation Campaigns', price: '$60/campaign', description: 'Funnel + Ads + WhatsApp lead setup' },
            { name: 'Analytics & Conversion Tracking', price: '$35/setup', description: 'Google Analytics, GTM, Pixel setup' },
            { name: 'WhatsApp & SMS Marketing', price: '$25/month', description: 'Bulk message campaigns' },
            { name: 'Affiliate Marketing Setup', price: '$60/project', description: 'Affiliate tracking system & creatives' },
            { name: 'Funnel Building & Automation', price: '$49/funnel', description: 'Landing page + Email/WA Automation' },
            { name: 'Podcast Distribution & Promotion', price: '$35/episode', description: 'Upload, SEO, thumbnails, platform setup' },
            { name: 'YouTube Marketing & Optimization', price: '$30/video', description: 'Channel growth, SEO, thumbnails, titles' },
            { name: 'Blog Writing & SEO Articles', price: '$12/article', description: '1000+ words SEO-friendly blog posts' },
            { name: 'E-Commerce Store Marketing', price: '$89/month', description: 'Flipkart/Amazon/Shopify promotion' },
            { name: 'Landing Page Design + CRO', price: '$49/page', description: 'High-converting single-page website' },
            { name: 'Ad Creatives Production (Graphics/Video)', price: '$19/ad', description: 'Videos, banners, carousels, motion design' },
            { name: 'Digital Strategy & Consultation', price: '$0/session', description: '1-on-1 call + roadmap + tools + competitor analysis' },
        ],
    },
    {
        name: 'Production Services',
        services: [
            { name: 'Reel Shoot + Editing', price: '$12/reel' },
            { name: 'Long Video Shoot + Editing', price: '$49/video' },
            { name: 'Ad Shoot + Content Writing + Editing', price: '$75/ad' },
            { name: 'Product Photo Shoot', price: '$19 onwards' },
            { name: 'Advanced Product Photo Shoot', price: '$75 onwards' },
            { name: 'Podcast Shoot + Editing', price: '$69 onwards' },
        ],
    },
];

export default function PricingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <header className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                        Our Service Pricing
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-foreground/80">
                        Transparent, flexible pricing to fuel your brand's journey to the stars.
                    </p>
                </header>

                <div className="space-y-12">
                    {serviceTiers.map((tier) => (
                        <div key={tier.name}>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 mb-6 text-center">{tier.name}</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-max text-left border-collapse">
                                    <thead className="border-b border-border">
                                        <tr>
                                            <th className="p-4 font-semibold">No.</th>
                                            <th className="p-4 font-semibold">Service Name</th>
                                            <th className="p-4 font-semibold hidden md:table-cell">Description</th>
                                            <th className="p-4 font-semibold text-right">Starting Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tier.services.map((service, index) => (
                                            <tr key={service.name} className="border-b border-border/50 hover:bg-card">
                                                <td className="p-4">{index + 1}.</td>
                                                <td className="p-4 font-medium text-foreground">{service.name}</td>
                                                <td className="p-4 text-foreground/80 hidden md:table-cell">{service.description}</td>
                                                <td className="p-4 text-right font-bold text-accent">{service.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center border-t border-border pt-8 mt-12">
                     <p className="mt-2 text-foreground/80">Note: Costs may vary based on specific requirements.</p>
                    <p className="mt-6 text-2xl">
                        🌟 Ready to launch? <Link href="/#contact" className="text-accent hover:underline">Let's build a plan that fits your universe.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
