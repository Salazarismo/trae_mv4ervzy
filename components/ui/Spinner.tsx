import { clsx } from 'clsx'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx('h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white', className)}
      {...props}
    />
  )}

export { Spinner }
