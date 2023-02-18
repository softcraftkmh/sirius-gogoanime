import InnerContainer from '@/design-system/base/innerContainer'
import Card from '@/design-system/components/Shared/Card'
import { getAnimes } from '@/services'
import type { AnimeFilter } from '@/types'

type HomeCardsProps = {
  search?: string
  filter?: AnimeFilter
}

async function HomeCards(props: HomeCardsProps) {
  const { search, filter } = props
  const data = await getAnimes(filter)
  return (
    <InnerContainer>
      <h1 className="capitalize text-xl font-bold my-4">{filter} Animes</h1>
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
