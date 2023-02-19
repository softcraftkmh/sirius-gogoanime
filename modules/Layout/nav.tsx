import NavLink from '@/design-system/base/navLink'

const NAV_ITEMS = [
  {
    title: 'Home',
    href: '/',
  },
]

function Nav() {
  return (
    <nav className="flex ml-auto">
      <ul className="flex">
        {NAV_ITEMS.map((navItem) => (
          <li className="ml-8" key={navItem.title}>
            <NavLink href={navItem.href}>{navItem.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
