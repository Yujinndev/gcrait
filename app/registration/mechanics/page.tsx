import CompetitionTabs from '@/components/competition-tabs'
import HeaderPage from '@/components/ui/header-page'

const Mechanics = () => {
  return (
    <div className="relative overflow-x-hidden bg-neutral-50">
      <HeaderPage
        title="Explore the GCRAIT Mechanics"
        subheading="Your guide to participating in impactful sessions, competitions, and collaborations; - understand the rules and join the experience today."
      />

      <CompetitionTabs />
    </div>
  )
}

export default Mechanics
