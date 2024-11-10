'use client'

import React from 'react'
import Image from 'next/image'
import data from '@/data/data.json'
import { ArrowUpRight } from 'lucide-react'
import { useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { GeminiEffect } from '@/components/ui/gemini-effect'

const HeroSection = () => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2])
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2])
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2])
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2])
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2])

  return (
    <div
      className="hero relative h-[200vh] w-full overflow-clip bg-gradient-to-b from-[#030018] via-[#02183c] via-80% to-white pb-24 dark:border dark:border-white/[0.1] lg:pb-10"
      ref={ref}
    >
      <GeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      >
        <div className="mx-auto flex max-w-screen-2xl flex-col justify-center space-y-6 p-6 pt-32 md:px-16 md:pt-[88px] lg:pt-4">
          <div className="z-30 flex items-center justify-center gap-2 pb-4 pt-8">
            {data?.LOGOS?.map((logo, index) => (
              <Image
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                width={800}
                height={800}
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-delay={index * 250}
                className="h-[4.5rem] w-[4.5rem] rounded-full border-[2px] border-[#DDDDDD] md:h-28 md:w-28"
              />
            ))}
          </div>

          <Heading
            text={`${data?.BRAND?.acronym}:`}
            className="w-max border-[5px] border-white/25"
          />
          <h1
            className="text-center text-white"
            data-aos="fade-down"
            data-aos-delay="1000"
          >
            Global Conference on{' '}
            <span className="text-[#FED049]">Robotics</span> and{' '}
            <span className="text-[#FED049]">
              Artificial Intelligence Technologies
            </span>
          </h1>
          <p
            className="relative text-center font-dmSans text-lg font-light tracking-tighter lg:text-xl xl:text-2xl"
            data-aos="fade-down"
            data-aos-delay="1250"
          >
            {data?.BRAND?.description}
          </p>

          <Button
            variant="secondary"
            className="mx-auto w-max space-x-3 rounded-full bg-white p-4 px-8 transition-all duration-700 hover:drop-shadow-[0_0_7px_rgb(110,231,183,.75)] lg:px-10 lg:py-6"
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="1500"
          >
            <span className="text-[14px] text-black">
              {data?.BRAND?.CTA?.text}
            </span>
            <ArrowUpRight color="black" size={18} />
          </Button>
        </div>
      </GeminiEffect>
    </div>
  )
}

export default HeroSection
