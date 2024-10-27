import Image from 'next/image'
import data from '@/data/data.json'
import HeroSection from '@/app/home/hero-section'
import { SectionLayout } from '@/components/layout/section-layout'
import { Heading } from '@/components/ui/heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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

      <div className="mx-auto max-w-screen-xl">
        <div className="px-6 py-12">
          <Heading text="Call for Paper Abstract" />
          <p className="mx-auto text-justify font-dmSans font-light tracking-tighter text-black lg:w-8/12 lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi
            dui, ullamcorper et cursus et, pretium vitae diam. Suspendisse quis
            quam sapien. Etiam tempor, tellus vel laoreet euismod, mi urna
            vehicula sapien, vitae commodo augue urna ut felis. Fusce et ante
            faucibus, imperdiet nulla id, sagittis arcu.
          </p>
        </div>

        <div className="px-6 py-12">
          <div className="flex h-auto w-auto flex-col gap-y-3 lg:flex-row lg:gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-auto overflow-hidden rounded-lg border border-slate-300 lg:w-1/3"
              >
                <Image
                  src={data?.BRAND?.logo}
                  alt="LOGO"
                  width={800}
                  height={800}
                />
                <p className="p-8 text-justify font-dmSans font-light tracking-tighter text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  nisi dui, ullamcorper et cursus et, pretium vitae diam. Proin
                  id metus quis arcu ornare dapibus. Suspendisse quis quam
                  sapien. Etiam tempor, tellus vel laoreet euismod, mi urna
                  vehicula sapien, vitae commodo augue urna ut felis. Fusce et
                  ante faucibus, imperdiet nulla id, sagittis arcu.
                </p>
              </div>
            ))}
          </div>
        </div>

        <SectionLayout>
          <Heading text="Frequently Asked Questions" />
          <p className="mx-auto text-justify font-dmSans font-light tracking-tighter text-black lg:w-8/12 lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi
            dui, ullamcorper et cursus et, pretium vitae diam. Suspendisse quis
            quam sapien. Etiam tempor, tellus vel laoreet euismod, mi urna
            vehicula sapien, vitae commodo augue urna ut felis. Fusce et ante
            faucibus, imperdiet nulla id, sagittis arcu.
          </p>

          <div className="flex h-auto w-auto flex-col gap-y-3 py-8 lg:flex-row lg:gap-8">
            <div className="w-auto overflow-hidden rounded-lg border border-slate-300 lg:w-1/3">
              <Image
                src={data?.BRAND?.logo}
                width={800}
                height={800}
                alt="LOGO"
              />
            </div>

            <div className="flex w-auto flex-col gap-y-5 lg:w-2/3">
              {data?.FAQS?.map((faq, index) => (
                <Accordion
                  type="single"
                  collapsible
                  key={index}
                  defaultValue={index === 0 ? `item-${index}` : undefined}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  )
}
