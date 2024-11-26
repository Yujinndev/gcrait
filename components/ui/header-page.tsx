const HeaderPage = ({
  title,
  subheading,
}: {
  title: string
  subheading?: string
}) => {
  return (
    <div className="mt-16 w-full bg-gradient-to-br from-[#02183c] via-primary via-55% to-neutral-300 dark:border lg:h-[16rem]">
      <div
        className="flex h-full flex-col space-y-2 py-12"
        data-aos="fade-down"
      >
        <h1
          className="m-auto px-6 text-center text-3xl text-[#ffffff] xl:text-4xl 2xl:text-5xl"
          // style={{ textShadow: ' #FFFFFF 1px 0 6px' }}
        >
          {title}
        </h1>
        <p className="m-auto w-8/12 text-center text-base font-light text-white md:w-2/5 lg:text-xl lg:leading-relaxed">
          {subheading}
        </p>
      </div>
    </div>
  )
}

export default HeaderPage
