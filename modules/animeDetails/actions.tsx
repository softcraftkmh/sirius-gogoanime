'use client'

import { useRouter } from 'next/navigation'

import IconButton from '@/design-system/base/iconButton'
import InnerContainer from '@/design-system/base/innerContainer'

function AnimeDetailsActions() {
  const router = useRouter()
  return (
    <InnerContainer>
      <IconButton icon="back" onClick={router.back} />
    </InnerContainer>
  )
}

export default AnimeDetailsActions
