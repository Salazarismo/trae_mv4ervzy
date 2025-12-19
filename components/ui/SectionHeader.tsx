import { clsx } from 'clsx'

export interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <header className={clsx('mb-6', className)}>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {description ? <p className="mt-2 text-sm text-neutral-400">{description}</p> : null}
    </header>
  )
}

export { SectionHeader }
