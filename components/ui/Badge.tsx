import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'

const badgeVariants = cva('inline-flex items-center rounded-full px-2 py-0.5 text-xs', {
  variants: {
    variant: {
      neutral: 'bg-neutral-800 text-neutral-200',
      primary: 'bg-primary text-white',
      success: 'bg-success text-white',
      warning: 'bg-warning text-black',
      error: 'bg-error text-white',
    },
  },
  defaultVariants: { variant: 'neutral' },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={clsx(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
