import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const _oswald = Oswald({ subsets: ["latin", "latin-ext"], variable: "--font-oswald" });

export const viewport: Viewport = {
  themeColor: '#fafafa',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'POWERHUB | Silownia 24/7',
  description: 'Powerhub - lokalna silownia czynna 24 godziny na dobe, 7 dni w tygodniu. Nowoczesny sprzet, strefy treningu, trenerzy personalni. Dolacz do nas!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${_inter.variable} ${_oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
