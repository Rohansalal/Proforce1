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
    'security guard company Anaheim',
    'security guard company California',
    'security services Orange County',
    'Anaheim security company',
    'private security guard Anaheim',
    'security guard services Orange County',
    'armed security guards Anaheim',
    'unarmed security guards Orange County',
    'mobile patrol services Anaheim',
    'construction site security California',
    'event security Anaheim',
    'fire watch security services Orange County',
    'corporate security Anaheim',
    'executive protection California',
    '24/7 security guard services',
    'professional security services California',
    'best security company CA',
    'proforce1 protection services',
    'hospital security guards',
    'access control systems Anaheim',
    'security guard for events California',
    'retail security guards Orange County',
    'warehouse security California',
    'commercial security services Anaheim',
    'residential security guards Orange County',
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

  // JSON-LD Structured Data for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: "ProForce 1 Protection Services",
    url: "https://proforce1protection.com/",
    logo: "https://proforce1protection.com/android-chrome-512x512.png",
    image: "https://proforce1protection.com/android-chrome-512x512.png",
    description: "Elite security services across California including Armed, Unarmed, Event, Mobile Patrol, and Construction Security.",
    telephone: "800-779-7691",
    email: "info@proforce1protection.com",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "California BSIS PPO License",
      value: "PPO 120753",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "California Private Patrol Operator License",
      identifier: "PPO 120753",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "California Bureau of Security and Investigative Services",
        url: "https://www.bsis.ca.gov/",
      },
    },
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
        <meta name="google-site-verification" content="S1fN6M8mq5lqUp8RgxRyubUgBCAvJlPrz5yZu3UgjiQ" />
        <link rel="preload" as="image" href="/hero/patrol-services.jpg" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
