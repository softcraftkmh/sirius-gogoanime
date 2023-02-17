import InnerContainer from '@/design-system/base/innerContainer'

function Header() {
  return (
    <header className="h-12 bg-slate-600">
      <InnerContainer className="">
        <h1 className="inline-block">シリウス</h1>
        <nav className="flex ml-auto">
          <ul className="flex">
            <li className="ml-2">
              <a href="/">Home</a>
            </li>
            <li className="ml-2">
              <a href="/about">About</a>
            </li>
            <li className="ml-2">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </InnerContainer>
    </header>
  )
}

export default Header
