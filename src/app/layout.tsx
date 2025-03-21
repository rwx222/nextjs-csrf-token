import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/app/globals.css'
import { GA_KEY } from '@/constants'

const nextFont = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js + CSRF Token',
    default: 'Next.js + CSRF Token',
  },
  description:
    'Next.js and CSRF Token example, to avoid middleware edge runtime error',
  keywords: 'next.js, csrf token, edge runtime error, react',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={nextFont.className}>{children}</body>

      {!!GA_KEY && <GoogleAnalytics gaId={GA_KEY} />}
    </html>
  )
}
