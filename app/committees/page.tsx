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

      <SectionLayout>
        <div className="py-12">
          <Heading text="The Organizing Commitee" />

          <div className="grid gap-3 py-4 md:grid-cols-2 lg:gap-8">
            {data?.COMMITTEES?.organizing?.heads?.map((committee, index) => (
              <CommitteeCard key={index} committee={committee} />
            ))}
          </div>

          <div className="grid gap-3 py-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {data?.COMMITTEES?.organizing?.subheads?.map((committee, index) => (
              <CommitteeCard key={index} committee={committee} />
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default Committees
