import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.scss'
import Sidebar from '@/components/SideNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sterahi | Elizabeth Murray',
  description: 'Elizabeth Murray\'s homepage/portfolio.'
}

const RootLayout = (
  { children }: { children: React.ReactNode }
): React.ReactNode => {
  return (
    <html lang="en">
      <body className={`${inter.className} layout`}>
        <div className = "main">
          <Sidebar />
          <section className = "content">
            {children}
          </section>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
