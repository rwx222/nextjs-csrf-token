import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/app/globals.css'
import { GA_KEY } from '@/constants'

const nextFont = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js + CSRF Tokens',
    default: 'Next.js + CSRF Tokens',
  },
  description:
    'Next.js and CSRF Tokens example, to avoid middleware edge runtime error',
  keywords: 'next.js, csrf tokens, edge runtime error, react',
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
