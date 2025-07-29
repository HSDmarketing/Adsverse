
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | AdsVerse',
    description: 'Understand how AdsVerse collects, uses, and protects your personal information when you use our website and services. Your privacy is our priority.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Privacy Policy
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-foreground/80">
                            Last Updated: July 29, 2024
                        </p>
                    </header>

                    <div className="prose prose-invert lg:prose-xl mx-auto text-foreground/80 space-y-8">
                        <p>
                            AdsVerse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website stellarbrand.com (the "Site") and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                        </p>

                        <h2 className="font-headline text-3xl font-bold text-foreground/90">1. Information We Collect</h2>
                        <p>
                            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        </p>
                        <ul>
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                             <li><strong>Contact Form Data:</strong> When you submit our contact form, we collect the information you provide, such as your name, email address, phone number, and message, to respond to your inquiries.</li>
                        </ul>

                        <h2 className="font-headline text-3xl font-bold text-foreground/90">2. Use of Your Information</h2>
                        <p>
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                        <ul>
                            <li>Respond to your inquiries and provide customer support.</li>
                            <li>Email you a newsletter or other promotional materials.</li>
                            <li>Improve our website and services.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                        </ul>

                        <h2 className="font-headline text-3xl font-bold text-foreground/90">3. Disclosure of Your Information</h2>
                        <p>
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>
                         <ul>
                            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                             <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                        </ul>


                        <h2 className="font-headline text-3xl font-bold text-foreground/90">4. Security of Your Information</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>

                        <h2 className="font-headline text-3xl font-bold text-foreground/90">5. Policy for Children</h2>
                        <p>
                           We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
                        </p>

                        <h2 className="font-headline text-3xl font-bold text-foreground/90">6. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>

                        <div className="text-center border-t border-border pt-8 mt-12">
                            <h3 className="font-headline text-2xl font-bold text-foreground/90">Contact Us</h3>
                            <p className="mt-2">If you have questions or comments about this Privacy Policy, please contact us at:</p>
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
