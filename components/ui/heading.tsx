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
        'polygon-path relative z-30 mx-auto mb-4 flex w-full items-center justify-center text-balance break-words border-[3px] border-[#030018] px-9 py-2 font-play text-2xl backdrop-blur-[1px] sm:w-max lg:py-5 lg:text-4xl',
        className
      )}
      data-aos="fade"
    >
      <span className="text-center">{text}</span>
    </h2>
  )
}
