import { SectionLayout } from '@/components/layout/section-layout'
import { Heading } from '@/components/ui/heading'
import Image from 'next/image'

const COMMITTEES = [
  {
    name: 'Kaishen A. Flores',
    position: 'Overall Head',
    image: '/images/committees/OverallHead.jpg',
  },
  {
    name: 'Hendrick Paul Castro',
    position: 'Overall VP Head',
    image: '/images/committees/OverallVPHead.jpg',
  },
]

const Committees = () => {
  return (
    <div className="relative overflow-x-hidden">
      <SectionLayout>
        <div className="py-12">
          <Heading text="Team behind GCRAIT" />
          <p className="mx-auto text-justify font-dmSans font-light tracking-tighter text-black lg:w-8/12 lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi
            dui, ullamcorper et cursus et, pretium vitae diam. Suspendisse quis
            quam sapien. Etiam tempor, tellus vel laoreet euismod, mi urna
            vehicula sapien, vitae commodo augue urna ut felis. Fusce et ante
            faucibus, imperdiet nulla id, sagittis arcu.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          {COMMITTEES.map((committee) => (
            <div
              key={committee.position}
              className="relative flex w-full flex-col overflow-hidden rounded-3xl border md:h-80 md:w-80"
            >
              <Image
                src={committee.image}
                alt={`Photo of ${committee.name}`}
                width={800}
                height={800}
                className="h-80 object-cover brightness-150"
              />
              <div className="absolute bottom-4 flex h-max w-[80%] flex-col rounded-e-3xl bg-slate-900 py-4 text-white">
                <h2 className="m-auto">{committee.name}</h2>
                <p className="m-auto">{committee.position}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  )
}

export default Committees
