import Image from 'next/image'
import GCRAIT from '@/assets/LOGO.jpg'
import CCSE from '@/assets/CCSE.jpg'
import LORMA from '@/assets/LORMA.jpg'
import ROBOT from '@/assets/ROBOT.png'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

const LOGOS = [
  {
    name: 'LORMA',
    img: LORMA,
  },
  {
    name: 'GCRAIT',
    img: GCRAIT,
  },
  {
    name: 'CCSE',
    img: CCSE,
  },
]

export default function Home() {
  return (
    <main className="relative h-screen overflow-x-hidden bg-gradient-to-b from-[#000125] from-0% via-[#05313b] via-55% to-[#FFFFFF] to-[140%]">
      <Image
        src={ROBOT}
        alt="ROBOT"
        className="absolute -right-2 bottom-0 z-10 hidden md:w-[450px] lg:-right-8 lg:block lg:w-[525px] lg:opacity-90 xl:w-[650px]"
      />

      <section className="relative z-20 flex h-full flex-col gap-4 gap-y-1 p-6 pt-20 md:px-16 lg:w-9/12 lg:gap-y-6 lg:px-24 xl:px-40 xl:pt-40">
        <div className="relative flex items-center gap-1 py-4">
          <div className="h-[3px] w-full min-w-[10%] rounded-full bg-white lg:hidden" />
          {LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.img}
              alt={logo.name}
              className="h-[4.5rem] w-[4.5rem] rounded-full border-[2px] border-gray-600 md:h-24 md:w-24"
            />
          ))}
          <div className="h-[3px] w-full min-w-[10%] rounded-full bg-white" />
        </div>

        <div className="relative flex flex-col justify-center space-y-6 lg:justify-start">
          <div className="space-y-4">
            <h2 className="polygon-path m-auto w-max border-[1px] bg-white/5 px-6 py-3 font-rubikMono text-xl lg:m-0 lg:text-left lg:text-3xl">
              GCRAIT:
            </h2>
            <h1 className="text-center lg:text-left">
              Global Conference on{' '}
              <span className="text-emerald-400">Robotics</span> and{' '}
              <span className="text-emerald-400">
                Artificial Intelligence Technologies
              </span>
            </h1>

            <p className="relative text-center font-dmSans text-lg font-light tracking-tighter lg:w-3/4 lg:text-left lg:text-lg xl:text-xl">
              Collaboration into the New and Innovative Future: Hardware
              Re-imagined
            </p>
          </div>
          <Button
            variant="ghost"
            className="group m-auto w-max space-x-3 rounded-full bg-white p-4 px-8 hover:drop-shadow-[0_0_7px_rgb(110,231,183,.75)] lg:m-0 lg:px-10 lg:py-6"
          >
            <span className="text-[14px] text-black">Register Now</span>
            <ArrowUpRight color="black" size={18} />
          </Button>
        </div>
      </section>
    </main>
  )
}
