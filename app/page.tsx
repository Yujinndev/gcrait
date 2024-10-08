import Image from 'next/image'
import GCRAIT from '@/assets/LOGO.jpg'
import CCSE from '@/assets/CCSE.jpg'
import LORMA from '@/assets/LORMA.jpg'
import LOGO from '@/assets/LOGO.jpg'
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
    <main className="relative h-screen overflow-x-hidden">
      <section className="relative z-20 flex h-full flex-col gap-4 gap-y-1 bg-gradient-to-b from-[#000125] from-0% via-[#05313b] via-45% to-[#FFFFFF] to-[95%] p-6 pt-20 md:px-16 lg:gap-y-10 lg:px-24 xl:px-40 xl:pt-40">
        <div className="mb-20 space-y-5">
          <div className="relative flex items-center gap-2 py-4">
            <div
              className="h-[3px] w-full min-w-[10%] rounded-full bg-white"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            />
            {LOGOS.map((logo, index) => (
              <Image
                key={logo.name}
                src={logo.img}
                alt={logo.name}
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-delay={index * 250}
                className="h-[4.5rem] w-[4.5rem] rounded-full border-[2px] border-gray-600 md:h-28 md:w-28"
              />
            ))}
            <div
              className="h-[3px] w-full min-w-[10%] rounded-full bg-white"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-delay="750"
            />
          </div>

          <div className="relative flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2
                className="polygon-path m-auto w-max border-[1px] bg-white/5 px-6 py-3 font-rubikMono text-xl lg:text-3xl"
                data-aos="fade"
                data-aos-delay="750"
              >
                GCRAIT:
              </h2>
              <h1
                className="text-center"
                data-aos="fade-down"
                data-aos-delay="1000"
              >
                Global Conference on{' '}
                <span className="text-emerald-400">Robotics</span> and{' '}
                <span className="text-emerald-400">
                  Artificial Intelligence Technologies
                </span>
              </h1>

              <p
                className="relative text-center font-dmSans text-lg font-light tracking-tighter lg:text-lg xl:text-xl"
                data-aos="fade-down"
                data-aos-delay="1250"
              >
                Collaboration into the New and Innovative Future: Hardware
                Re-imagined
              </p>
            </div>
            <Button
              variant="ghost"
              className="group m-auto w-max space-x-3 rounded-full bg-white p-4 px-8 hover:drop-shadow-[0_0_7px_rgb(110,231,183,.75)] lg:px-10 lg:py-6"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="1500"
            >
              <span className="text-[14px] text-black">Register Now</span>
              <ArrowUpRight color="black" size={18} />
            </Button>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center p-5 lg:mt-32">
          <div className="justify-center lg:w-10/12">
            <p className="text-center font-rubikMono text-[26px] text-black md:text-[28px] lg:mb-5 lg:text-[40px]">
              About the Conference
            </p>

            <div className="flex h-auto w-auto flex-col gap-y-3 py-5 lg:flex-row lg:gap-8">
              <p className="text-justify font-dmSans font-light tracking-tighter text-black lg:w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                nisi dui, ullamcorper et cursus et, pretium vitae diam. Proin id
                metus quis arcu ornare dapibus. Suspendisse quis quam sapien.
                Etiam tempor, tellus vel laoreet euismod, mi urna vehicula
                sapien, vitae commodo augue urna ut felis. Fusce et ante
                faucibus, imperdiet nulla id, sagittis arcu. Curabitur a porta
                felis. Phasellus laoreet aliquet lorem nec ornare. Sed dignissim
                urna ac tincidunt tincidunt. Integer euismod nulla vel mollis
                fringilla. Donec nec accumsan augue, vel ornare tellus.
                Pellentesque id nunc nec metus laoreet rhoncus. Sed mollis est
                id ante lacinia posuere a nec ante. Sed dignissim felis ut
                tortor pulvinar, et malesuada velit efficitur. Nam consectetur
                mollis mauris nec molestie. Donec hendrerit, nulla maximus
                interdum ultrices, justo quam pellentesque turpis, id vehicula
                mi ante non elit. Suspendisse quis quam sapien. Etiam tempor,
                tellus vel laoreet euismod, mi urna vehicula sapien, vitae
                commodo augue urna ut felis. Fusce et ante faucibus, imperdiet
                nulla id, sagittis arcu. Curabitur a porta felis. Phasellus
                laoreet aliquet lorem nec ornare.
                <br />
                <br />
                Sed mollis est id ante lacinia posuere a nec ante. Sed dignissim
                felis ut tortor pulvinar, et malesuada velit efficitur. Nam
                consectetur mollis mauris nec molestie. Donec hendrerit, nulla
                maximus interdum ultrices, justo quam pellentesque turpis, id
                vehicula mi ante non elit. Fusce et ante faucibus, imperdiet
                nulla id, sagittis arcu. Curabitur a porta felis. Phasellus
                laoreet aliquet lorem nec ornare. Sed dignissim urna ac
                tincidunt tincidunt. Integer euismod nulla vel mollis fringilla.
                Donec nec accumsan augue, vel ornare tellus. Curabitur a porta
                felis. Phasellus laoreet aliquet lorem nec ornare. Sed dignissim
                urna ac tincidunt tincidunt.
              </p>
              <div className="w-auto lg:w-1/2">
                <Image src={LOGO} alt="LOGO" className="boder-black border" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center p-5 lg:mt-20">
          <div className="mb-8">
            <p className="mb-3 text-center font-rubikMono text-[26px] text-black md:text-[28px] lg:text-[40px]">
              Call for Paper Abstract
            </p>
            <p className="mx-auto text-justify font-dmSans font-light tracking-tighter text-black lg:w-8/12 lg:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              nisi dui, ullamcorper et cursus et, pretium vitae diam.
              Suspendisse quis quam sapien. Etiam tempor, tellus vel laoreet
              euismod, mi urna vehicula sapien, vitae commodo augue urna ut
              felis. Fusce et ante faucibus, imperdiet nulla id, sagittis arcu.
            </p>
          </div>
          <div className="justify-center lg:w-10/12">
            <div className="flex h-auto w-auto flex-col gap-y-3 lg:flex-row lg:gap-8">
              <div className="w-auto overflow-hidden rounded-lg border border-slate-300 lg:w-1/3">
                <Image src={LOGO} alt="LOGO" className="" />
                <p className="p-8 text-justify font-dmSans font-light tracking-tighter text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  nisi dui, ullamcorper et cursus et, pretium vitae diam. Proin
                  id metus quis arcu ornare dapibus. Suspendisse quis quam
                  sapien. Etiam tempor, tellus vel laoreet euismod, mi urna
                  vehicula sapien, vitae commodo augue urna ut felis. Fusce et
                  ante faucibus, imperdiet nulla id, sagittis arcu.
                </p>
              </div>

              <div className="w-auto overflow-hidden rounded-lg border border-slate-300 lg:w-1/3">
                <Image src={LOGO} alt="LOGO" className="" />
                <p className="p-8 text-justify font-dmSans font-light tracking-tighter text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  nisi dui, ullamcorper et cursus et, pretium vitae diam. Proin
                  id metus quis arcu ornare dapibus. Suspendisse quis quam
                  sapien. Etiam tempor, tellus vel laoreet euismod, mi urna
                  vehicula sapien, vitae commodo augue urna ut felis. Fusce et
                  ante faucibus, imperdiet nulla id, sagittis arcu.
                </p>
              </div>
              <div className="w-auto overflow-hidden rounded-lg border border-slate-300 lg:w-1/3">
                <Image src={LOGO} alt="LOGO" className="" />
                <p className="p-8 text-justify font-dmSans font-light tracking-tighter text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  nisi dui, ullamcorper et cursus et, pretium vitae diam. Proin
                  id metus quis arcu ornare dapibus. Suspendisse quis quam
                  sapien. Etiam tempor, tellus vel laoreet euismod, mi urna
                  vehicula sapien, vitae commodo augue urna ut felis. Fusce et
                  ante faucibus, imperdiet nulla id, sagittis arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
