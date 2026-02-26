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
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
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
    // Top Hyper-Local Keywords (High Conversion)
    'security guards Anaheim',
    'security guard company California',
    'security services Orange County',
    'Anaheim security company',
    'private security guard Anaheim',
    'security guard services Orange County',

    // Service Specific (High Intent)
    'armed security guards Anaheim',
    'unarmed security guards Orange County',
    'mobile patrol services Anaheim',
    'construction site security California',
    'event security Anaheim',
    'fire watch security services Orange County',
    'corporate security Anaheim',
    'executive protection California',

    // Brand & General
    'best security company CA',
    'proforce1 protection services',
    'hospital security guards',
    'access control systems Anaheim'
  ],
  authors: [{ name: 'ProForce 1' }],
  creator: 'ProForce 1',
  publisher: 'ProForce 1',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
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
};

import { LayoutClientWrapper } from "@/components/site/layout-client-wrapper"
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  // JSON-LD Structured Data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: "ProForce 1 Protection Services",
    url: "https://proforce1protection.com/",
    logo: "https://proforce1protection.com//logo.png",
    image: "https://proforce1protection.com//logo.png",
    description: "Elite security services across California including Armed, Unarmed, Event, Mobile Patrol, and Construction Security.",
    telephone: "800-779-7691",
    email: "info@proforce1protection.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1671 W Katella Ave Suite 106",
      addressLocality: "Anaheim",
      addressRegion: "CA",
      postalCode: "92802",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.803992,
      longitude: -117.9403213
    },
    areaServed: "California",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    sameAs: [
      "https://www.facebook.com/Proforce1protection",
      "https://www.instagram.com/proforce1protectionservices/",
      "https://x.com/proforce_1",
      "https://www.linkedin.com/company/proforce1/",
      "https://youtu.be/p6BQtfCuY5s?si=7FP-mx9tNfdBVeCp"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/hero/patrol-services.jpg" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <TopAnalytics /> */}
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </Suspense>
        <LayoutClientWrapper />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
