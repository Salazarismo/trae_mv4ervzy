"use client"
import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'

function tier() {
  const hc = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency ?? 4 : 4
  const dm = typeof (navigator as any) !== 'undefined' ? (navigator as any).deviceMemory ?? 4 : 4
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1024
  if (hc <= 2 || dm <= 2) return 'low'
  if (vw < 768) return 'mobile'
  return 'desktop'
}

function Hero() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(true)
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const html = document.documentElement
    const motionOff = html.getAttribute('data-motion') === 'off'
    const t = tier()
    if (prefersReduced || motionOff || t === 'low') { setEnabled(false); return }
    const el = ref.current
    if (!el) return
    let raf = 0
    const orbs = Array.from(el.querySelectorAll('[data-orb="true"]')) as HTMLElement[]
    const state = orbs.map(() => ({ x: 0, y: 0 }))
    const max = t === 'mobile' ? 8 : 12
    const onMove = (e: PointerEvent) => {
      orbs.forEach((o, i) => {
        o.style.willChange = 'transform'
        const rect = o.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) * 0.02
        const dy = (e.clientY - cy) * 0.02
        state[i].x += (Math.max(-max, Math.min(max, dx)) - state[i].x) * 0.08
        state[i].y += (Math.max(-max, Math.min(max, dy)) - state[i].y) * 0.08
        o.style.transform = `translate3d(${state[i].x}px, ${state[i].y}px, 0)`
        window.setTimeout(() => { o.style.willChange = '' }, 400)
      })
    }
    el.addEventListener('pointermove', onMove, { passive: true })
    const io = new IntersectionObserver((entries) => {
      const visible = entries.some((e) => e.isIntersecting)
      if (!visible) {
        cancelAnimationFrame(raf)
        orbs.forEach((o) => { o.style.transform = 'translate3d(0,0,0)' })
      }
    })
    io.observe(el)
    return () => {
      el.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  return (
    <div ref={ref} className="relative h-48 w-full overflow-hidden rounded-xl border border-border bg-neutral-900">
      <div className="absolute inset-4 rounded-xl bg-[radial-gradient(ellipse_at_center,_#0f172a,_transparent_60%)]" />
      <span data-orb="true" className={clsx('absolute right-10 top-6 h-2 w-2 rounded-full bg-sky-400 animate-orb', enabled ? 'animate-rotate-slow animate-in-500' : '')} />
      <span data-orb="true" className={clsx('absolute left-16 bottom-10 h-2 w-2 rounded-full bg-emerald-400 animate-orb', enabled ? 'animate-rotate-slow animate-in-500' : '')} />
      <span data-orb="true" className={clsx('absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 animate-orb', enabled ? 'animate-rotate-slow animate-in-500' : '')} />
    </div>
  )
}

export { Hero }
