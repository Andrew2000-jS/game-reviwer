import { Footer, Nav } from '@/shared'
import type { Metadata } from 'next'
import '../shared/styles/globals.css'
import { Providers } from './providers'

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
