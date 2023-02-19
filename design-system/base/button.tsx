import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
  const { children, type = 'button', className, onClick } = props

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        'inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-primary shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
