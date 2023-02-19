import HomeActions from '@/modules/home/actions'
import HomeCards from '@/modules/home/cards'
import type { AnimeFilter } from '@/types'

type HomePageProps = {
  searchParams: {
    filter?: AnimeFilter
  }
}

function HomePage(params: HomePageProps) {
  const {
    searchParams: { filter = 'recent-release' },
  } = params
  return (
    <section>
      <HomeActions />
      {/* @ts-expect-error Server Component */}
      <HomeCards filter={filter} />
    </section>
  )
}

export default HomePage
