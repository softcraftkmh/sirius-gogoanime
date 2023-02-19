import HomeActions from '@/modules/home/actions'
import HomeCards from '@/modules/home/cards'
import { getAnimes } from '@/services'
import type { AnimeFilter } from '@/types'

type HomePageProps = {
  searchParams: {
    filter?: AnimeFilter
    search?: string
  }
}

async function HomePage(params: HomePageProps) {
  const {
    searchParams: { filter, search },
  } = params
  const data = await getAnimes(filter, search)

  return (
    <section>
      <HomeActions />
      <HomeCards filter={filter} search={search} animes={data} />
    </section>
  )
}

export default HomePage
