// import type React from "react"
// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"
// import { Header } from "@/components/site/header"
// import { Footer } from "@/components/site/footer"
// import { Suspense } from "react"
// import { CookieConsentBanner } from "@/components/site/CookieConsentBanner"
// //import { TopAnalytics } from "@/components/site/top-analytics" // import pre-nav analytics bar


// export const metadata: Metadata = {
//   title: 'ProForce1 - Professional Security Services & Protection',
//   description: 'ProForce1 provides comprehensive security services with data protection and user privacy. We prioritize security, handling your information responsibly.',
//   keywords: 'security services, data protection, user privacy, professional protection',
//   icons: {
//     icon: '/favicon.ico',
//     apple: '/apple-touch-icon.png',
//   },
//   openGraph: {
//     title: 'ProForce1 - Professional Security Services & Protection',
//     description: 'ProForce1 provides comprehensive security services with data protection and user privacy. We prioritize security, handling your information responsibly.',
//     url: 'https://proforce1.com/',
//     type: 'website',
//     siteName: 'ProForce1',
//     images: [
//       {
//         url: '/logo.png', // Use absolute URL for OG image
//         width: 581,
//         height: 163,
//         alt: 'ProForce1 Protection Services',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'ProForce1 - Professional Security Services & Protection',
//     description: 'ProForce1 provides comprehensive security services with data protection and user privacy.',
//     images: ['https://proforce1.com/logo.png'], // Use absolute URL for Twitter
//   },
// }

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL('https://proforce1protection.com/'),
  title: {
    default: 'ProForce 1 - Professional Security Services & Protection',
    template: '%s | ProForce 1',
  },
  description: 'ProForce 1 provides comprehensive elite security services across California. We specialize in Armed, Unarmed, Event, Mobile Patrol, and Construction Security.',
  keywords: [
    // Brand
    'ProForce 1',
    'ProForce 1 Protection Services',
    'proforce1protection.com',
    // Licensing & trust
    'BSIS licensed security company',
    'PPO 120753',
    'California Private Patrol Operator',
    'BSIS certified guards',
    'licensed security agency California',
    // Core service types
    'security guard company Anaheim',
    'security guard company California',
    'security services Orange County',
    'private security California',
    'private security guard Anaheim',
    'armed security guards Anaheim',
    'unarmed security guards Orange County',
    'uniformed security guards California',
    'mobile patrol services Anaheim',
    'mobile patrol Orange County',
    'vehicle patrol services',
    'alarm response California',
    'lock up unlock services',
    'construction site security California',
    'jobsite security guards',
    'event security Anaheim',
    'concert security California',
    'wedding security guards',
    'festival security California',
    'corporate event security',
    'fire watch security services',
    'Title 19 fire watch California',
    'hot work fire watch',
    'sprinkler outage fire watch',
    'corporate security Anaheim',
    'executive protection California',
    'bodyguard services Los Angeles',
    'VIP protection California',
    'celebrity security',
    'close protection officers',
    '24/7 security guard services',
    'professional security services California',
    // Industry verticals
    'hospital security guards California',
    'healthcare security Orange County',
    'school security guards California',
    'campus security guards',
    'bank security guards California',
    'credit union security',
    'high rise building security Los Angeles',
    'office tower security California',
    'retail security guards Orange County',
    'loss prevention officers California',
    'shoplifting prevention security',
    'jewelry store security',
    'luxury retail security',
    'cannabis dispensary security California',
    'dispensary security guards',
    'shopping center security Orange County',
    'mall security guards',
    'warehouse security California',
    'factory security guards',
    'distribution center security',
    'logistics security California',
    'hotel security California',
    'hospitality security Anaheim',
    'casino security California',
    'commercial security services Anaheim',
    'residential security guards Orange County',
    'HOA security California',
    'apartment building security',
    'gated community security',
    'film set security California',
    'TV production security',
    'access control systems Anaheim',
    'concierge security services',
    'front desk security guards',
    // Geo-modifiers (CA cities)
    'Anaheim security guard',
    'Anaheim Resort District security',
    'Anaheim Convention Center security',
    'Disneyland area security',
    'Santa Ana security guards',
    'Irvine security services',
    'Garden Grove security',
    'Costa Mesa security guards',
    'Huntington Beach security',
    'Tustin security',
    'Buena Park security',
    'Fullerton security guards',
    'Orange CA security',
    'Yorba Linda security',
    'Brea security',
    'Westminster security',
    'Long Beach security guards',
    'Los Angeles security services',
    'Hollywood security',
    'Beverly Hills security',
    'Inland Empire security',
    'San Bernardino security',
    'Riverside security guards',
    // Buyer-intent / informational
    'best security company California',
    'security guard cost California',
    'how to hire security guards',
    'hire security guards Anaheim',
    'security guard near me',
    'top rated security company Orange County',
  ],
  authors: [{ name: 'ProForce 1' }],
  creator: 'ProForce 1',
  publisher: 'ProForce 1',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'ProForce 1 - Professional Security Services & Protection',
    description: 'Elite security services across California. Armed, Unarmed, Event & Patrol Security.',
    url: 'https://proforce1protection.com/',
    siteName: 'ProForce 1',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ProForce 1 Protection Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProForce 1 - Professional Security Services & Protection',
    description: 'Elite security services across California. Armed, Unarmed, Event & Patrol Security.',
    creator: '@proforce_1',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'jPKoTLOUoKNIwZ5euUJwJ3P0qonk2nvt7d6ofI8Zjvw',
  },
};

import { LayoutClientWrapper } from "@/components/site/layout-client-wrapper"
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget"
import { SmoothScroll } from "@/components/site/smooth-scroll"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="S1fN6M8mq5lqUp8RgxRyubUgBCAvJlPrz5yZu3UgjiQ" />
        <link rel="preload" as="image" href="/hero/patrol-services.jpg" fetchPriority="high" />
      </head>
<body className={`font-sans antialiased ${inter.variable}`} style={{ fontFamily: "var(--font-sans), sans-serif" }} suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScroll>
            {/* <TopAnalytics /> */}
            <Header />
            <main id="main-content">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </Suspense>
        <LayoutClientWrapper />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
