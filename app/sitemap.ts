import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://proforce1protection.com/'

    // Dynamic lists would normally be grabbed from CMS, static pages listed here
    const routes = [
        '',
        '/about',
        '/services',
        '/gallery',
        '/careers',
        '/contact',
        '/blog',
        '/privacy-policy',
        '/terms-and-conditions',
        '/services/armed-security',
        '/services/unarmed-security',
        '/services/event-security',
        '/services/mobile-patrol-security',
        '/services/construction-security',
        '/services/fire-watch-security',
        '/services/shopping-center-security',
        '/services/school-campus-security',
        '/services/retail-centers-security',
        '/services/on-site-security',
        '/services/loss-prevention-security',
        '/services/hospital-security',
        '/services/high-rise-building-security',
        '/services/financial-institutions-security',
        '/services/factories-storage-security',
        '/services/executive-protection',
        '/services/bank-security',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
