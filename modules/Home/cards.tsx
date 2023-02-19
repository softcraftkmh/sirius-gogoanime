import InnerContainer from '@/design-system/base/innerContainer'
import Card from '@/design-system/components/shared/card'
import { getAnimes } from '@/services'
import type { AnimeFilter } from '@/types'

type HomeCardsProps = {
  search?: string
  filter?: AnimeFilter
}

async function HomeCards(props: HomeCardsProps) {
  const { search, filter } = props
  const defaultFilter = !filter && !search ? 'recent-release' : undefined
  const data = await getAnimes(defaultFilter, search)
  return (
    <InnerContainer>
      <h1 className="capitalize text-xl font-bold my-4">
        {defaultFilter
          ? defaultFilter.replace(/-/g, ' ')
          : `Search results for "${search}"`}
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-12">
        {data.map((anime) => (
          <Card
            key={anime.animeId}
            animeId={anime.animeId}
            animeTitle={anime.animeTitle}
            animeImg={anime.animeImg}
          />
        ))}
      </div>
    </InnerContainer>
  )
}

export default HomeCards
