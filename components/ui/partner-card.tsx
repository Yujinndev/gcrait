import Image, { StaticImageData } from 'next/image'
import { Button } from './button'
import Link from 'next/link'
import { Facebook, Globe } from 'lucide-react'

const PartnerCard = ({
  partner,
}: {
  partner: {
    name: string
    desc?: string
    image: StaticImageData | string
    fb: string
    website?: string
  }
}) => {
  return (
    <div className="border border-neutral-50">
      <Image
        src={partner.image}
        alt={partner.name}
        width={800}
        height={800}
        className="h-80 bg-white object-contain p-4"
      />

      <div className="p-2 pt-8">
        <div className="flex flex-col-reverse justify-between md:flex-row">
          <p className="text-xl font-bold text-[#02183c]">{partner.name}</p>
          <div className="bottom-0 left-4 flex gap-3 pb-3">
            <Button className="h-8 w-8 rounded-full" asChild>
              <Link href={partner?.fb} target="_blank">
                <Facebook className="flex-shrink-0" />
              </Link>
            </Button>

            {partner?.website && (
              <Button className="h-8 w-8 rounded-full" asChild>
                <Link href={partner?.website} target="_blank">
                  <Globe className="flex-shrink-0" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <br />
        <div className="text-md">{partner?.desc}</div>
      </div>
    </div>
  )
}

export default PartnerCard
