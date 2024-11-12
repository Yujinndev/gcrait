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
              <h3 className="space-y-2 text-xl lg:w-1/5">Competition:</h3>
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

          <SectionParagraph title="IV. Qualified Participants">
            <ul className="list-decimal space-y-4 pl-5">
              <li className="text-md text-justify lg:text-left">
                The Global Conference on Robotics and Artificial Intelligence
                Technologies competitions are{' '}
                <b>open to all Schools at any level</b>
              </li>
              <li className="text-md text-justify lg:text-left">
                The contestants are required to wear their school uniforms,
                while coaches are required to wear formal attire.
              </li>
              <li className="text-md text-justify lg:text-left">
                Each team must designate a team leader who will be the main
                point of contact during the competition.
              </li>
              <li className="text-md text-justify lg:text-left">
                All team members must be present during the competition and
                registration.
              </li>
            </ul>
          </SectionParagraph>

          <SectionParagraph title="V. Competition Proper and General Mechanics">
            <ul className="list-decimal space-y-4 pl-5">
              <li className="text-md text-justify lg:text-left">
                Participating Teams must check in at the registration booth at
                least 30 minutes before the competition. The contest will start
                exactly at <b>1:30 PM</b> on <b>December 10, 2024</b>. Late
                Participants will be disqualified or forfeited from the
                competition.
              </li>
              <li className="text-md text-justify lg:text-left">
                Only registered participants are allowed to participate in the
                competition area.
              </li>
              <li className="text-md text-justify lg:text-left">
                Coaches and other spectators must stay in the audience area.
              </li>
              <li className="text-md text-justify lg:text-left">
                Coaches are not allowed to help the participants at the game
                during the competition.
              </li>
              <li className="text-md text-justify lg:text-left">
                Sumobot Game Format: Round Robin will be used during the
                elimination. Knockout will be used during the semi-finals and
                finals.
              </li>
              <li className="text-md text-justify lg:text-left">
                Sportsmanship conduct is expected from players.
              </li>
              <li className="text-md text-justify lg:text-left">
                Any misconduct, insults, foul language, or intentional action to
                harm the opponents or robot shall be disqualified.
              </li>
            </ul>
          </SectionParagraph>
        </div>
      </SectionLayout>
    </div>
  )
}

export default Registration
