import type { Metadata, Viewport } from 'next'
import { Dancing_Script, Poppins } from 'next/font/google'
import './globals.css'

const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap'
})

const poppins = Poppins({ 
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: '💌 Experiência Especial para Grazi',
  description: 'Uma experiência única e mágica criada especialmente para Grazi, com interações mobile incríveis e efeitos visuais extraordinários.',
  keywords: ['Grazi', 'experiência especial', 'envelope mágico', 'interações mobile', 'efeitos visuais'],
  authors: [{ name: 'Assistente AI' }],
  creator: 'Assistente AI',
  publisher: 'Assistente AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '💌 Experiência Especial para Grazi',
    description: 'Uma experiência única e mágica criada especialmente para Grazi',
    url: 'https://grazi-experience.vercel.app',
    siteName: 'Experiência Grazi',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Experiência Especial para Grazi',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '💌 Experiência Especial para Grazi',
    description: 'Uma experiência única e mágica criada especialmente para Grazi',
    images: ['/og-image.jpg'],
    creator: '@assistenteai',
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
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8b5cf6' },
    { media: '(prefers-color-scheme: dark)', color: '#6366f1' },
  ],
  colorScheme: 'dark',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${dancing.variable} ${poppins.variable}`}>
      <head>
        {/* Meta tags específicas para mobile */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Grazi Experience" />
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon e ícones */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${dancing.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
} 