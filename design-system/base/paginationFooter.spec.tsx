import { render, fireEvent } from '@testing-library/react'

import PaginationFooter from './paginationFooter'

test('renders pagination footer with correct number of pages', () => {
  const { getByText } = render(
    <PaginationFooter
      currentPage={1}
      totalPages={5}
      onNext={() => {}}
      onPrev={() => {}}
      onFirst={() => {}}
      onLast={() => {}}
    />
  )
  const totalPagesElement = getByText('1 / 5')
  expect(totalPagesElement).toBeInTheDocument()
})

test('calls onNext when next button is clicked', () => {
  const onNext = jest.fn()
  const { getByText } = render(
    <PaginationFooter
      currentPage={1}
      totalPages={5}
      onNext={onNext}
      onPrev={() => {}}
      onFirst={() => {}}
      onLast={() => {}}
    />
  )
  const nextButton = getByText('Next')
  fireEvent.click(nextButton)
  expect(onNext).toHaveBeenCalledTimes(1)
})

test('calls onPrev when prev button is clicked', () => {
  const onPrev = jest.fn()
  const { getByText } = render(
    <PaginationFooter
      currentPage={2}
      totalPages={5}
      onNext={() => {}}
      onPrev={onPrev}
      onFirst={() => {}}
      onLast={() => {}}
    />
  )
  const prevButton = getByText('Prev')
  fireEvent.click(prevButton)
  expect(onPrev).toHaveBeenCalledTimes(1)
})

test('calls onFirst when first button is clicked', () => {
  const onFirst = jest.fn()
  const { getByText } = render(
    <PaginationFooter
      currentPage={2}
      totalPages={5}
      onNext={() => {}}
      onPrev={() => {}}
      onFirst={onFirst}
      onLast={() => {}}
    />
  )
  const firstButton = getByText('First')
  fireEvent.click(firstButton)
  expect(onFirst).toHaveBeenCalledTimes(1)
})

test('calls onLast when last button is clicked', () => {
  const onLast = jest.fn()
  const { getByText } = render(
    <PaginationFooter
      currentPage={4}
      totalPages={5}
      onNext={() => {}}
      onPrev={() => {}}
      onFirst={() => {}}
      onLast={onLast}
    />
  )
  const lastButton = getByText('Last')
  fireEvent.click(lastButton)
  expect(onLast).toHaveBeenCalledTimes(1)
})
