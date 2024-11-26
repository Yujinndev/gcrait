import HeaderPage from '@/components/ui/header-page'
import { data } from '@/app/constants'
import { SectionLayout } from '@/components/layout/section-layout'
import PartnerCard from '@/components/ui/partner-card'
import { Heading } from '@/components/ui/heading'

const Partners = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <HeaderPage
        title="A Stronger Event, Thanks to Our Partners"
        subheading="In partnership with visionary organizations, we pave the way for progress. Their contributions enhance the GCRAIT experience for everyone involved."
      />

      <SectionLayout className="lg:py-0">
        <div className="flex flex-col items-center justify-center pt-8">
          <Heading
            text="Our Major Collaborators"
            className="text-left font-play text-2xl font-bold text-gray-800"
          />

          <div className="grid gap-10 py-4 md:grid-cols-3 lg:gap-8">
            {data?.PARTNERS?.items.collaborators?.map((collaborator, index) => (
              <PartnerCard key={index} partner={collaborator} />
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center space-y-4 rounded-lg py-8">
          <Heading
            text="Our Partners"
            className="text-left font-play text-2xl font-bold text-gray-800"
          />

          <div className="grid gap-10 py-4 md:grid-cols-3 lg:gap-8">
            {data?.PARTNERS?.items.partners?.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-2 rounded-lg">
          <Heading
            text="Our Sponsors"
            className="text-left font-play text-2xl font-bold text-gray-800"
          />
          <div className="m-3/5 grid gap-10 py-4 md:grid-cols-2 lg:gap-8">
            {data?.PARTNERS?.items.sponsors?.map((sponsor, index) => (
              <PartnerCard key={index} partner={sponsor} />
            ))}
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default Partners
