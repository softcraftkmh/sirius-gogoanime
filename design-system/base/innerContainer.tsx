import clsx from 'clsx'

type InnerContainerProps = {
  children: React.ReactNode
  className?: string
}

function InnerContainer(props: InnerContainerProps) {
  const { children, className } = props
  return <div className={clsx('max-w-6xl mx-auto', className)}>{children}</div>
}

export default InnerContainer
