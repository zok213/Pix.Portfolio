import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { ChatBox } from '@/components/ui/chat/chatbox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pixerve - Unleashing Infinite Creativity',
  description: 'Empowering creativity and technology from branding, media, and social to creative and innovative tech projects.',
  keywords: 'web development, design, branding, AI, technology, Da Nang, Vietnam',
  authors: [{ name: 'Pixerve Team' }],
  openGraph: {
    title: 'Pixerve - Unleashing Infinite Creativity',
    description: 'Empowering creativity and technology from branding, media, and social to creative and innovative tech projects.',
    url: 'https://pixerve.com',
    siteName: 'Pixerve',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixerve Landing Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixerve - Unleashing Infinite Creativity',
    description: 'Empowering creativity and technology from branding, media, and social to creative and innovative tech projects.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <ChatBox />
        </Providers>
      </body>
    </html>
  )
}