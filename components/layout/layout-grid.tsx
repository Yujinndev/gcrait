'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type Card = {
  id: number
  className: string
  thumbnail: string
}

export const LayoutGrid = ({
  cards,
  className,
}: {
  cards: Card[]
  className?: string
}) => {
  return (
    <div
      className={cn('relative grid h-full w-full grid-cols-3 gap-4', className)}
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={cn(
            'relative col-span-1 h-full w-full overflow-hidden rounded-xl border bg-white',
            card.className
          )}
          layoutId={`card-${card.id}`}
        >
          <Image
            src={card.thumbnail}
            height={500}
            width={500}
            className="inset-0 h-full w-full object-cover object-top transition duration-200"
            alt="thumbnail"
          />
        </motion.div>
      ))}
    </div>
  )
}
