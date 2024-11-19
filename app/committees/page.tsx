import { SectionLayout } from '@/components/layout/section-layout'
import { Heading } from '@/components/ui/heading'
import { data } from '@/app/constants'
import CommitteeCard from '@/components/ui/committee-card'
import HeaderPage from '@/components/ui/header-page'

const Committees = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <HeaderPage
        title={data?.COMMITTEES?.heading}
        subheading={data?.COMMITTEES?.subheading}
      />
      <div className="bg-white">
        <SectionLayout>
          <div className="py-2">
            <Heading text="The Organizing Commitee" />

            <div className="grid gap-3 py-4 md:grid-cols-2 lg:gap-8">
              {data?.COMMITTEES?.organizing?.heads?.map((committee, index) => (
                <CommitteeCard key={index} committee={committee} />
              ))}
            </div>

            <div className="grid gap-3 py-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
              {data?.COMMITTEES?.organizing?.subheads?.map(
                (committee, index) => (
                  <CommitteeCard key={index} committee={committee} />
                )
              )}
            </div>

            <Heading text="Commitee Members" className="mt-10" />
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:ml-24 lg:gap-8 xl:grid-cols-3">
              {data?.COMMITTEES?.organizing?.members?.map((member, index) => (
                <div key={index} className="space-y-1 p-4">
                  <p className="pb-2 text-lg font-bold text-[#02183c]">
                    {member.type}
                  </p>
                  {member?.users?.map((user) => (
                    <div key={user} className="text-left text-sm md:text-base">
                      {user}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  )
}

export default Committees
