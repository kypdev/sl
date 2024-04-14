import type { Metadata } from 'next'
import { Inter, Prompt } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const propmt = Prompt({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-prompt'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${propmt.variable} bg-bgimg bg-fixed`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
