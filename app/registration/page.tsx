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
import { ArrowRight, Dot, Download } from 'lucide-react'

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
                December 10, 2024, 7:00 AM - 5:00 PM
              </p>
            </div>

            <div className="flex flex-col gap-2 pb-4 lg:flex-row">
              <h3 className="space-y-2 text-xl lg:w-1/5">Venue:</h3>
              <p className="text-justify lg:text-left">
                LORMA Colleges CLI Urbiztondo, San Juan, La Union
              </p>
            </div>

            <div className="py-4">
              <Button
                className="w-full border-primary"
                variant="outline"
                asChild
              >
                <Link
                  href={'/docs/GCRAIT2024_Programme.pdf'}
                  target="_blank"
                  className="w-full space-x-3"
                  download={true}
                >
                  <Download /> <span>Download Program Flow</span>
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl border bg-slate-100 p-8 py-4">
              <h3 className="space-y-2 text-xl">Pre-Register Here:</h3>
              <div className="flex flex-col gap-2 py-4 lg:flex-row">
                <div className="w-full">
                  <h3 className="font-sm space-y-2 font-sans lg:text-xl">
                    For Attendees:
                  </h3>
                  <Link
                    href="https://tinyurl.com/3mdyztvd"
                    target="_blank"
                    className="font-base w-full text-justify font-play text-primary underline underline-offset-8 lg:text-left lg:text-2xl"
                  >
                    https://tinyurl.com/3mdyztvd
                  </Link>
                </div>
                <div className="w-full">
                  <h3 className="font-sm space-y-2 font-sans lg:text-xl">
                    For Competitions:
                  </h3>
                  <Link
                    href="https://tinyurl.com/2rp6txt5"
                    target="_blank"
                    className="font-base w-full text-justify font-play text-primary underline underline-offset-8 lg:text-left lg:text-2xl"
                  >
                    https://tinyurl.com/2rp6txt5
                  </Link>
                </div>
              </div>
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
                  <TableRow>
                    <TableCell colSpan={4}>
                      <Button
                        className="w-full border-primary"
                        variant="outline"
                        asChild
                      >
                        <Link
                          href={
                            '/docs/GCRAIT_2024_Robotics_Competetion_Mechanics.pdf'
                          }
                          target="_blank"
                          className="w-full space-x-3"
                          download={true}
                        >
                          <Download /> <span>Download Full Mechanics</span>
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
              <b>December 05, 2024.</b>
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
                    <h3 className="text-lg">
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
