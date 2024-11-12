import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { data } from '@/app/constants'

const Footer = () => {
  return (
    <footer className="z-30 border-t-[1px] border-t-gray-200 text-black backdrop-blur-sm transition duration-200 ease-linear">
      <div className="mx-auto h-full max-w-screen-xl py-10">
        <div className="grid h-full gap-x-4 lg:grid-cols-9">
          <div className="flex flex-col space-y-6 px-6 pt-12 lg:col-span-4">
            <Link href="/" className="flex w-max items-center gap-4">
              <Image
                src={data.BRAND.logo}
                alt={data.BRAND.acronym}
                width={800}
                height={800}
                className="h-12 w-12 contrast-100 filter"
                priority
              />
              <h1 className="-mt-[4px] text-xl md:text-2xl">
                {data.BRAND.acronym}
              </h1>
            </Link>
            <p className="text-justify lg:w-3/4">
              The Global Conference on Robotics and Artificial Intelligence
              Technologies (GCRAIT) is an event focused on the progress and
              innovation in robotics and AI.
            </p>
          </div>
          <div className="hidden px-6 pt-12 lg:col-span-2 lg:block">
            <h2 className="font-oswald -mt-[4px] text-lg font-bold md:text-xl">
              Navigation
            </h2>

            <ul className="mt-6 space-y-4">
              {data.LINKS?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="font-dmSans font-light underline-offset-8 hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2 px-6 pt-12 lg:col-span-3">
            <h2 className="font-oswald -mt-[4px] text-lg font-bold md:text-xl">
              Contact Us
            </h2>

            <div className="grid grid-cols-2 gap-3 py-4">
              <Button
                variant="ghost"
                className="w-full gap-2 rounded-full border-[1px] border-opacity-5 px-8 py-5"
                asChild
              >
                <Link href={data?.CONTACTS?.fb} target="_blank">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0 text-gray-800 duration-200 ease-in-out group-hover:fill-gray-800"
                  >
                    <g>
                      <path d="M24,12.072A12,12,0,1,0,10.125,23.926V15.541H7.078V12.072h3.047V9.428c0-3.007,1.792-4.669,4.532-4.669a18.611,18.611,0,0,1,2.687.234V7.947H15.83a1.734,1.734,0,0,0-1.947,1.49,1.71,1.71,0,0,0-.008.385v2.25H17.2l-.532,3.469h-2.8v8.385A12,12,0,0,0,24,12.072Z"></path>
                    </g>
                  </svg>
                  <span>Facebook</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full gap-2 rounded-full border-[1px] border-opacity-5 px-8 py-5"
                asChild
              >
                <Link href={data?.CONTACTS?.ig} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0 text-gray-800 duration-200 ease-in-out group-hover:fill-gray-800"
                  >
                    <path d="M12 2.163c3.2 0 3.584 0 4.85.07 1.206.069 2.032.306 2.512.516a5.009 5.009 0 0 1 1.834 1.192c.484.484.87 1.057 1.192 1.834.21.48.447 1.306.516 2.512.07 1.266.07 1.65.07 4.85s0 3.584-.07 4.85c-.069 1.206-.306 2.032-.516 2.512a5.009 5.009 0 0 1-1.192 1.834c-.484.484-1.057.87-1.834 1.192-.48.21-1.306.447-2.512.516-1.266.07-1.65.07-4.85.07s-3.584 0-4.85-.07c-1.206-.069-2.032-.306-2.512-.516a5.009 5.009 0 0 1-1.834-1.192 5.009 5.009 0 0 1-1.192-1.834c-.21-.48-.447-1.306-.516-2.512-.07-1.266-.07-1.65-.07-4.85s0-3.584.07-4.85c.069-1.206.306-2.032.516-2.512A5.009 5.009 0 0 1 4.85 2.749c.48-.21 1.306-.447 2.512-.516C8.416 2.163 8.8 2.163 12 2.163M12 0C8.735 0 8.332.002 7.052.073 5.772.144 4.687.355 3.757.715 2.827 1.075 2.075 1.64 1.435 2.281 0.794 2.921.229 3.673.073 4.603.002 5.474 0 5.877 0 9.142c0 3.266.002 3.669.073 4.939.071 1.27.285 2.355.645 3.285.36.93.926 1.682 1.567 2.322.64.641 1.392 1.207 2.322 1.567.93.36 2.015.574 3.285.645 1.27.071 1.673.073 4.939.073s3.669-.002 4.939-.073c1.27-.071 2.355-.285 3.285-.645.93-.36 1.682-.926 2.322-1.567.641-.64 1.207-1.392 1.567-2.322.36-.93.574-2.015.645-3.285.071-1.27.073-1.673.073-4.939s-.002-3.669-.073-4.939c-.071-1.27-.285-2.355-.645-3.285-.36-.93-.926-1.682-1.567-2.322-.64-.641-1.392-1.207-2.322-1.567-.93-.36-2.015-.574-3.285-.645C15.669.002 15.266 0 12 0zm0 5.838a6.162 6.162 0 0 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
                  </svg>

                  <span>Instagram</span>
                </Link>
              </Button>
            </div>

            <hr />

            <div className="flex justify-center gap-4 rounded-full px-5 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
                className="text-brand h-6 w-6 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div>
                <a
                  className="text-brand hover:text-brand-secondary inline-block duration-200 ease-in-out"
                  href={`mailto:${data?.CONTACTS?.email}`}
                >
                  {data?.CONTACTS?.email}
                </a>
                <p className="text-base text-gray-600">
                  We usually email you back within the day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-1 bg-primary p-4 text-white lg:flex-row">
        © 2024 - Present | GCRAIT Software Innovations
      </div>
    </footer>
  )
}

export default Footer
