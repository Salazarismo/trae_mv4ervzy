import { forwardRef } from 'react'
import { clsx } from 'clsx'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const base = 'h-10 w-full rounded-lg border border-border bg-neutral-900 px-3 text-sm text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed'

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => {
  return (
    <select ref={ref} className={clsx(base, className)} {...props}>
      {children}
    </select>
  )
})

Select.displayName = 'Select'

export { Select }
