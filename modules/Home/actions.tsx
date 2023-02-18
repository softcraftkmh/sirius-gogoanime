'use client'

import { useRouter } from 'next/navigation'

import InnerContainer from '@/design-system/base/innerContainer'

function HomeActions() {
  const router = useRouter()
  return (
    <InnerContainer>
      <button type="button" onClick={() => router.push('/?filter=popular')}>
        popular
      </button>
    </InnerContainer>
  )
}

export default HomeActions
