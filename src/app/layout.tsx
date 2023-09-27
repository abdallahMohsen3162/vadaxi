
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core/styles.css";


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,}: {children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar>
          {children}
        </Navbar>

      </body>
    </html>
  )
}
