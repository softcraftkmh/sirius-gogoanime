import clsx from 'clsx'

type InnerContainerProps = {
  children: React.ReactNode
  className?: string
}

function InnerContainer(props: InnerContainerProps) {
  const { children, className } = props
  return (
    <div className="px-4">
      <div className={clsx('max-w-6xl mx-auto', className)}>{children}</div>
    </div>
  )
}

export default InnerContainer
