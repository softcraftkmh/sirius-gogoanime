import { render } from '@testing-library/react'

import InnerContainer from './innerContainer'

describe('InnerContainer', () => {
  test('renders children', () => {
    const { getByText } = render(<InnerContainer>Test Children</InnerContainer>)
    expect(getByText('Test Children')).toBeInTheDocument()
  })

  test('applies className prop', () => {
    const { getByTestId } = render(
      <InnerContainer className="test-class">
        <div data-testid="test-child" />
      </InnerContainer>
    )
    expect(getByTestId('test-child').parentElement).toHaveClass('test-class')
  })

  test('applies default styles', () => {
    const { getByTestId } = render(
      <InnerContainer>
        <div data-testid="test-child" />
      </InnerContainer>
    )
    expect(getByTestId('test-child').parentElement?.parentElement).toHaveClass(
      'px-4'
    )
    expect(getByTestId('test-child').parentElement).toHaveClass(
      'max-w-6xl mx-auto'
    )
  })
})
