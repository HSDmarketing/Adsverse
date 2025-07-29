
import { Check, Star } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
    title: 'Services & Pricing | AdsVerse',
    description: 'Transparent pricing for our suite of digital marketing services. Find the right plan for your brand\'s trajectory with our detailed service list.',
};

const serviceTiers = [
    {
        name: 'Digital Marketing Services',
        services: [
            { name: 'Social Media Marketing (SMM)', price: '$59/month', description: 'Comprehensive management of your social channels (Facebook, Instagram, etc.). We handle strategy, content creation, posting, community engagement, and growth initiatives to build a loyal following.' },
            { name: 'Search Engine Optimization (SEO)', price: '$89/month', description: 'A holistic SEO approach including on-page optimization, technical SEO audits, high-quality backlink building, and keyword ranking strategies to increase your organic visibility.' },
            { name: 'Google Ads / SEM', price: '$49/campaign', description: 'End-to-end management of Google Ads campaigns, including search, display, and shopping ads. We focus on maximizing your ROAS (Return On Ad Spend).' },
            { name: 'Content Marketing', price: '$12/post', description: 'Creation of valuable content assets such as blog posts, marketing copy, and social media captions, complete with a strategic content calendar.' },
            { name: 'Email Marketing', price: '$25/month', description: 'Full-service email marketing including custom template design, campaign automation, and access to bulk email sending tools to nurture and convert leads.' },
            { name: 'Influencer Marketing', price: '$39/campaign', description: 'We manage your influencer campaigns from start to finish, including influencer identification, outreach, negotiation, and performance tracking.' },
            { name: 'Website Design & Development', price: '$99+', description: 'Custom design and development of static or dynamic websites using modern platforms like Next.js, WordPress, or Webflow, focused on performance and UX.' },
            { name: 'Reel/Short Video Marketing', price: '$12/reel', description: 'End-to-end production of engaging short-form videos for platforms like Instagram Reels and TikTok, including shooting, editing, posting, and promotion.' },
            { name: 'Branding & Logo Design', price: '$30/package', description: 'A complete branding package that includes logo design, color palette selection, typography, and a comprehensive brand style guide.' },
            { name: 'Online Reputation Management (ORM)', price: '$49/month', description: 'Proactive management of your online reputation, including monitoring brand mentions, managing reviews on Google and other platforms, and improving ratings.' },
            { name: 'Performance Marketing', price: '$75/month', description: 'ROI-focused paid advertising campaigns across multiple platforms, supported by in-depth analytics and continuous optimization to ensure maximum profitability.' },
            { name: 'Lead Generation Campaigns', price: '$60/campaign', description: 'Complete setup of lead generation campaigns, including landing page creation, ad management, and integration with Email/WhatsApp for automated lead nurturing.' },
            { name: 'Analytics & Conversion Tracking', price: '$35/setup', description: 'Expert setup of Google Analytics 4, Google Tag Manager, and Meta Pixel (including CAPI) to ensure accurate data tracking and actionable insights.' },
            { name: 'WhatsApp & SMS Marketing', price: '$25/month', description: 'Execution of bulk messaging campaigns through WhatsApp and SMS for direct and instant communication with your audience.' },
            { name: 'Affiliate Marketing Setup', price: '$60/project', description: 'Establishment of a complete affiliate marketing program, including setting up the tracking system, creating promotional assets for affiliates, and defining commission structures.' },
            { name: 'Funnel Building & Automation', price: '$49/funnel', description: 'Designing and building automated marketing funnels, complete with high-converting landing pages and integrated Email/WhatsApp follow-up sequences.' },
            { name: 'Podcast Distribution & Promotion', price: '$35/episode', description: 'Full podcast launch service including submission to all major platforms, episode SEO, thumbnail creation, and promotional asset generation.' },
            { name: 'YouTube Marketing & Optimization', price: '$30/video', description: 'Services to grow your YouTube channel, including video SEO, thumbnail design, title optimization, and audience growth strategies.' },
            { name: 'Blog Writing & SEO Articles', price: '$12/article', description: 'Professionally written, 1000+ word SEO-friendly blog posts designed to rank on search engines and establish your topical authority.' },
            { name: 'E-Commerce Store Marketing', price: '$89/month', description: 'Specialized marketing services for e-commerce platforms like Flipkart, Amazon, and Shopify, focusing on driving sales and increasing product visibility.' },
            { name: 'Landing Page Design + CRO', price: '$49/page', description: 'Design and development of a high-converting, single-page website focused on a specific call-to-action, including Conversion Rate Optimization (CRO).' },
            { name: 'Ad Creatives Production (Graphics/Video)', price: '$19/ad', description: 'Production of compelling ad creatives, including video ads, static banners, carousels, and animated motion graphics for your campaigns.' },
            { name: 'Digital Strategy & Consultation', price: '$0/session', description: 'A complimentary 1-on-1 strategy call with an expert to create a digital roadmap, recommend tools, and provide a competitor analysis.' },
        ],
    },
    {
        name: 'Production Services',
        services: [
            { name: 'Reel Shoot + Editing', price: '$12/reel', description: 'On-site shooting and professional editing for one short-form video, optimized for social media engagement.' },
            { name: 'Long Video Shoot + Editing', price: '$49/video', description: 'Production of one long-form video (e.g., for YouTube), including filming and comprehensive post-production.' },
            { name: 'Ad Shoot + Content Writing + Editing', price: '$75/ad', description: 'Full production for a video ad, which includes scriptwriting, content creation, shooting, and editing.' },
            { name: 'Product Photo Shoot', price: '$19 onwards', description: 'Professional studio photography for your products, including high-quality images on a clean background.' },
            { name: 'Advanced Product Photo Shoot', price: '$75 onwards', description: 'Advanced product photography including lifestyle shots, multiple angles, and creative compositions.' },
            { name: 'Podcast Shoot + Editing', price: '$69 onwards', description: 'Professional video and audio recording for a podcast episode, including post-production and editing.' },
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
                            <div className="border rounded-lg overflow-hidden">
                                <Accordion type="single" collapsible className="w-full">
                                    {tier.services.map((service) => (
                                        <AccordionItem value={service.name} key={service.name} className="border-b last:border-b-0 border-border/50">
                                            <AccordionTrigger className="p-4 hover:bg-card text-left">
                                                <div className="flex-1 flex justify-between items-center">
                                                    <span className="font-medium text-foreground">{service.name}</span>
                                                    <span className="font-bold text-accent text-right ml-4">{service.price}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="p-4 bg-card/50">
                                                <p className="text-foreground/80">{service.description}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center border-t border-border pt-8 mt-12">
                     <p className="mt-2 text-foreground/80">Note: Costs may vary based on specific requirements and project scope.</p>
                    <p className="mt-6 text-2xl">
                        🌟 Ready to launch? <Link href="/#contact" className="text-accent hover:underline">Let's build a plan that fits your universe.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
