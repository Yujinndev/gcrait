import { SectionLayout } from '@/components/layout/section-layout'
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

const Registration = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <HeaderPage
        title="Unlock the Full GCRAIT Experience"
        subheading="Your gateway to impactful sessions, competitions, and collaboration;  - secure your place today."
      />

      <SectionLayout>
        <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:space-y-10 lg:p-16">
          <div>
            <h1 className="text-[21px] font-semibold text-[#02183c] md:text-[24px]">
              I. Venue and Schedule
            </h1>
            <hr className="mt-2 border-t border-gray-300" />
            <div className="text-md space-y-2 py-5 lg:pl-4 lg:text-lg">
              <p>
                <b>Competition: </b>December 10, 2024, 8:00 AM - 5:00 PM
              </p>
              <p>
                <b>Venue: </b>LORMA Colleges CLI Urbiztondo, San Juan, La Union
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[21px] font-semibold text-[#02183c] md:text-[24px]">
              II. Categories and Level of Competition
            </h1>
            <hr className="mt-2 border-t border-gray-300" />
            <div className="text-md space-y-2 py-5 lg:pl-4 lg:text-lg">
              <p className="pb-2">
                There will be <span className="font-bold">(3) Categories</span>{' '}
                in this competition:
              </p>
              <ul className="list-disc pl-5">
                {data?.COMPETITONS?.items?.map((competition) => (
                  <li
                    key={competition.title}
                    className="text-md font-play font-semibold"
                  >
                    {competition.title}
                  </li>
                ))}
              </ul>

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
                        Max Players Per Team
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
                          <h2>{competition.title}</h2>
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
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[21px] font-semibold text-[#02183c] md:text-[24px]">
              III. Submission of Entry Forms
            </h1>
            <hr className="mt-2 border-t border-gray-300" />
            <div className="text-md space-y-2 py-5 lg:pl-4 lg:text-lg">
              <p>
                The deadline for the submission of entry forms is on{' '}
                <b>November 29, 2024. </b>
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-[21px] font-semibold text-[#02183c] md:text-[24px]">
              IV. Qualified Participants
            </h1>
            <hr className="mt-2 border-t border-gray-300" />
            <div className="text-md space-y-2 py-5 lg:pl-4 lg:text-lg">
              <ul className="list-decimal space-y-4 pl-5">
                <li className="text-md">
                  The Global Conference on Robotics and Artificial Intelligence
                  Technologies competitions are{' '}
                  <b>open to all Schools at any level</b>
                </li>
                <li className="text-md">
                  The contestants are required to wear their school uniforms,
                  while coaches are required to wear formal attire.
                </li>
                <li className="text-md">
                  Each team must designate a team leader who will be the main
                  point of contact during the competition.
                </li>
                <li className="text-md">
                  All team members must be present during the competition and
                  registration.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-[21px] font-semibold text-[#02183c] md:text-[24px]">
              V. Competition Proper and
              <span className="block pl-6 lg:inline lg:pl-0">
                {' '}
                General Mechanics
              </span>
            </h1>
            <hr className="mt-2 border-t border-gray-300" />
            <div className="text-md space-y-2 py-5 lg:pl-4 lg:text-lg">
              <ul className="list-decimal space-y-4 pl-5">
                <li className="text-md">
                  Participating Teams must check in at the registration booth at
                  least 30 minutes before the competition. The contest will
                  start exactly at <b>1:30 PM</b> on <b>December 10, 2024</b>.
                  Late Participants will be disqualified or forfeited from the
                  competition.
                </li>
                <li className="text-md">
                  Only registered participants are allowed to participate in the
                  competition area.
                </li>
                <li className="text-md">
                  Coaches and other spectators must stay in the audience area.
                </li>
                <li className="text-md">
                  Coaches are not allowed to help the participants at the game
                  during the competition.
                </li>
                <li className="text-md">
                  Sumobot Game Format: Round Robin will be used during the
                  elimination. Knockout will be used during the semi-finals and
                  finals.
                </li>
                <li className="text-md">
                  Sportsmanship conduct is expected from players.
                </li>
                <li className="text-md">
                  Any misconduct, insults, foul language, or intentional action
                  to harm the opponents or robot shall be disqualified.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default Registration
