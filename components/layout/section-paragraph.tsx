export const SectionParagraph = ({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) => {
  return (
    <section className="relative">
      <h2 className="font-semibold text-[#02183c]">{title}</h2>
      <hr className="mt-2 border-t border-gray-300" />

      <div className="text-md space-y-2 py-5 lg:text-lg">{children}</div>
    </section>
  )
}
