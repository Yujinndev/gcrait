'use client'

import React, { useState } from 'react'
import { data } from '@/app/constants'
import { SectionLayout } from '@/components/layout/section-layout'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowUpLeft } from 'lucide-react'
import Link from 'next/link'
import { SectionParagraph } from '@/components/layout/section-paragraph'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

type KeyValuePair = { [key: string]: string }
type Competition = {
  title: string
  overview: string
  robotRequirement: string
  maxPlayers: number | string
  category: string
  CTA: { text: string; href: string }
  table?: Partial<KeyValuePair>[]
  generalRules: string[]
  deductions?: Partial<KeyValuePair>[]
}

const CompetitionTabs = () => {
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
            <Link href={'/registration'}>
              <ArrowUpLeft className="flex-shrink-0" />
            </Link>
          </Button>
          <div className="flex w-full items-center justify-center px-4 py-2 lg:gap-3">
            {competitions?.map((competition, index) => (
              <div key={index} className="relative">
                <Button
                  variant="link"
                  className={cn(
                    'rounded-xl font-play text-base text-white lg:text-lg',
                    {
                      'font-bold text-green-500 hover:no-underline':
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
        <div className="grid gap-4 pb-6 lg:grid-cols-7">
          <h3 className="text-lg text-primary md:text-xl lg:w-40 lg:text-2xl">
            Overview:
          </h3>
          <p className="col-span-6 text-justify">{competition.overview}</p>
        </div>

        <div className="ml-auto overflow-hidden rounded-lg font-play lg:w-[85%]">
          <Table className="border text-lg">
            <TableBody>
              {competition.table?.map((obj, index) => (
                <TableRow key={index}>
                  {Object.entries(obj).map(([key, value], i) => (
                    <React.Fragment key={i}>
                      <TableCell className="border">{key}:</TableCell>{' '}
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
          <h3 className="text-lg text-primary md:text-xl lg:w-40 lg:text-2xl">
            General Rules:
          </h3>
          <ul className="col-span-6 text-justify">
            {competition.generalRules?.map((rule, index) => (
              <li key={index} className="flex gap-3">
                <b>{index + 1}.</b>
                <p>{rule}</p>
              </li>
            ))}
          </ul>
        </div>

        {competition.deductions && (
          <div className="grid gap-4 py-6 lg:grid-cols-7">
            <h3 className="text-lg text-primary md:text-xl lg:w-40 lg:text-2xl">
              Deduction:
            </h3>
            <div className="col-span-6 text-justify">
              {competition.deductions?.map((obj, index) => (
                <React.Fragment key={index}>
                  {Object.entries(obj).map(([key, value], i) => (
                    <p key={i}>
                      <b>{key}:</b> <span>{value}</span>
                    </p>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </SectionParagraph>
    </div>
  )
}

export default CompetitionTabs
