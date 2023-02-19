import { render, screen } from '@testing-library/react'

import { usePathname } from 'next/navigation'

import NavLink from './navLink'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

type MockedUsePathname = jest.MockedFunction<typeof usePathname>

const mockedUsePathname = usePathname as MockedUsePathname

describe('NavLink', () => {
  test('renders active link with correct styles', () => {
    mockedUsePathname.mockReturnValueOnce('/active')
    render(<NavLink href="/active">Active Link</NavLink>)
    const link = screen.getByRole('link', { name: 'Active Link' })
    expect(link).toHaveClass('text-secondary opacity-100')
  })

  test('renders inactive link with correct styles', () => {
    mockedUsePathname.mockReturnValueOnce('/other-page')
    render(<NavLink href="/active">Active Link</NavLink>)
    const link = screen.getByRole('link', { name: 'Active Link' })
    expect(link).toHaveClass('opacity-80')
  })
})
