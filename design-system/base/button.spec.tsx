import { render, screen, fireEvent } from '@testing-library/react'

import Button from './button'

describe('Button component', () => {
  it('should render a button element with the provided text', () => {
    const buttonText = 'Click me'
    render(<Button>{buttonText}</Button>)
    const buttonElement = screen.getByRole('button', { name: buttonText })
    expect(buttonElement).toBeInTheDocument()
  })

  it('should invoke the onClick function when clicked', () => {
    const onClickMock = jest.fn()
    render(<Button onClick={onClickMock}>Click me</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Click me' })
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('should render a button with the provided class name', () => {
    const className = 'custom-class'
    render(<Button className={className}>Click me</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Click me' })
    expect(buttonElement).toHaveClass(className)
  })
})
