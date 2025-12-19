import { useEffect, useRef, useState } from 'react'

function useExitAnimation(duration: number) {
  const [exiting, setExiting] = useState(false)
  const timer = useRef<number | null>(null)
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])
  function startExit(onExited?: () => void) {
    if (exiting) return
    setExiting(true)
    timer.current = window.setTimeout(() => { onExited?.() }, duration)
  }
  return { exiting, startExit }
}

export { useExitAnimation }
