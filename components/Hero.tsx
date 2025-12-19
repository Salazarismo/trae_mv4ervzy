import { clsx } from 'clsx'

function Hero() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl border border-border bg-neutral-900">
      <div className="absolute inset-4 rounded-xl bg-[radial-gradient(ellipse_at_center,_#0f172a,_transparent_60%)]" />
      <span className={clsx('absolute right-10 top-6 h-2 w-2 rounded-full bg-sky-400 animate-orb')} />
      <span className={clsx('absolute left-16 bottom-10 h-2 w-2 rounded-full bg-emerald-400 animate-orb')} />
      <span className={clsx('absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 animate-orb')} />
    </div>
  )
}

export { Hero }
