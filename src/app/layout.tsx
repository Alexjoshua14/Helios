

import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const NavBar = dynamic(() => import('@/components/navigation/navBar'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Helios',
  description: 'Let us help design your intergalatic tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
