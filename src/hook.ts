import { useEffect, useState } from 'react'

export default function useViewportWidth(percentage: number): number {
  const [width, setWidth] = useState(window.innerWidth)

  function updateWidth(): void{
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    document.addEventListener('resize', updateWidth)
    return () => document.removeEventListener('resize', updateWidth)
  }, [])

  return width * percentage/100
}