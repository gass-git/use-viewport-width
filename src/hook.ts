import { useEffect, useState } from 'react'

export default function useVW(percentage: number): number {
  const [width, setWidth] = useState(
    // guard window for SSR (server-side rendering)
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  function updateWidth(_event?: UIEvent): void{
    setWidth(window.innerWidth)
  }

  useEffect((): (() => void) => {
    window.addEventListener('resize', updateWidth)

    // cleanup: remove event listener when hook unmounts
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (width * percentage) / 100
}