import { Raleway } from 'next/font/google'

import '@/app/globals.css'

const nextFont = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | NextJS CSRF Token',
    default: 'NextJS CSRF Token',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={nextFont.className}>{children}</body>
    </html>
  )
}
