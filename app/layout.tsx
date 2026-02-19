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
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Suspense } from "react"
import { CookieConsentBanner } from "@/components/site/CookieConsentBanner"

export const metadata: Metadata = {
  title: 'ProForce1 Privacy Policy: Data Protection and User Privacy',
  description: 'Discover ProForce1 Privacy Policy-insights on data protection and user privacy. We prioritize security, handling your information responsibly',
  keywords: 'privacy policy, data protection, user privacy, security services',

  // --- ADD THIS SECTION ---
  icons: {
    icon: '/logo.png', // The path to your image in the public folder
    shortcut: '/logo.png',
    apple: '/logo.png', // Optional: for iPhone home screen
  },
  // ------------------------

  openGraph: {
    title: 'ProForce1 Privacy Policy: Data Protection and User Privacy',
    description: 'Discover ProForce1 Privacy Policy-insights on data protection and user privacy. We prioritize security, handling your information responsibly',
    url: 'https://proforc1.com/privacy-policy/',
    type: 'article',
    images: [
      {
        url: '/logo.png',
        width: 581,
        height: 163,
        alt: 'ProForce1 Protection Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProForce1 Privacy Policy: Data Protection and User Privacy',
    description: 'Discover ProForce1 Privacy Policy-insights on data protection and user privacy. We prioritize security, handling your information responsibly',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <TopAnalytics /> */}
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </Suspense>
        <Analytics />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
