import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import Navbar from '@/components/layout/navbar'
import './globals.css'
import 'aos/dist/aos.css'
import Footer from '@/components/layout/footer'

const dmSans = localFont({
  src: './fonts/DMSans.ttf',
  variable: '--font-dmSans',
  weight: '100 900',
})
const rubikMono = localFont({
  src: './fonts/RubikMonoOne-Regular.ttf',
  variable: '--font-rubikMono',
  weight: '100 900',
})
const play = localFont({
  src: './fonts/Play.ttf',
  variable: '--font-play',
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
          'relative min-h-screen overflow-x-hidden antialiased',
          play.variable,
          dmSans.variable,
          rubikMono.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
