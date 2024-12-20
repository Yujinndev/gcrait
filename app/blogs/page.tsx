import { SectionLayout } from '@/components/layout/section-layout'
import HeaderPage from '@/components/ui/header-page'
import Image from 'next/image'

const Blogs = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <HeaderPage
        title="Innovation in Action: GCRAIT"
        subheading="Stories of Excellence, Collaboration, and Groundbreaking Ideas"
      />

      <SectionLayout className="space-y-4 lg:py-8">
        <Image
          src="/images/OVERALLCOMMITTEES.jpg"
          alt="OVERALLCOMMITTEES"
          width={1920}
          height={1080}
          className="w-full rounded shadow"
        />
        <p className="w-full pb-3 pt-8 text-justify text-base lg:text-xl lg:leading-relaxed">
          <span className="font-play">IT&apos;S A WRAP! 🎉</span> As a united
          team we’ve once again said NO to the impossible and proven that
          there’s nothing that can’t be accomplished if you have the right
          amount of passion, teamwork, and determination! We extend our deepest
          gratitude to everyone who made the
          <span className="rounded-lg px-2 font-play font-bold">
            1st Global Conference on Robotics and Artificial Intelligence
            Technologies (GCRAIT)
          </span>{' '}
          a resounding success! A special thank you to Our{' '}
          <span className="rounded-lg px-2 font-play font-bold">
            Major Collaborators, Partners, and Sponsors
          </span>
          for their unwavering support, and to the students and teachers from
          various schools who actively participated and brought their passion
          for innovation to life.
        </p>

        <p className="w-full py-3 text-justify text-base lg:text-xl lg:leading-relaxed">
          All of you are not simply members of an event but rather members of a
          movement which will alter the world robotics and AI as we know it. In
          line with our theme,
          <span className="rounded-lg px-2 font-play font-bold">
            &quot;Collaboration into the New and Innovative Future: Hardware
            Re-imagined,&quot;
          </span>
          his event has shown us the power of teamwork and shared vision in
          shaping a brighter, tech-driven tomorrow.
        </p>
        <p className="w-full py-3 text-justify text-base lg:text-xl lg:leading-relaxed">
          Let this be a spark for continued innovation beyond the conference—may
          we all keep pushing the boundaries of what’s possible! Cheers to a
          successful event and wishing you all a Blessed and Happy Holidays!
          <span className="rounded-lg px-2 font-play font-bold">
            🎄✨ – GCRAIT 2024 FAMILY
          </span>
        </p>

        <p className="text-[6px] text-gray-50">
          ps: will update after our own mental break &apos;pag nakita niyo
          &apos;to, pm our page for your prize, attach screenshot. Happy
          holidays! - devs
        </p>
      </SectionLayout>
    </div>
  )
}

export default Blogs
