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
        'relative z-20 flex flex-col space-y-12 px-4 py-8 md:px-10 lg:px-16 lg:py-20',
        className
      )}
    >
      <div className="relative mx-auto w-full max-w-screen-xl lg:px-16">
        {children}
      </div>
    </section>
  )
}
