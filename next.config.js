/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'], // For Contentful images
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig