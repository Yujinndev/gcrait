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

        <div className="flex flex-col items-center justify-center gap-y-3 py-5 lg:flex-row lg:gap-16">
          <p className="m-auto w-5/6 text-justify text-base font-normal lg:w-3/6 lg:text-xl lg:leading-relaxed">
            The{' '}
            <span className="rounded-lg px-2 font-play font-bold">
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
            <br />
            <br />
            <span className="rounded-lg font-play font-bold">GCRAIT</span>{' '}
            includes a variety of sessions such as paper presentations, poster
            exhibitions, and live demonstrations, providing a holistic view of
            the latest advancements and applications. Participants can expect to
            gain a deeper understanding of the latest trends, challenges, and
            ethical considerations, with a special focus on the integration of
            robotics and AI into various sectors, including healthcare,
            automotive, manufacturing, education, and beyond.
          </p>
          <div className="flex w-5/6 justify-center md:w-full lg:w-2/5">
            <Image
              src={data?.BRAND?.logo}
              alt="ROBOT"
              width={800}
              height={800}
              className="h-4/5 w-auto lg:h-[30rem] lg:w-[30rem]"
            />
          </div>
        </div>
      </SectionLayout>

      <div className="mx-auto max-w-screen-xl">
        <div className="px-6 py-12">
          <Heading text="Call for Paper Abstract" />
          <p className="m-auto my-8 w-5/6 text-justify text-base font-normal md:my-0 md:text-center lg:w-5/6 lg:text-xl lg:leading-relaxed">
            We invite high-quality research contributions in the fields of
            Information Technology, Computer Science, and Computer Engineering.
            Submissions are welcome from both academia and industry, encouraging
            diverse insights and innovative approaches.
          </p>
        </div>

        <div className="-mt-10 px-6 md:mt-0">
          <div className="flex h-auto w-auto flex-col items-center gap-y-3 lg:flex-row lg:gap-8">
            {data?.CPA?.map((item, index) => (
              <div
                key={index}
                className="w-5/6 overflow-hidden rounded-lg border border-slate-300 md:w-1/3"
              >
                <Image
                  src={data?.BRAND?.logo}
                  alt="LOGO"
                  width={600}
                  height={600}
                />

                <div className="p-8 text-start font-dmSans tracking-tighter text-black">
                  <p className="mb-3 font-bold">{item?.subheading}</p>
                  {item?.topics?.map((topic, index) => (
                    <li
                      key={index}
                      className="text-start font-dmSans font-light tracking-tighter text-black"
                    >
                      {topic}
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionLayout>
          <Heading text="Frequently Asked Questions" />
          <p className="m-auto my-8 w-5/6 text-justify text-base font-normal md:my-0 md:text-center lg:w-5/6 lg:text-xl lg:leading-relaxed">
            These are some of the common questions that participants have about
            the conference. If you have any other queries, feel free to reach
            out to us.
          </p>

          <div className="flex h-auto w-auto flex-col items-center gap-y-3 py-8 lg:flex-row lg:gap-8">
            <div className="w-5/6 overflow-hidden rounded-lg border border-slate-300 md:w-auto lg:w-1/3">
              <Image
                src={data?.BRAND?.logo}
                width={800}
                height={800}
                alt="LOGO"
              />
            </div>

            <div className="flex w-5/6 flex-col gap-y-5 text-base font-normal md:w-auto lg:w-2/3">
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
    </div>
  )
}
