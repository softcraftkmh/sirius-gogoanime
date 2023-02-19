import Link from 'next/link'

import InnerContainer from '@/design-system/base/innerContainer'
import Nav from '@/modules/layout/nav'

function Header() {
  return (
    <header className="border-b shadow-md mb-8">
      <InnerContainer className="h-16 flex items-center">
        <Link href="/">
          <h1 className="inline-block font-serif font-bold text-secondary text-2xl drop-shadow-lg">
            シリウス
          </h1>
        </Link>
        <Nav />
      </InnerContainer>
    </header>
  )
}

export default Header
