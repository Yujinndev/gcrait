import { SectionLayout } from '@/components/layout/section-layout'
import { Heading } from '@/components/ui/heading'
import data from '@/data/data.json'
import CommitteeCard from '@/components/ui/committee-card'

const Committees = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <SectionLayout>
        <div className="space-y-4 py-12" data-aos="fade-down">
          <h1 className="text-center text-black">
            {data?.COMMITTEES?.heading}
          </h1>
          <p className="m-auto w-2/3 text-center text-base font-light lg:text-xl lg:leading-relaxed">
            {data?.COMMITTEES?.subheading}
          </p>
        </div>

        <div className="py-12">
          <div className="flex justify-between gap-x-16">
            <Heading text="The Organizing Commitee" />
          </div>
          <div className="grid grid-cols-2 gap-8 py-4">
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
