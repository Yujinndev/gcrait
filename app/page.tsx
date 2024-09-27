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
    <main className="relative h-screen overflow-x-hidden bg-gradient-to-b from-[#000125] from-0% via-[#05313b] via-55% to-[#FFFFFF] to-[120%]">
      <Image
        src={ROBOT}
        alt="ROBOT"
        className="absolute -right-2 bottom-10 z-10 w-[400px] opacity-85 md:w-[450px] lg:-right-8 lg:block lg:w-[550px] xl:w-[650px] 2xl:w-[750px]"
      />

      <section className="relative z-20 flex h-full flex-col gap-4 p-8 pt-28 md:px-16 lg:px-24 xl:px-40 xl:pt-40">
        <div className="flex items-center py-4">
          {LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.img}
              alt={logo.name}
              className="h-16 w-16 rounded-full border-[2px] border-gray-600 md:h-24 md:w-24"
            />
          ))}
          <div className="ml-3 h-[3px] w-[20%] rounded-full bg-emerald-400" />
        </div>

        <div className="lg:3/5 relative space-y-10 xl:w-3/4">
          <div className="space-y-4">
            <h1 className="text-left">
              Global Conference on <span className="title-span">Robotics</span>{' '}
              and <span className="title-span">Information Technology</span>
            </h1>

            <p className="font-dmSans relative w-[50%] text-base font-light tracking-tighter lg:w-3/4 lg:text-lg xl:text-2xl">
              Collaboration into the New and Innovative Future: Hardware
              Re-imagined
            </p>
          </div>
          <Button
            variant="outline"
            className="group space-x-4 rounded-full bg-transparent p-4 px-8 drop-shadow-[0_0_12px_rgb(110,231,183,.75)] hover:border-emerald-400 hover:bg-emerald-500 lg:px-10 lg:py-6"
          >
            <span className="">Register Now</span>
            <ArrowUpRight className="group-hover:text-black" />
          </Button>
        </div>
      </section>
    </main>
  )
}
