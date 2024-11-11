import Image from 'next/image'
import { data } from '@/app/constants'
import HeroSection from '@/app/home/hero-section'
import { SectionLayout } from '@/components/layout/section-layout'
import { Heading } from '@/components/ui/heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BentoGrid, BentoGridItem } from '@/components/layout/bento-grid'

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="hero relative">
        <HeroSection />

        <div className="relative flex min-h-96 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#02183c] via-[#324e7a] via-40% to-white px-4 py-16 pb-24 text-center lg:pb-32">
          <div className="z-20 h-[32rem] lg:h-[48rem]">
            <Image
              src={data?.BRAND?.logo}
              alt="ROBOT"
              width={800}
              height={800}
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="relative z-20 -mt-24 text-[#02183c] sm:-mt-16 md:-mt-12">
            8:00 AM - 5:00 PM
          </h1>
          <h1 className="relative z-20 mt-2 text-center text-5xl text-[#02183c] xl:text-6xl 2xl:text-7xl">
            10 DECEMBER 2024
          </h1>
          <p className="relative z-20 mt-2 text-center font-play text-lg font-bold text-[#02183c] md:text-2xl lg:text-3xl">
            LORMA Colleges CLI Urbiztondo, San Juan, La Union
          </p>
        </div>
      </div>

      <SectionLayout>
        <Heading text={data?.ABOUT?.heading} />

        <div className="flex flex-col items-center justify-center gap-y-3 pt-5 md:flex-row md:justify-between lg:gap-16">
          <p
            className="text-justify text-base font-normal md:w-4/6 lg:text-xl lg:leading-relaxed"
            data-aos="fade"
          >
            The{' '}
            <span className="rounded-lg px-2 font-play font-bold">
              Global Conference on Robotics and Artificial Intelligence
              Technologies (GCRAIT)
            </span>{' '}
            is an event focused on the progress and innovation in robotics and
            AI. This year&apos;s conference theme, &quot;Collaboration into the
            New and Innovative Future: Hardware Re-imagined&quot;, underscores
            our unwavering dedication to pioneering advancements and shaping the
            future of technology.
            <br />
            <br />
            The conference is hosted by the College of Computer Studies and
            Engineering of LORMA Colleges. It is scheduled to take place on
            December 10, 2024 in San Juan, La Union.
            <br />
            <br />
            We are hosting GCRAIT to showcase the latest in robotics and AI,
            creating a platform for students, professionals, and enthusiasts to
            connect with industry leaders, and inspiring future generations
            through learning and innovation.
          </p>
          <div
            className="flex justify-center py-4 md:w-3/6 lg:py-0"
            data-aos="zoom-out-left"
          >
            <BentoGrid className="mx-auto max-w-4xl lg:auto-rows-[16rem]">
              {data?.ABOUT?.cards.map((item, i) => (
                <BentoGridItem
                  key={i}
                  className={item.className}
                  thumbnail={item.thumbnail}
                />
              ))}
            </BentoGrid>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout className="lg:px-6">
        <div className="py-12">
          <Heading text={data?.COMPETITONS?.heading} />
          <p
            className="m-auto my-8 w-full text-justify text-base font-normal md:my-0 md:text-center lg:w-5/6 lg:text-xl lg:leading-relaxed"
            data-aos="fade"
          >
            {data?.COMPETITONS?.subheading}
          </p>
        </div>

        <div
          className="relative flex h-auto w-auto flex-col items-center gap-y-3 md:flex-row md:gap-8"
          data-aos="fade"
        >
          {data?.COMPETITONS?.items?.map((item, index) => (
            <div
              key={index}
              className="relative min-h-[32rem] w-full overflow-hidden rounded-lg border border-slate-300 md:w-1/3"
            >
              <Image
                src={data?.BRAND?.logo}
                alt="LOGO"
                width={600}
                height={600}
                className="h-56 w-full object-contain"
              />

              <div className="flex h-full w-full flex-col p-8 text-start font-dmSans tracking-tighter text-black">
                <h2 className="mb-3 text-xl font-bold xl:text-2xl">
                  {item?.title}
                </h2>
                <p className="mb-3 line-clamp-6">{item?.description}</p>
                <Button
                  className="absolute bottom-4 mx-auto flex w-full self-end px-8"
                  asChild
                >
                  <Link href={item?.CTA?.href}>{item?.CTA?.text}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>

      <SectionLayout className="lg:px-6">
        <div className="py-12">
          <Heading text="Frequently Asked Questions" />
          <p
            className="m-auto my-8 w-full text-justify text-base font-normal md:my-0 md:text-center lg:w-5/6 lg:text-xl lg:leading-relaxed"
            data-aos="fade"
          >
            These are some of the common questions that participants have about
            the conference. If you have any other queries, feel free to reach
            out to us.
          </p>
        </div>

        <div
          className="flex h-auto w-auto flex-col items-center gap-y-3 md:flex-row md:gap-8"
          data-aos="fade"
        >
          <div className="h-52 w-full overflow-hidden rounded-lg border border-slate-300 md:h-full md:w-1/3">
            <Image
              src={data?.BRAND?.logo}
              width={800}
              height={800}
              alt="LOGO"
              className="h-full object-contain"
            />
          </div>

          <div className="flex w-full flex-col gap-y-5 text-base font-normal md:w-auto lg:w-2/3">
            {data?.FAQS?.map((faq, index) => (
              <Accordion
                type="single"
                collapsible
                key={index}
                defaultValue={index === 0 ? `item-${index}` : undefined}
              >
                <AccordionItem value={`item-${index}`} className="">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}
