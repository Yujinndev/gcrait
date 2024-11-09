import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

const CommitteeCard = ({
  committee,
  className,
}: {
  committee: {
    name: string
    position: string
    image: StaticImageData | string
  }
  className?: string
}) => {
  return (
    <div
      key={committee.position}
      className={cn(
        'relative flex h-80 w-80 flex-col overflow-hidden rounded-3xl border bg-white',
        className
      )}
      data-aos="fade"
    >
      <Image
        src={committee.image}
        alt={`Photo of ${committee.name}`}
        width={800}
        height={800}
        className={cn('relative h-full w-full object-cover brightness-150', {
          'object-contain': committee.position.startsWith('Overall'),
        })}
      />
      <div className="absolute bottom-4 h-20 w-[90%] max-w-72 rounded-e-3xl bg-slate-800/80 px-4 py-4 text-white">
        <div className="relative flex flex-col">
          <h2 className="line-clamp-1 w-full">{committee.name}</h2>
          <p className="line-clamp-1 w-full">{committee.position}</p>
        </div>
      </div>
    </div>
  )
}

export default CommitteeCard
