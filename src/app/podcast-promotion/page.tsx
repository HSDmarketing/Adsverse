
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Podcast Distribution & Promotion Services | AdsVerse',
    description: 'Amplify your voice and grow your audience. Our expert podcast distribution and promotion services get your show on all major platforms and in front of the right listeners.',
};

export default function PodcastPromotionPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Podcast Distribution & Promotion
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Getting Your Message Heard Across the Podcasting Universe.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            Creating a great podcast is only half the battle. Getting it in front of the right listeners is the key to growth and monetization. At AdsVerse, we handle the technical and promotional heavy lifting, so you can focus on creating amazing content. We ensure your podcast is seamlessly distributed to all major platforms and promoted effectively to attract and retain subscribers.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🎙️ Our Podcast Growth Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Wide Platform Distribution</h3>
                                        <p>We submit and manage your podcast listing on all major directories, including Spotify, Apple Podcasts, Google Podcasts, and more, ensuring maximum reach.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Podcast SEO & Optimization</h3>
                                        <p>We optimize your episode titles, descriptions, and show notes with relevant keywords to improve discoverability within podcast apps and search engines.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Promotional Asset Creation</h3>
                                        <p>We create a suite of engaging assets for each episode, including eye-catching cover art, audiograms (video clips), and quote graphics for social media promotion.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Audience Growth Strategy</h3>
                                        <p>We provide actionable strategies to promote your podcast, including social media campaigns, cross-promotions with other podcasters, and community engagement tactics.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">Amplify your voice. Expand your reach.</p>
                            <p className="mt-2">Let AdsVerse help your podcast reach the audience it deserves.</p>
                            <p className="mt-6 text-2xl">
                                🎧 Ready to grow your listeners? <Link href="/#contact" className="text-accent hover:underline">Let's talk podcast promotion.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
