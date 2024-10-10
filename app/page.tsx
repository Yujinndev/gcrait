import Image from 'next/image'
import data from '@/data/data.json'
import HeroSection from '@/app/home/hero-section'
import { SectionLayout } from '@/components/layout/section-layout'
import { Heading } from '@/components/ui/heading'

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <HeroSection />

      <SectionLayout className="flex h-screen items-center justify-center">
        <Heading text={data?.ABOUT?.heading} />

        <div className="flex flex-col gap-y-3 py-5 lg:flex-row lg:gap-16">
          <p
            className="m-auto text-justify text-[4rem] font-normal lg:w-3/6 lg:text-xl lg:leading-relaxed"
            data-aos="fade"
          >
            The{' '}
            <span className="rounded-lg bg-green-100 px-2 font-play">
              Global Conference on Robotics and Artificial Intelligence
              Technologies (GCRAIT)
            </span>{' '}
            is a world-class event dedicated to the advancement and innovation
            of robotics and AI. Bringing together top researchers, industry
            professionals, and enthusiasts from around the globe, GCRAIT
            provides a unique platform for sharing knowledge and exploring
            cutting-edge developments in these rapidly evolving fields. The
            conference will feature a diverse range of activities, including
            expert-led talks on emerging trends, competitive events showcasing
            breakthrough innovations, and hands-on workshops designed to foster
            collaboration and skill-building. Whether you&apos;re an AI
            researcher, a robotics engineer, or simply passionate about the
            future of technology, GCRAIT offers an unparalleled opportunity to
            connect with thought leaders, exchange ideas, and be part of the
            global conversation shaping the future of robotics and AI.
          </p>
          <div className="w-full lg:w-2/5" data-aos="fade">
            <Image
              src={data?.ABOUT?.image}
              alt="LOGO"
              width={800}
              height={800}
              className="h-[30rem] w-[30rem]"
            />
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}
