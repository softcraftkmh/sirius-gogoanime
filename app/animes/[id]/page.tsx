import AnimeDetailsActions from '@/modules/animeDetails/actions'
import AnimeDetailsInformation from '@/modules/animeDetails/information'
import { getAnime } from '@/services'

type AnimeDetailsPageProps = {
  params: {
    id: string
  }
}

async function AnimeDetailsPage(props: AnimeDetailsPageProps) {
  const {
    params: { id },
  } = props

  const data = await getAnime(id)
  return (
    <section>
      <AnimeDetailsActions />
      {data && <AnimeDetailsInformation {...data} />}
    </section>
  )
}

export default AnimeDetailsPage
