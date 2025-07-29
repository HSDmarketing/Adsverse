
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | AdsVerse',
    description: 'Read the official Terms of Service for using the AdsVerse website and services. This agreement governs your use of our digital marketing services.',
};

export default function TermsOfServicePage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Terms of Service
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Last Updated: July 29, 2024
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the adsverse.com website (the "Service") operated by AdsVerse ("us", "we", or "our").
                        </p>
                        <p>
                            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                        </p>

                        <h2 className="font-headline text-3xl font-bold text-foreground/90">1. Use of the Site</h2>
                        <p>
                            You agree to use the Site only for lawful purposes. You are prohibited from any use of the Site that would constitute a violation of any applicable law, regulation, rule, or ordinance of any nationality, state, or locality or of any international law or treaty, or that could give rise to any civil or criminal liability.
                        </p>

                        <h2 className="font-headline text-3xl font-bold text-foreground/90">2. Intellectual Property</h2>
                        <p>
                            The Service and its original content, features, and functionality are and will remain the exclusive property of AdsVerse and its licensors. The Service is protected by copyright, trademark, and other laws of both the India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AdsVerse.
                        </p>
                        
                        <h2 className="font-headline text-3xl font-bold text-foreground/90">3. Links to Other Websites</h2>
                        <p>
                            Our Service may contain links to third-party web sites or services that are not owned or controlled by AdsVerse. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that AdsVerse shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                        </p>

                        <h2 className="font-headline text-3xl font-bold text-foreground/90">4. Limitation of Liability</h2>
                        <p>
                           In no event shall AdsVerse, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                        
                        <h2 className="font-headline text-3xl font-bold text-foreground/90">5. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                        </p>
                        
                        <h2 className="font-headline text-3xl font-bold text-foreground/90">6. Changes</h2>
                        <p>
                             We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <h3 className="font-headline text-2xl font-bold text-foreground/90">Contact Us</h3>
                            <p className="mt-2">If you have any questions about these Terms, please contact us.</p>
                             <p className="mt-4">
                                <a href="mailto:contact@adsverse.com" className="text-accent hover:underline">contact@adsverse.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
