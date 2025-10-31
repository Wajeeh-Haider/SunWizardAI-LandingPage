import type React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import DownloadCTA from '@/components/download-cta';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'SunWizard AI - Your Personal Sun Protection Assistant',
  description:
    'Smart UV monitoring and personalized sunscreen recommendations powered by AI',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Navigation />
        {children}
        <DownloadCTA />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
