'use client'

import { useEffect, useState } from 'react'
import { LINKS } from '@/app/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  X,
} from 'lucide-react'
import AOS from 'aos'
import { cn } from '@/lib/utils'

const Navbar = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  return (
    <nav className="fixed z-50 flex w-screen items-center justify-between border-b-[1px] border-b-gray-50/10 px-2 text-white backdrop-blur-[0.9rem] lg:px-24 xl:px-36">
      <div className="flex items-center gap-4 p-4 xl:gap-16">
        <div className="block lg:hidden">
          <Button
            variant="link"
            className="p-0 text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </Button>
        </div>

        <Link href="/">
          <h1 className="text-3xl">GCRAIT</h1>
        </Link>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-3 lg:flex-row">
            {LINKS.map((link) => (
              <li key={link.title}>
                <Button
                  variant="link"
                  className="text-white"
                  disabled={link.title !== 'Home'} // temporary
                >
                  <Link href={link.href}>{link.title}</Link>
                </Button>
                {pathname === link.href && (
                  <div className="m-auto mt-[2px] h-[2px] w-[35%] rounded-full bg-emerald-400" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 p-4">
        <Button variant="ghost" className="h-8 w-8 text-white">
          <FacebookIcon className="flex-shrink-0" />
        </Button>
        <Button variant="ghost" className="h-8 w-8 text-white">
          <InstagramIcon className="flex-shrink-0" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-[4.5rem] h-screen w-screen bg-neutral-300 p-8 text-black lg:hidden">
          <ul className="flex h-full flex-col items-start justify-start gap-y-4">
            {LINKS.map((link, index) => (
              <li
                key={link.title}
                className={cn(
                  'flex w-full border-b-[1px] border-neutral-400 py-4 text-black',
                  {
                    'border-emerald-800': pathname === link.href,
                  }
                )}
              >
                <Link
                  href={link.href}
                  data-aos="fade"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay={index * 250}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'flex w-full items-center justify-between text-start font-rubikMono text-base text-neutral-600',
                    {
                      'text-emerald-800': pathname === link.href,
                    }
                  )}
                >
                  {link.title}
                  <ArrowRight
                    color={
                      pathname === link.href
                        ? 'rgb(6,95,70)'
                        : 'rgb(115,115,115)'
                    }
                    size={16}
                  />
                </Link>
                {pathname === link.href && (
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
