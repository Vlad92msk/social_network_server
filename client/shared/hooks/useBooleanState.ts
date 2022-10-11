import { useCallback, useState } from 'react'

export const useBooleanState = (initialState: boolean): [boolean, () => void, () => void] => {
  const [open, setOpen] = useState(initialState)

  const handleOpen = useCallback(() => setOpen(true), [])
  const handleClose = useCallback(() => setOpen(false), [])

  return [open, handleOpen, handleClose]
}
