'use client'

import chunk from 'lodash/chunk'
import { useState } from 'react'

import InnerContainer from '@/design-system/base/innerContainer'
import PaginationFooter from '@/design-system/base/paginationFooter'
import Card from '@/design-system/components/shared/card'
import type { Anime } from '@/services/types'
import type { AnimeFilter } from '@/types'

type HomeCardsProps = {
  animes: Anime[]
  search?: string
  filter?: AnimeFilter
}

const CHUNK_SIZE = 16

function HomeCards(props: HomeCardsProps) {
  const { animes, search, filter } = props
  const defaultFilter = !filter && !search ? 'recent-release' : undefined
  const [currentPage, setCurrentPage] = useState(1)
  const chunkedAnimes = chunk(animes, CHUNK_SIZE)

  return (
    <InnerContainer>
      <h1 className="capitalize text-xl font-bold my-4">
        {defaultFilter
          ? defaultFilter.replace(/-/g, ' ')
          : `Search results for "${search}"`}
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-12">
        {chunkedAnimes[currentPage - 1].map((anime) => (
          <Card
            key={anime.animeId}
            animeId={anime.animeId}
            animeTitle={anime.animeTitle}
            animeImg={anime.animeImg}
          />
        ))}
      </div>
      <PaginationFooter
        currentPage={currentPage}
        totalPages={Math.ceil(animes.length / CHUNK_SIZE)}
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrev={() => setCurrentPage(currentPage - 1)}
        onFirst={() => setCurrentPage(1)}
        onLast={() => setCurrentPage(Math.ceil(animes.length / CHUNK_SIZE))}
      />
    </InnerContainer>
  )
}

export default HomeCards
