import { classnames } from '@bem-react/classnames'
import React from 'react'
import { Box, PolymorphicComponentProps } from 'react-polymorphic-box'

import { makeCn } from '@shared/utils'
import styles from './ButtonBox.module.scss'

const cn = makeCn('ButtonBox', styles)

export interface ButtonBoxOwnProps {
  className?: string
}

export type ButtonBoxProps<E extends React.ElementType> = PolymorphicComponentProps<E, ButtonBoxOwnProps>

const DEFAULT_ELEMENT = 'button'

export const ButtonBox = <E extends React.ElementType = typeof DEFAULT_ELEMENT>(props: ButtonBoxProps<E>): JSX.Element => {
  const { className, children, ...rest } = props

  return (
    <Box as={DEFAULT_ELEMENT} type="button" className={classnames(cn(), className)} {...rest}>
      {children}
    </Box>
  )
}

ButtonBox.defaultProps = {
  className: null,
}
