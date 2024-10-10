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
        'polygon-path z-30 m-auto mb-4 w-max border-[3px] border-green-800/65 px-9 py-3 font-play text-3xl lg:py-5 lg:text-4xl',
        className
      )}
      data-aos="fade"
    >
      {text}
    </h2>
  )
}
