import { render, fireEvent } from '@testing-library/react'

import IconButton from './iconButton'

describe('IconButton', () => {
  it('renders a button with the back icon when icon prop is "back"', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<IconButton icon="back" onClick={onClick} />)
    const button = getByRole('button')
    const svg = button.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('data-icon')).toBe('back')
  })

  it('calls onClick handler when the button is clicked', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<IconButton icon="back" onClick={onClick} />)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies className prop to the button', () => {
    const className = 'custom-class'
    const { getByRole } = render(
      <IconButton icon="back" className={className} />
    )
    const button = getByRole('button')
    expect(button.classList.contains(className)).toBe(true)
  })
})
