import Image from 'next/image'

import InnerContainer from '@/design-system/base/innerContainer'
import type { AnimeDetails } from '@/services/types'

function AnimeDetailsInformation(props: AnimeDetails) {
  const {
    animeTitle,
    animeImg,
    type,
    synopsis,
    genres,
    releasedDate,
    status,
    otherNames,
  } = props

  return (
    <InnerContainer className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8 mt-8">
      <div className="relative">
        <Image
          className="rounded-md shadow-md"
          src={animeImg}
          alt={animeTitle}
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes="300px"
        />
      </div>
      <div className="grid grid-cols-[160px,1fr] gap-4 items-center">
        <span>Anime Title:</span>
        <h1 className="text-2xl font-bold">{animeTitle}</h1>
        <span>Type:</span>
        <p>{type}</p>
        <span>Plot:</span>
        <p>{synopsis}</p>
        <span>Genre:</span>
        <p>{genres.reduce((p, c) => `${p}, ${c}`)}</p>
        <span>Released:</span>
        <p>{releasedDate}</p>
        <span>Status:</span>
        <p>{status}</p>
        <span>Other name:</span>
        <p>{otherNames || '-'}</p>
      </div>
    </InnerContainer>
  )
}

export default AnimeDetailsInformation
