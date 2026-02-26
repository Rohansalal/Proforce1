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
        '/services/fire-watch-security'
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
