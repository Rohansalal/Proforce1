import bundleAnalyzer from '@next/bundle-analyzer'

// Legacy numeric blog URLs -> descriptive slug URLs (301 to preserve SEO).
const BLOG_SLUG_REDIRECTS = {
  '1': 'security-solutions-for-schools',
  '2': 'proforce1-expands-northern-california',
  '3': 'future-of-event-security',
  '4': 'understanding-bsis-requirements',
  '5': 'mobile-patrol-best-practices',
  '6': 'new-security-technology-implementation',
  '7': 'winter-security-for-construction-sites',
  '8': 'psychology-of-deterrence-physical-security',
  '9': 'ai-patrol-routing-and-incident-response',
  '10': 'rapid-response-retail-loss-case-study',
  '11': 'cold-weather-protocols-for-overnight-guards',
  '12': 'de-escalation-training-exercises',
  '13': 'security-culture-investing-in-your-guards',
  '14': 'modern-patrol-challenges-and-solutions',
  '15': 'engage-early-with-security-partners',
  '16': 'top-security-measures-for-businesses',
  '17': 'event-security-planning-guide',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return Object.entries(BLOG_SLUG_REDIRECTS).map(([id, slug]) => ({
      source: `/blog/${id}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }))
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    contentDispositionType: 'inline',
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [25, 40, 50, 60, 75, 80, 90, 100],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compress: true,
  experimental: {
    optimizeCss: true, // Uses critters to inline critical CSS and block 150ms render-halts
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'phosphor-react',
      'date-fns',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip',
    ],
  },
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig)
