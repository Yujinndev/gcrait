'use client'

import AOS from 'aos'
import Link from 'next/link'
import Image from 'next/image'
import { data } from '@/app/constants'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  X,
} from 'lucide-react'

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState<boolean>(true)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') return

      const scrollY = window.scrollY
      const viewportHeight = document.querySelector('.hero')!.clientHeight - 500
      if (scrollY >= viewportHeight && pathname === '/') {
        setIsTransparent(false)
      } else {
        setIsTransparent(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed z-50 w-screen border-b-[1px] border-b-[#DDDDDD]/25 bg-white text-black backdrop-blur-[0.9rem]',
        {
          'bg-transparent text-white':
            isTransparent && !isMenuOpen && pathname === '/',
        }
      )}
    >
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-4 p-4 xl:gap-16">
          <div className="block lg:hidden">
            <Button
              variant="link"
              className={cn('p-0 text-black', {
                'text-white': isTransparent && !isMenuOpen && pathname === '/',
              })}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src={data?.BRAND?.logo}
              alt={data?.BRAND?.acronym}
              width={48}
              height={48}
              className="hidden h-12 w-12 rounded-full lg:block"
            />
            <h1 className="text-2xl font-normal">GCRAIT</h1>
          </Link>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-3 lg:flex-row">
              {data?.LINKS?.map((link) => (
                <li key={link.title}>
                  <Button
                    variant="link"
                    className={cn('h-full w-full', {
                      'text-white': isTransparent && pathname === '/',
                      'font-bold hover:no-underline': pathname === link.href,
                    })}
                    asChild
                  >
                    <Link href={link.href} className="h-full w-full">
                      {link.title}
                    </Link>
                  </Button>
                  {pathname === link.href && (
                    <div className="m-auto mt-[2px] h-[2px] w-[35%] rounded-full bg-[#FED049]" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 p-4">
          <Button
            variant="ghost"
            className={cn('h-8 w-8', {
              'text-white': isTransparent && !isMenuOpen && pathname === '/',
            })}
            asChild
          >
            <Link href={data?.CONTACTS?.fb} target="_blank">
              <FacebookIcon className="flex-shrink-0" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            className={cn('h-8 w-8', {
              'text-white': isTransparent && !isMenuOpen && pathname === '/',
            })}
            asChild
          >
            <Link href={data?.CONTACTS?.ig} target="_blank">
              <InstagramIcon className="flex-shrink-0" />
            </Link>
          </Button>
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-[4.35rem] h-screen w-screen border-t-[1px] border-[#e7e7e9] bg-white p-8 text-black lg:hidden">
            <ul className="flex h-full flex-col items-start justify-start gap-y-4">
              {data?.LINKS?.map((link, index) => (
                <li
                  key={link.title}
                  className={cn(
                    'flex w-full border-b-[1px] border-neutral-400 py-4 text-black',
                    {
                      'border-slate-900': pathname === link.href,
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
                      'flex w-full items-center justify-between text-start font-play text-base text-neutral-600',
                      {
                        'text-slate-900': pathname === link.href,
                      }
                    )}
                  >
                    {link.title}
                    <ArrowRight
                      color={
                        pathname === link.href
                          ? 'rgb(15, 23, 42)'
                          : 'rgb(115, 115, 115)'
                      }
                      size={16}
                    />
                  </Link>
                  {pathname === link.href && (
                    <div className="-mt-2 hidden h-[1px] w-full rounded-full bg-[#FED049] lg:block" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
