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
              <div className="space-y-1 p-4">
                <p className="pb-2 text-lg font-bold text-[#02183c]">Welcome</p>
                {data?.COMMITTEES?.organizing.welcome?.map((welcome, index) => (
                  <div key={index} className="">
                    <div className="text-left text-sm md:text-base">
                      {welcome.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-1 p-4">
                <p className="pb-2 text-lg font-bold text-[#02183c]">
                  Communications
                </p>
                {data?.COMMITTEES?.organizing.communications?.map(
                  (communications, index) => (
                    <div key={index} className="">
                      <div className="text-left text-sm md:text-base">
                        {communications.name}
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="space-y-1 p-4">
                <p className="pb-2 text-lg font-bold text-[#02183c]">Media</p>
                {data?.COMMITTEES?.organizing.media?.map((media, index) => (
                  <div key={index} className="">
                    <div className="text-left text-sm md:text-base">
                      {media.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-1 p-4">
                <p className="pb-2 text-lg font-bold text-[#02183c]">Tech</p>
                {data?.COMMITTEES?.organizing.tech?.map((tech, index) => (
                  <div key={index} className="">
                    <div className="text-left text-sm md:text-base">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-1 p-4">
                <p className="pb-2 text-lg font-bold text-[#02183c]">
                  Graphics
                </p>
                {data?.COMMITTEES?.organizing.graphics?.map(
                  (graphics, index) => (
                    <div key={index} className="">
                      <div className="text-left text-sm md:text-base">
                        {graphics.name}
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="space-y-1 p-4">
                <p className="pb-2 text-lg font-bold text-[#02183c]">Audit</p>
                {data?.COMMITTEES?.organizing.audit?.map((audit, index) => (
                  <div key={index} className="">
                    <div className="text-left text-sm md:text-base">
                      {audit.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  )
}

export default Committees
