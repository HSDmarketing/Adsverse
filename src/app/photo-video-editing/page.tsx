
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Photo & Video Production Services | AdsVerse',
    description: 'Professional photo and video production services. From concept to final cut, we create stunning visuals for your brand, including ads, social content, and product photography.',
};

export default function PhotoVideoEditingPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Photo & Video Production
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Capturing Your Brand’s Story with Cinematic, High-Impact Visuals.
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                           In today's visual-first world, high-quality photo and video content is non-negotiable. At AdsVerse, your brand’s story comes alive through stunning, professional visuals. We handle everything from concept development and storyboarding to shooting and post-production, ensuring your content is not just seen, but felt.
                        </p>

                        <div>
                            <h2 className="font-headline text-3xl font-bold text-foreground/90 flex items-center gap-3">
                                🌟 Our Production Services
                            </h2>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Commercial Video Production</h3>
                                        <p>Professional, branded video shoots for advertisements, social media content (Reels, Shorts), corporate videos, and vlogs with creative direction and high-end production values.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Professional Photography</h3>
                                        <p>Styled product photography, corporate headshots, and lifestyle content shoots, all optimized for your website, social media, and marketing campaigns.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Podcast Production</h3>
                                        <p>High-quality video and audio recording for podcasts, including multi-camera setups and professional audio engineering to make your show look and sound its best.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Editing & Post-Production</h3>
                                        <p>Our post-production services include expert video editing, color grading, motion graphics, audio mastering, and image retouching with fast turnarounds.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Content Strategy & Storyboarding</h3>
                                        <p>Before the camera rolls, we work with you to develop a clear concept and storyboard that aligns with your brand message and campaign goals.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <p className="text-xl">From concept to creation, we make every frame count.</p>
                            <p className="mt-2">Let’s shoot something unforgettable.</p>
                            <p className="mt-6 text-2xl">
                                🎬 <Link href="/#contact" className="text-accent hover:underline">Book your production consultation today.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
