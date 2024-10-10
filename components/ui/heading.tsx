import { cn } from '@/lib/utils'

export const Heading = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <h2
      className={cn(
        'polygon-path relative z-30 m-auto mb-4 w-max break-words border-[3px] border-green-800/65 px-9 py-3 font-play text-2xl backdrop-blur-[1px] lg:py-5 lg:text-4xl',
        className
      )}
      data-aos="fade"
    >
      {text}
    </h2>
  )
}
