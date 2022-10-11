import { classnames } from '@bem-react/classnames'
import React, { useCallback } from 'react'
import { Icon } from '@shared/components/Icon'
import { Popper } from '@shared/components/Popper'
import { cn } from './cn'

export interface ModalProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  open: boolean
  autoHeight?: boolean

  onClose?: () => void
  isBckOnClose?: boolean
  isOnCloseIcon?: boolean
}

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    className,
    open,
    autoHeight,

    onClose,
    isBckOnClose,
    isOnCloseIcon,
  } = props

  if (typeof window === 'undefined') {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>
  }

  const handleBckClose = useCallback(() => {
    if (isBckOnClose && onClose) {
      onClose()
    }
  }, [isBckOnClose, onClose])

  return (
    <Popper open={open} anchorEl={document.body} className={cn()}>
      <span className={cn('Bck')} onClick={handleBckClose} />
      <section className={classnames(cn('Inner', { autoHeight }), className)}>
        {(onClose && isOnCloseIcon) && (
          <span onClick={onClose} className={cn('BlockIconClose')}>
            <Icon icon="close" className={cn('IconClose')} />
          </span>
        )}
        {children}
      </section>
    </Popper>
  )
}

Modal.defaultProps = {
  className: null,
  isBckOnClose: true,
}
