import { clsx } from 'clsx'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-lg bg-neutral-800',
        'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-neutral-700/50 before:to-transparent',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
