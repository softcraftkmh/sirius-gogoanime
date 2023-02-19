'use client'

import InnerContainer from '@/design-system/base/innerContainer'
import HomeAnimeFilter from '@/modules/home/filter'
import HomeAnimeSearch from '@/modules/home/search'

function HomeActions() {
  return (
    <InnerContainer className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-2 items-baseline">
      <HomeAnimeSearch />
      <HomeAnimeFilter />
    </InnerContainer>
  )
}

export default HomeActions
