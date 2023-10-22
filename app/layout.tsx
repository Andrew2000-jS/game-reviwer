import type { Metadata } from 'next'
import { Providers } from './providers'
import { Footer, Nav } from '@/shared'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Game Reviwer',
  description: 'Unlocking Game Worlds, One Review at a Time'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
