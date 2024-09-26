import Image from 'next/image'
import LOGO from '@/assets/LOGO.jpg'
import CCSE from '@/assets/CCSE.jpg'
import LORMA from '@/assets/LORMA.jpg'
import ROBOT from '@/assets/ROBOT.png'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-b from-[#000125] from-0% via-[#05313b] via-35% to-[#FFFFFF] to-100% p-8 md:px-20 lg:px-32 xl:px-56">
      <div className="flex h-full flex-col items-center lg:flex-row lg:items-start lg:justify-center lg:pt-20">
        <div className="space-y-6 py-8 pt-20 text-white lg:col-span-2">
          <div className="flex justify-start gap-3">
            <Image
              src={LOGO}
              alt="LOGO"
              className="h-12 w-12 rounded-full lg:h-24 lg:w-24"
            />
            <Image
              src={CCSE}
              alt="CCSE"
              className="h-12 w-12 rounded-full lg:h-24 lg:w-24"
            />
            <Image
              src={LORMA}
              alt="LORMA"
              className="h-12 w-12 rounded-full lg:h-24 lg:w-24"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="font-braveEightyone text-2xl lg:text-4xl">
                GCRAIT:
              </h2>
              <h1 className="text-balance text-left text-3xl tracking-wider lg:text-5xl">
                Global Conference on{' '}
                <span className="font-braveEightyone text-3xl text-emerald-400 lg:text-6xl">
                  Robotics
                </span>{' '}
                and{' '}
                <span className="font-braveEightyone text-3xl text-emerald-400 lg:text-6xl">
                  Information Technology
                </span>
              </h1>
            </div>
            <p className="font-[Arial] text-lg font-light lg:w-5/6 lg:text-2xl">
              Collaboration into the New and Innovative Future: Hardware
              Re-imagined
            </p>

            <Button
              variant="ghost"
              className="bg-emerald-300 p-4 px-8 text-black lg:px-10 lg:py-6"
            >
              Register Now
            </Button>
          </div>
        </div>

        <div className="relative">
          <Image
            src={ROBOT}
            alt="ROBOT"
            className="relative z-50"
            width={600}
            height={600}
          />
        </div>
      </div>
    </main>
  )
}
