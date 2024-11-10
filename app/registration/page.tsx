import { SectionLayout } from '@/components/layout/section-layout'
import HeaderPage from '@/components/ui/header-page'

const Registration = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <HeaderPage
        title="Unlock the Full GCRAIT Experience"
        subheading="Your gateway to impactful sessions, competitions, and collaboration;  - secure your place today."
      />

      <SectionLayout>
        <div className="space-y-6 border border-gray-50 p-8 shadow-sm lg:space-y-10 lg:p-16">
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
              <div className="pb-5">
                <p className="pb-2">
                  There will be (3) Categories in this competition:
                </p>
                <ul className="list-disc pl-5">
                  <li className="text-md font-semibold">RoboTalks</li>
                  <li className="text-md font-semibold">Mobots Race</li>
                  <li className="text-md font-semibold">
                    Battle Bots/Sumo Bots
                  </li>
                </ul>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Competition
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Robot Per Team
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Max Players Per Team
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4">RoboTalks</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        prototype/actual project
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">5 members</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        K12 to College Students
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4">
                        Mobot Race
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">1 Robot</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        1-3 members
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        K12 to College Students
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4">SumoBot</td>
                      <td className="whitespace-nowrap px-6 py-4">1 Robot</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        1-3 members
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        K12 to College Students
                      </td>
                    </tr>
                  </tbody>
                </table>
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
