import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import '@/app/globals.css'

const nextFont = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js 15 + CSRF Token',
    default: 'Next.js 15 + CSRF Token',
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
    </html>
  )
}
