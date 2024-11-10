const HeaderPage = ({
  title,
  subheading,
}: {
  title: string
  subheading?: string
}) => {
  return (
    <div className="mt-16 h-[16rem] w-full bg-gradient-to-r from-[#030018] via-[#02183c] via-30% to-blue-950 dark:border">
      <div
        className="flex h-full flex-col space-y-2 py-12"
        data-aos="fade-down"
      >
        <h1 className="m-auto w-3/5 text-center text-3xl text-[#FED049] xl:text-4xl 2xl:text-5xl">
          {title}
        </h1>
        <p className="m-auto w-11/12 text-center text-base font-light text-white md:w-2/5 lg:text-xl lg:leading-relaxed">
          {subheading}
        </p>
      </div>
    </div>
  )
}

export default HeaderPage
