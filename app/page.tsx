import Image from 'next/image'
import data from '@/data/data.json'
import HeroSection from '@/app/home/hero-section'
import { SectionLayout } from '@/components/layout/section-layout'
import { Heading } from '@/components/ui/heading'

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <HeroSection />

      <SectionLayout className="relative flex items-center justify-center lg:h-screen">
        <Heading text={data?.ABOUT?.heading} />

        <div className="flex flex-col gap-y-3 py-5 lg:flex-row lg:gap-16">
          <p
            className="m-auto text-justify text-base font-normal lg:w-3/6 lg:text-xl lg:leading-relaxed"
            data-aos="fade"
          >
            The{' '}
            <span className="rounded-lg bg-green-100 px-2 font-play">
              Global Conference on Robotics and Artificial Intelligence
              Technologies (GCRAIT)
            </span>{' '}
            is an event focused on the progress and innovation in robotics and
            AI. It gathers researchers, industry experts, and enthusiasts from
            different parts of the world, offering a space for sharing ideas and
            exploring new developments in these fast-growing fields. The
            conference will include various activities like talks from experts
            on the latest trends, competitions highlighting new inventions, and
            workshops aimed at encouraging collaboration and skill development.
          </p>
          <div className="w-full lg:w-2/5" data-aos="fade">
            <Image
              src={data?.ABOUT?.image}
              alt="LOGO"
              width={800}
              height={800}
              className="h-full w-auto lg:h-[30rem] lg:w-[30rem]"
            />
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}
