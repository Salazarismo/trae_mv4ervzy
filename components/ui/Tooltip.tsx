import React, { useId } from 'react'
import { clsx } from 'clsx'

export interface TooltipProps {
  content: string
  children: React.ReactElement
  className?: string
}

function Tooltip({ content, children, className }: TooltipProps) {
  const id = useId()
  return (
    <span className={clsx('group relative inline-flex', className)}>
      {React.cloneElement(children, { 'aria-describedby': id })}
      <span
        role="tooltip"
        id={id}
        className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-200 opacity-0 shadow-soft transition ease-soft group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {content}
      </span>
    </span>
  )
}

export { Tooltip }
