import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingCta } from '@/components/layout/floating-cta';

export const metadata: Metadata = {
  title: 'Morningstar Media - Where Brands Rise First',
  description: 'Morningstar Media: A creative marketing agency that transforms your brand into a shining star.',
  keywords: ['marketing agency', 'brand strategy', 'social media', 'performance marketing', 'seo', 'web design'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col')}>
        <Header />
        <main className="flex-grow">{children}</main>
        <FloatingCta />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
