import Link from 'next/link'

import InnerContainer from '@/design-system/base/innerContainer'

function Header() {
  return (
    <header>
      <InnerContainer className="h-12 flex items-center">
        <Link href="/">
          <h1 className="inline-block font-serif font-bold text-primary">
            シリウス
          </h1>
        </Link>
        <nav className="flex ml-auto">
          <ul className="flex">
            <li className="ml-2">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-2">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-2">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </InnerContainer>
    </header>
  )
}

export default Header
