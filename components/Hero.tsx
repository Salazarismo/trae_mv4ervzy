"use client"
import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'

interface MotionParams {
  raioDeteccao?: number
  velocidadeMovimento?: number
  fatorSuavizacao?: number // 0.1 a 0.9
  limiteTelaX?: number
  limiteTelaY?: number
}

function Hero({
  raioDeteccao = 120,
  velocidadeMovimento = 4,
  fatorSuavizacao = 0.15,
  limiteTelaX,
  limiteTelaY,
}: MotionParams) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const html = document.documentElement
    const motionOff = html.getAttribute('data-motion') === 'off'
    if (prefersReduced || motionOff) { setEnabled(false); return }
    const el = ref.current
    if (!el) return
    const containerRect = el.getBoundingClientRect()
    const maxX = (limiteTelaX ?? containerRect.width)
    const maxY = (limiteTelaY ?? containerRect.height)
    const orbs = Array.from(el.querySelectorAll('[data-orb="true"]')) as HTMLElement[]
    const offsets = orbs.map(() => ({ x: 0, y: 0 }))

    const onMove = (e: PointerEvent) => {
      orbs.forEach((o, i) => {
        const rect = o.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.hypot(dx, dy)
        if (dist <= raioDeteccao) {
          o.style.willChange = 'transform'
          const signX = dx > 0 ? -1 : 1
          const signY = dy > 0 ? -1 : 1
          const stepAxis = velocidadeMovimento / Math.SQRT2
          const stepX = signX * stepAxis
          const stepY = signY * stepAxis
          const targetX = offsets[i].x + stepX
          const targetY = offsets[i].y + stepY
          const nextX = offsets[i].x + (targetX - offsets[i].x) * fatorSuavizacao
          const nextY = offsets[i].y + (targetY - offsets[i].y) * fatorSuavizacao
          const orbRadius = rect.width / 2
          const newCenterX = cx + (nextX - offsets[i].x)
          const newCenterY = cy + (nextY - offsets[i].y)
          const minX = containerRect.left + orbRadius
          const maxXAbs = containerRect.left + maxX - orbRadius
          const minY = containerRect.top + orbRadius
          const maxYAbs = containerRect.top + maxY - orbRadius
          const clampedX = Math.max(minX, Math.min(maxXAbs, newCenterX))
          const clampedY = Math.max(minY, Math.min(maxYAbs, newCenterY))
          const deltaX = clampedX - cx
          const deltaY = clampedY - cy
          offsets[i].x += deltaX
          offsets[i].y += deltaY
          o.style.transform = `translate3d(${offsets[i].x}px, ${offsets[i].y}px, 0)`
          window.setTimeout(() => { o.style.willChange = '' }, 300)
        }
      })
    }
    el.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      el.removeEventListener('pointermove', onMove)
    }
  }, [raioDeteccao, velocidadeMovimento, fatorSuavizacao, limiteTelaX, limiteTelaY])

  return (
    <div ref={ref} className="relative h-48 w-full overflow-hidden rounded-xl border border-border bg-neutral-900">
      <div className="absolute inset-4 rounded-xl bg-[radial-gradient(ellipse_at_center,_#0f172a,_transparent_60%)]" />
      <span data-orb="true" className={clsx('absolute right-10 top-6 h-2 w-2 rounded-full bg-sky-400 animate-in-500')} />
      <span data-orb="true" className={clsx('absolute left-16 bottom-10 h-2 w-2 rounded-full bg-emerald-400 animate-in-500')} />
      <span data-orb="true" className={clsx('absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 animate-in-500')} />
    </div>
  )
}

export { Hero }
