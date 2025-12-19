"use client"
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { clsx } from 'clsx'

export interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallback?: React.ReactNode
}

function ImageWithFallback({ fallback, className, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className={clsx('flex items-center justify-center rounded-lg bg-neutral-800 text-neutral-400', className)}>
        {fallback ?? <span>Imagem indisponível</span>}
      </div>
    )
  }
  return <Image {...props} className={className} onError={() => setError(true)} />
}

export { ImageWithFallback }
