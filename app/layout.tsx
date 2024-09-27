import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from '@/components/ui/navbar'
import { cn } from '@/lib/utils'
import './globals.css'

const braveEightyone = localFont({
  src: './fonts/BraveEightyone.ttf',
  variable: '--font-brave-eightyone',
  weight: '100 900',
})
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
          'relative min-h-screen antialiased',
          braveEightyone.variable,
          dmSans.variable,
          rubikMono.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
