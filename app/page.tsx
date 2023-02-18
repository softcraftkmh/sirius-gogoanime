import InnerContainer from '@/design-system/base/innerContainer'
import Card from '@/design-system/components/Shared/Card'
import { getAnimes } from '@/services'

async function Home() {
  const data = await getAnimes()

  return (
    <section>
      <InnerContainer className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-12">
        {data.map((anime) => (
          <Card
            key={anime.animeId}
            animeId={anime.animeId}
            animeTitle={anime.animeTitle}
            animeImg={anime.animeImg}
          />
        ))}
      </InnerContainer>
    </section>
  )
}

export default Home
