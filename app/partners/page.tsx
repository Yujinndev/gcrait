import HeaderPage from '@/components/ui/header-page'
import { data } from '../constants'
import Image from 'next/image'
import { SectionLayout } from '@/components/layout/section-layout'

const Partners = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <HeaderPage
        title="A Stronger Event, Thanks to Our Partners"
        subheading="In partnership with visionary organizations, we pave the way for progress. Their contributions enhance the GCRAIT experience for everyone involved."
      />

      <SectionLayout className="lg:py-0">
        <div className="flex flex-col items-center justify-center pt-8">
          <p className="text-left font-play text-2xl font-bold text-gray-800">
            Our Major Collaborators
          </p>

          <div className="grid gap-10 py-4 md:grid-cols-3 lg:gap-8">
            {data?.PARTNERS?.items.collaborators?.map((collaborator, index) => (
              <div key={index} className="">
                <Image
                  src={collaborator.image}
                  alt={collaborator.name}
                  width={800}
                  height={800}
                  className="h-80 bg-[#02183c] object-contain p-4"
                />
                <div className="p-2 pt-8">
                  <div className="text-xl font-bold text-[#02183c]">
                    {collaborator.name}
                  </div>
                  <br />
                  <div className="text-md">{collaborator.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-center space-y-4 rounded-lg py-8">
            <p className="text-left font-play text-2xl font-bold text-[#02183c]">
              Our Partners
            </p>
            <div className="m-3/5 grid gap-10 py-4 pb-20 md:grid-cols-2 lg:gap-8">
              {data?.PARTNERS?.items.partners?.map((partner, index) => (
                <div key={index} className="">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={800}
                    height={800}
                    className="w-80 bg-white object-contain p-4"
                  />
                  <div className="p-2 pt-8">
                    <div className="text-center text-xl font-bold text-[#02183c]">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center space-y-2 rounded-lg">
            <p className="space-y-4 text-left font-play text-2xl font-bold text-gray-800">
              Our Sponsors
            </p>
            <div className="m-3/5 grid gap-10 py-4 md:grid-cols-2 lg:gap-8">
              {data?.PARTNERS?.items.sponsors?.map((sponsor, index) => (
                <div key={index} className="">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={800}
                    height={800}
                    className="w-80 bg-white object-contain p-4"
                  />
                  <div className="p-2 pt-8">
                    <div className="text-center text-xl font-bold text-[#02183c]">
                      {sponsor.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default Partners
