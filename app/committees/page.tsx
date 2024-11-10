import { SectionLayout } from '@/components/layout/section-layout'
import { Heading } from '@/components/ui/heading'
import data from '@/data/data.json'
import CommitteeCard from '@/components/ui/committee-card'
import HeaderPage from '@/components/ui/header-page'

const Committees = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <HeaderPage
        title={data?.COMMITTEES?.heading}
        subheading={data?.COMMITTEES?.subheading}
      />

      <SectionLayout>
        <div className="py-12">
          <div className="flex justify-between gap-x-16">
            <Heading text="The Organizing Commitee" />
          </div>
          <div className="grid gap-8 py-4 md:grid-cols-2">
            {data?.COMMITTEES?.organizing?.heads?.map((comm) => (
              <CommitteeCard
                key={comm.position}
                committee={comm}
                className="w-full"
              />
            ))}
          </div>

          <div className="grid gap-8 py-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {data?.COMMITTEES?.organizing?.subheads?.map((comm) => (
              <CommitteeCard
                key={comm.position}
                committee={comm}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default Committees
