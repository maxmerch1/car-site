import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auto Dynamics - Luxury Car Detailing',
  description: 'Professional car detailing services in Suffield, CT. Premium products, attention to detail, and showroom-ready results. Book your detail today!',
  keywords: 'car detailing, auto detailing, luxury car care, Suffield CT, professional detailing',
  authors: [{ name: 'Auto Dynamics' }],
  openGraph: {
    title: 'Auto Dynamics - Luxury Car Detailing',
    description: 'Professional car detailing services in Suffield, CT. Premium products, attention to detail, and showroom-ready results.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
