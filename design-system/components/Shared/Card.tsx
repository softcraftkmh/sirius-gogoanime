import Image from 'next/image'
import Link from 'next/link'

import type { Anime } from '@/services/types'

type CardProps = Omit<Anime, 'releasedDate' | 'animeUrl'>

function Card(props: CardProps) {
  const { animeId, animeTitle, animeImg } = props
  return (
    <div className="flex flex-col hover:scale-105 transition-all duration-300 hover:text-primary">
      <Link href={`/animes/${animeId}`}>
        <div className="relative h-72 w-full">
          <Image
            className="rounded-md shadow-md"
            src={animeImg}
            alt={animeTitle}
            fill
            style={{
              objectFit: 'cover',
            }}
            sizes="200px"
          />
        </div>
        <p className="line-clamp-2">{animeTitle}</p>
      </Link>
    </div>
  )
}

export default Card
