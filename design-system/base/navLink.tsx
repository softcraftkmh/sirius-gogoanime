'use client'

import clsx from 'clsx'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

function NavLink(props: NavLinkProps) {
  const { href, children } = props

  const isActive = usePathname() === href

  return (
    <Link
      href={href}
      className={clsx(
        'inline-block font-serif font-bold text-primary text-xl',
        !isActive && 'opacity-80',
        isActive && 'text-secondary opacity-100'
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
