import { cn } from '@/lib/utils'

export const SectionLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <section
      className={cn(
        'relative z-20 flex flex-col space-y-12 p-6 pt-12 md:px-16 xl:pt-24',
        className
      )}
    >
      <div className="relative mx-auto w-full max-w-screen-xl">{children}</div>
    </section>
  )
}
