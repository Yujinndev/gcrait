'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { data } from '@/app/constants'
import { SectionLayout } from '@/components/layout/section-layout'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowUpLeft } from 'lucide-react'
import { SectionParagraph } from '@/components/layout/section-paragraph'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { BentoGrid, BentoGridItem } from '@/components/layout/bento-grid'

type KeyValuePair = { [key: string]: string }

type PenaltyCategory = {
  category: string
  details: {
    title?: string
    description: string
  }[]
}

type Competition = {
  title: string
  images: string[]
  overview: string
  robotRequirement: string
  maxPlayers: number | string
  category: string
  CTA: { text: string; href: string }
  table?: Partial<KeyValuePair>[]
  generalRules: string[]
  penalties: PenaltyCategory[]
}

const CompetitionTabs = () => {
  const router = useRouter()
  const competitions = data?.COMPETITONS?.items
  const [selectedTab, setSelectedTab] = useState<Competition>(competitions[0])

  return (
    <SectionLayout>
      <div className="relative space-y-4">
        <div className="flex w-full items-center justify-between gap-3 rounded-xl border bg-primary px-4 py-2">
          <Button
            variant="secondary"
            className="absolute hidden h-10 w-10 space-x-2 rounded-full font-play text-sm lg:flex"
            asChild
          >
            <Button onClick={() => router.back()}>
              <ArrowUpLeft className="flex-shrink-0" />
            </Button>
          </Button>
          <div className="flex w-full items-center justify-center px-4 py-2 lg:gap-3">
            {competitions?.map((competition, index) => (
              <div key={index} className="relative">
                <Button
                  variant="link"
                  className={cn(
                    'rounded-xl font-play text-base text-white lg:text-lg',
                    {
                      'font-bold hover:no-underline':
                        selectedTab === competition,
                    }
                  )}
                  onClick={() => setSelectedTab(competition)}
                >
                  {competition.title}
                </Button>
                {selectedTab === competition && (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                    className="absolute inset-x-0 bottom-0 m-auto mt-[2px] h-[2px] w-1/2 rounded-full bg-green-300"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <CompetitionPaper competition={selectedTab} />
      </div>
    </SectionLayout>
  )
}

const CompetitionPaper = ({ competition }: { competition: Competition }) => {
  return (
    <div className="space-y-6 rounded-xl bg-white p-4 md:p-8 lg:space-y-10 lg:border lg:border-gray-100 lg:p-16 lg:shadow-sm">
      <SectionParagraph title={`Mechanics for ${competition.title}`}>
        <Button
          className="w-full lg:absolute lg:-top-2 lg:right-0 lg:w-max"
          asChild
        >
          <Link
            href="https://forms.gle/EZDgpBEDpJwg1E767"
            target="_blank"
            className="ml-auto text-justify text-lg text-primary lg:text-left"
          >
            Pre-Register here for Competitions
          </Link>
        </Button>

        <div className="flex justify-center py-4" data-aos="zoom-out-left">
          <BentoGrid className="w-full lg:auto-rows-[20rem]">
            {competition.images.map((item, i) => (
              <BentoGridItem
                key={i}
                className={cn({ 'col-span-2': i === 0 || i === 3 })}
                thumbnail={item}
              />
            ))}
          </BentoGrid>
        </div>
        <div className="grid gap-4 pb-6 lg:grid-cols-7">
          <h3 className="w-full text-xl text-primary md:text-2xl lg:w-40">
            Overview:
          </h3>
          <p className="text-justify lg:col-span-6">{competition.overview}</p>
        </div>

        <div className="ml-auto overflow-hidden rounded-lg font-play lg:w-[85%]">
          <Table className="border text-lg">
            <TableBody>
              {competition.table?.map((obj, index) => (
                <TableRow key={index}>
                  {Object.entries(obj).map(([key, value], i) => (
                    <React.Fragment key={i}>
                      <TableCell className="border">{key}:</TableCell>
                      <TableCell className="border text-neutral-700">
                        {value}
                      </TableCell>
                    </React.Fragment>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="grid gap-4 py-6 lg:grid-cols-7">
          <h3 className="w-full text-xl text-primary md:text-2xl lg:w-40">
            General Rules:
          </h3>
          <ul className="text-justify lg:col-span-6">
            {competition.generalRules?.map((rule, index) => (
              <li key={index} className="flex gap-3">
                <b>{index + 1}.</b>
                <p>{rule}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 py-6 lg:grid-cols-7">
          <h3 className="w-full text-xl text-primary md:text-2xl lg:w-40">
            Penalties:
          </h3>
          <div className="text-justify lg:col-span-6">
            {competition?.penalties?.map((penalty, penaltyIndex) => (
              <div key={penaltyIndex} className="space-y-4 pb-4">
                <h2 className="text-base font-semibold">{penalty.category}</h2>

                <ul className="list-disc space-y-2 pl-5">
                  {penalty.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-md text-justify">
                      {'title' in detail && detail.title && (
                        <span className="font-semibold">{detail.title}: </span>
                      )}
                      {detail.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionParagraph>
    </div>
  )
}

export default CompetitionTabs
