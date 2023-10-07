import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Footer, Nav } from '@/components'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page'
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
