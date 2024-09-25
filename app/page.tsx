import Image from 'next/image'
import LOGO from '@/assets/LOGO.jpg'
import CCSE from '@/assets/CCSE.jpg'
import LORMA from '@/assets/LORMA.jpg'
import ROBOT from '@/assets/ROBOT.png'
import BG from '@/assets/BG.png'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="grid h-screen place-content-center bg-gradient-to-b from-[#000125] from-0% via-[#05313b] via-35% to-[#FFFFFF] to-100% p-8 md:px-20 lg:grid-cols-3 lg:px-32 xl:px-56">
      {/*  */}
      <div className="space-y-4 text-white lg:col-span-2">
        <div className="flex justify-center gap-3 lg:justify-start">
          <Image src={LOGO} alt="LOGO" className="h-24 w-24 rounded-full" />
          <Image src={CCSE} alt="CCSE" className="h-24 w-24 rounded-full" />
          <Image src={LORMA} alt="LORMA" className="h-24 w-24 rounded-full" />
        </div>

        <div className="space-y-6">
          <h1 className="text-balance text-center tracking-wider lg:text-left">
            GCRAIT:
            <br />
            Global Conference on{' '}
            <span className="font-braveEightyone text-5xl text-emerald-400 lg:text-6xl">
              Robotics
            </span>{' '}
            and{' '}
            <span className="font-braveEightyone text-5xl text-emerald-400 lg:text-6xl">
              Information Technology
            </span>
          </h1>
          <p className="font-geistMono text-[21px]">
            Collaboration into the New and Innovative Future: Hardware
            Re-imagined
          </p>

          <Button
            variant="ghost"
            className="bg-emerald-300 p-6 px-10 text-black"
          >
            Register Now
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="relative">
        <Image
          src={ROBOT}
          alt="ROBOT"
          className="relative z-50"
          width={800}
          height={800}
        />
        <Image
          src={BG}
          alt="BG"
          className="fixed right-56 top-52 z-10"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
