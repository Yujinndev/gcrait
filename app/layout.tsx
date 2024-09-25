import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})
const braveEightyone = localFont({
  src: './fonts/BraveEightyone.ttf',
  variable: '--font-brave-eightyone',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'GCRAIT: Robotics',
  description:
    'Collaboration into the New and Innovative Future: Hardware Re-imagined',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          geistSans.variable,
          geistMono.variable,
          braveEightyone.variable
        )}
      >
        <Navbar />

        {children}
      </body>
    </html>
  )
}
