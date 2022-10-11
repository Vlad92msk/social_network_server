import { useEffect, useState } from 'react'
import {
  debounceTime, distinct, fromEvent, map,
} from 'rxjs'

const screenWidth$ = fromEvent(window, 'resize').pipe(
  debounceTime(400),
  map(() => window.innerWidth),
  distinct(),
)

export const useScreenWidth = () => {
  if (typeof window === 'undefined') return 0
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const watchScreenWidth$ = screenWidth$.subscribe(setScreenWidth)
    return () => watchScreenWidth$.unsubscribe()
  }, [])

  return screenWidth
}
