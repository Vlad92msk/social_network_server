import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'

export const useRect = <T extends Element>(param: keyof DOMRect): [
  number,
  MutableRefObject<T | null>
] => {
  const ref = useRef<T>(null)
  const [rect, setRect] = useState<number>()

  const set = useCallback(() => setRect(ref.current?.getBoundingClientRect()[param]), [param])

  const useEffectInEvent = (
    event: 'resize' | 'scroll',
    useCapture?: boolean,
  ) => {
    useEffect(() => {
      set()
      window.addEventListener(event, set, useCapture)
      return () => window.removeEventListener(event, set, useCapture)
    }, [event, useCapture])
  }

  useEffectInEvent('resize')
  useEffectInEvent('scroll', true)

  return [rect, ref]
}
