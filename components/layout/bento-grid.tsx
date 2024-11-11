import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid auto-rows-[12rem] grid-cols-3 gap-4',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  thumbnail,
  className,
  children,
}: {
  thumbnail: string | StaticImageData
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border bg-white shadow-input transition duration-200',
        className
      )}
    >
      <Image
        src={thumbnail}
        height={500}
        width={500}
        className="group h-full w-full object-cover object-top brightness-75 filter transition duration-200 group-hover:brightness-105"
        alt="thumbnail"
      />

      {children && <div className="pt-4">{children}</div>}
    </div>
  )
}
