import Link from 'next/link'
import HeaderPage from '@/components/ui/header-page'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { data } from '@/app/constants'
import { Button } from '@/components/ui/button'
import { SectionLayout } from '@/components/layout/section-layout'
import { SectionParagraph } from '@/components/layout/section-paragraph'
import { ArrowRight, Dot } from 'lucide-react'

const Registration = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <HeaderPage
        title="Unlock the Full GCRAIT Experience"
        subheading="Your gateway to impactful sessions, competitions, and collaboration; - secure your place today."
      />

      <SectionLayout>
        <div className="space-y-6 rounded-xl bg-white p-4 md:p-8 lg:space-y-10 lg:border lg:border-gray-100 lg:p-16 lg:shadow-sm">
          <SectionParagraph title="I. Venue and Schedule">
            <div className="flex flex-col gap-2 lg:flex-row">
              <h3 className="space-y-2 text-xl lg:w-1/5">Date and Time:</h3>
              <p className="text-justify lg:text-left">
                December 10, 2024, 8:00 AM - 5:00 PM
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:flex-row">
              <h3 className="space-y-2 text-xl lg:w-1/5">Venue:</h3>
              <p className="text-justify lg:text-left">
                LORMA Colleges CLI Urbiztondo, San Juan, La Union
              </p>
            </div>
            <div className="flex flex-col gap-2 py-2 lg:flex-row">
              <Button asChild>
                <Link
                  href="https://forms.gle/qo5GTmgUttoWCoi57"
                  target="_blank"
                  className="w-full text-justify text-base lg:text-left"
                >
                  Pre-Register here for Attendees
                </Link>
              </Button>
              <Button asChild>
                <Link
                  href="https://forms.gle/EZDgpBEDpJwg1E767"
                  target="_blank"
                  className="w-full text-justify text-base lg:text-left"
                >
                  Pre-Register here for Participants
                </Link>
              </Button>
            </div>
          </SectionParagraph>

          <SectionParagraph title="II. Categories and Level of Competition">
            <p className="pb-2">
              There will be <b>(3) Categories</b> in this competition:
            </p>
            <div className="overflow-x-auto rounded-lg">
              <Table className="divide-y divide-gray-200 border">
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Competition
                    </TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Robot Per Team
                    </TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Max Members
                    </TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                      Category
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-200 bg-white">
                  {data?.COMPETITONS?.items?.map((competition) => (
                    <TableRow key={competition.title}>
                      <TableCell className="px-6 py-4">
                        <h3>{competition.title}</h3>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        {competition.robotRequirement}
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        {competition.maxPlayers}
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        {competition.category}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={4}>
                      <Button className="w-full" asChild>
                        <Link
                          href={'/registration/mechanics'}
                          className="w-full"
                        >
                          View Full mechanics
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </SectionParagraph>

          <SectionParagraph title="III. Submission of Entry Forms">
            <p className="text-justify lg:text-left">
              The deadline for the submission of entry forms is on{' '}
              <b>November 29, 2024. </b>
            </p>
          </SectionParagraph>

          {data?.REGISTRATION?.sections?.map((section, index) => (
            <SectionParagraph key={index} title={section.name}>
              <ul className="list-decimal space-y-4 pl-5">
                {section?.details?.map((detail, index) => (
                  <li
                    key={index}
                    className="text-md text-justify lg:text-left"
                    style={{ listStyleType: 'upper-alpha' }}
                    dangerouslySetInnerHTML={{
                      __html: detail.highlighted?.length
                        ? detail.highlighted.reduce(
                            (acc, highlight) =>
                              acc.replace(highlight, `<b>${highlight}</b>`),
                            detail.text
                          )
                        : detail.text,
                    }}
                  />
                ))}
              </ul>

              <div className="space-y-4 md:pl-8">
                {section?.others?.map((award, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl">
                      <b>
                        {index + 1}. {award.title}:
                      </b>
                    </h3>

                    <div className="space-y-1 pl-8">
                      {award.items.map((item, itemIndex) =>
                        typeof item === 'string' ? (
                          <p
                            key={itemIndex}
                            className="text-md flex items-center gap-2 text-justify"
                          >
                            <ArrowRight
                              size={14}
                              className="flex-shrink-0 text-primary"
                            />
                            {item}
                          </p>
                        ) : (
                          Object.entries(item).map(
                            ([key, values], nestedIndex) => (
                              <div
                                key={`${itemIndex}-${nestedIndex}`}
                                className="text-md"
                              >
                                <p className="flex items-center gap-2 text-justify">
                                  <ArrowRight
                                    size={14}
                                    className="flex-shrink-0 text-primary"
                                  />
                                  {key}:
                                </p>
                                <div className="space-y-1 pl-8">
                                  {values.map((subItem, subIndex) => (
                                    <p
                                      key={subIndex}
                                      className="flex items-center gap-2"
                                    >
                                      <Dot
                                        size={20}
                                        className="flex-shrink-0 text-primary"
                                      />
                                      {subItem}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )
                          )
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SectionParagraph>
          ))}
        </div>
      </SectionLayout>
    </div>
  )
}

export default Registration
