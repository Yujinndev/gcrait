import { data } from '@/app/constants'

const HeaderPage = ({
  title,
  subheading,
}: {
  title: string
  subheading?: string
}) => {
  return (
    <div
      className="mt-16 w-full bg-gradient-to-br from-[#02183c] via-primary via-55% to-neutral-300 dark:border lg:h-[18rem]"
      style={{
        backgroundImage: `
              linear-gradient(to bottom, rgba(2, 24, 60, 0.7), #02183c 100%),
              linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(2, 24, 60, 0.7) 100%),
              url(${data.BRAND.headerBG})
            `,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="flex h-full flex-col items-center justify-center space-y-2 py-12"
        data-aos="fade-down"
      >
        <h1 className="px-6 text-center text-3xl text-[#39FF14] xl:text-4xl 2xl:text-5xl">
          {title}
        </h1>
        <p className="m-auto w-9/12 text-center text-base font-light text-white md:w-2/5 lg:text-xl lg:leading-relaxed">
          {subheading}
        </p>
      </div>
    </div>
  )
}

export default HeaderPage
