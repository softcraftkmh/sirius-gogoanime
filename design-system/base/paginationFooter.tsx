import clsx from 'clsx'

type PaginationFooterButtonProps = {
  label: string
  disabled: boolean
  onClick: () => void
}

type PaginationFooterProps = {
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrev: () => void
  onFirst: () => void
  onLast: () => void
}

function PaginationFooterButton(props: PaginationFooterButtonProps) {
  const { label, disabled, onClick } = props
  return (
    <button
      type="button"
      className={clsx(
        'px-3 py-1 border border-gray-300 rounded-md',
        disabled
          ? 'opacity-50 bg-gray-200 text-gray-500 cursor-not-allowed'
          : 'bg-white text-gray-700 hover:bg-gray-100',
        'transition-colors duration-150 ease-in-out'
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

function PaginationFooter(props: PaginationFooterProps) {
  const { currentPage, totalPages, onNext, onPrev, onFirst, onLast } = props

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <PaginationFooterButton
        label="First"
        disabled={currentPage === 1}
        onClick={onFirst}
      />
      <PaginationFooterButton
        label="Prev"
        disabled={currentPage === 1}
        onClick={onPrev}
      />
      <div className="flex items-center justify-center rounded-md px-3 py-2 text-gray-700 font-medium bg-gray-200">
        {currentPage} / {Math.ceil(totalPages)}
      </div>
      <PaginationFooterButton
        label="Next"
        disabled={currentPage === totalPages}
        onClick={onNext}
      />
      <PaginationFooterButton
        label="Last"
        disabled={currentPage === totalPages}
        onClick={onLast}
      />
    </div>
  )
}

export default PaginationFooter
