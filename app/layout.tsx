import type React from 'react';
import type { Metadata, Viewport } from 'next';
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sunwizard.ai';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SunWizard AI — Your Personal Sun Protection Assistant',
    template: '%s — SunWizard AI',
  },
  description:
    'AI-powered UV monitoring, skin analysis, and personalized sunscreen guidance to keep you protected every day.',
  applicationName: 'SunWizard AI',
  generator: 'SunWizard AI Website',
  keywords: [
    'SunWizard AI',
    'UV monitoring',
    'UV index',
    'sunscreen recommendations',
    'sun protection',
    'skin health',
    'SPF',
    'melanin',
    'skin tone',
    'AI skincare',
    'UV alerts',
    'dermatology',
    'photoaging prevention',
    'skin cancer prevention',
    'App Store',
    'Google Play',
  ],
  authors: [{ name: 'SunWizard AI Team', url: siteUrl }],
  creator: 'SunWizard AI',
  publisher: 'SunWizard Labs',
  category: 'Health & Fitness',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'SunWizard AI',
    title: 'SunWizard AI — Your Personal Sun Protection Assistant',
    description:
      'AI-powered UV monitoring, skin analysis, and personalized sunscreen guidance to keep you protected every day.',
    images: [
      {
        url: '/dashboard-mockup-one.png',
        alt: 'SunWizard AI app dashboard and UV alerts',
      },
      {
        url: '/logo.png',
        alt: 'SunWizard AI logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SunWizard AI — Your Personal Sun Protection Assistant',
    description:
      'AI-powered UV monitoring, skin analysis, and personalized sunscreen guidance to keep you protected every day.',
    images: ['/dashboard-mockup-one.png'],
    site: '@SunWizardAI',
    creator: '@SunWizardAI',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SunWizard AI',
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              sameAs: [
                'https://twitter.com/SunWizardAI',
                'https://www.linkedin.com/company/sunwizard-ai',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SunWizard AI',
              operatingSystem: 'iOS, Android',
              applicationCategory: 'HealthApplication',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              description:
                'AI-powered UV monitoring, skin analysis, and personalized sunscreen guidance to keep you protected every day.',
              downloadUrl: `${siteUrl}/#download`,
              image: [`${siteUrl}/dashboard-mockup-one.png`],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '128',
              },
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
