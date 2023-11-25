import type { Metadata } from 'next'
import {Open_Sans} from 'next/font/google'
import '../css/global.scss'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bank Card',
  description: 'Bank Card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
