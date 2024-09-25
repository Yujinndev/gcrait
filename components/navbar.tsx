'use client'

import { useState } from 'react'
import { LINKS } from '@/app/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FacebookIcon, InstagramIcon, MenuIcon, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  return (
    <nav className="fixed flex w-screen items-center justify-between gap-8 border-b-[1px] border-b-gray-50/10 text-white backdrop-blur-[0.9rem] lg:px-24 xl:px-48">
      <div className="flex items-center gap-12 p-4 xl:gap-16">
        <Link href="/">
          <h1 className="text-4xl">GCRAIT</h1>
        </Link>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-3 lg:flex-row">
            {LINKS.map(({ title, href }) => (
              <li key={title}>
                <Button variant="ghost" className="text-white">
                  <Link href={href}>{title}</Link>
                </Button>
                {pathname === href && (
                  <div className="mt-[2px] h-[2px] w-full rounded-full bg-emerald-400" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="space-x-1">
          <Button variant="ghost" className="h-8 w-8 text-white">
            <FacebookIcon className="flex-shrink-0" />
          </Button>
          <Button variant="ghost" className="h-8 w-8 text-white">
            <InstagramIcon className="flex-shrink-0" />
          </Button>
        </div>

        <div className="block p-2 lg:hidden">
          <Button
            variant="link"
            className="text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-[4.8rem] h-screen w-screen bg-black p-8 text-white lg:hidden">
          <ul className="flex flex-col items-center justify-center gap-4 px-12 pt-48">
            {LINKS.map(({ title, href }) => (
              <li key={title} className="flex h-full w-full rounded-md">
                <Button
                  variant={pathname === href ? 'secondary' : 'ghost'}
                  className="w-full"
                >
                  <Link
                    href={href}
                    className="font-braveEightyone text-start text-xl"
                  >
                    {title}
                  </Link>
                </Button>
                {pathname === href && (
                  <div className="-mt-2 hidden h-[1px] w-full rounded-full bg-emerald-400 lg:block" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
