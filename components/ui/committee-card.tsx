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
        'relative mx-auto flex h-64 w-11/12 flex-col overflow-hidden rounded-xl bg-white drop-shadow-md md:h-80 md:w-full',
        className
      )}
      data-aos="fade"
    >
      <Image
        src={committee.image}
        alt={`Photo of ${committee.name}`}
        width={800}
        height={800}
        className={cn(
          'relative h-full w-full object-contain brightness-125 md:object-cover',
          {
            'object-contain md:object-contain':
              committee.position.startsWith('Overall'),
          }
        )}
      />
      <div className="absolute bottom-0 flex min-h-16 w-full bg-slate-800/80 px-4 text-white md:bottom-4 md:w-[90%] md:max-w-72 md:rounded-e-3xl">
        <div className="relative mx-auto my-auto flex flex-col py-2 text-center md:mx-0 md:text-left">
          <h3 className="line-clamp-2 w-full">{committee.name}</h3>
          <p className="line-clamp-1 w-full">{committee.position}</p>
        </div>
      </div>
    </div>
  )
}

export default CommitteeCard
