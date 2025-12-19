import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { clsx } from 'clsx'

const buttonVariants = cva(
  'inline-flex select-none items-center justify-center rounded-lg transition ease-soft animate-in-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:brightness-110',
        secondary: 'bg-surface text-background-foreground hover:bg-neutral-800',
        ghost: 'bg-transparent text-background-foreground hover:bg-neutral-800',
        danger: 'bg-error text-white hover:brightness-110',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return (
    <button ref={ref} className={clsx(buttonVariants({ variant, size }), className)} {...props} />
  )
})

Button.displayName = 'Button'

export { Button, buttonVariants }
