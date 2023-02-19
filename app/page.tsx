import HomeActions from '@/modules/home/actions'
import HomeCards from '@/modules/home/cards'
import type { AnimeFilter } from '@/types'

type HomePageProps = {
  searchParams: {
    filter?: AnimeFilter
    search?: string
  }
}

function HomePage(params: HomePageProps) {
  const {
    searchParams: { filter, search },
  } = params
  return (
    <section>
      <HomeActions />
      {/* @ts-expect-error Server Component */}
      <HomeCards filter={filter} search={search} />
    </section>
  )
}

export default HomePage
