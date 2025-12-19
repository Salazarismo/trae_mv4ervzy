import { clsx } from 'clsx'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className, ...props }: CardProps) {
  return <div className={clsx('rounded-xl border border-border bg-neutral-900 shadow-soft', className)} {...props} />
}

export { Card }
