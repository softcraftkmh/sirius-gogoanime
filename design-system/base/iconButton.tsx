import clsx from 'clsx'

type IconButtonProps = {
  icon: 'back'
  className?: string
  onClick?: () => void
}

function BackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      data-icon="back"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
      />
    </svg>
  )
}

function IconButton(props: IconButtonProps) {
  const { icon, onClick, className } = props
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 shadow-sm',
        className
      )}
    >
      {icon === 'back' && <BackIcon />}
    </button>
  )
}

export default IconButton
