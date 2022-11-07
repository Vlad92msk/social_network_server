import { classnames } from '@bem-react/classnames'
import React from 'react'
import { makeCn } from '@shared/utils'
import styles from './FieldRow.module.scss'

const cn = makeCn('FieldRow', styles)

export interface FieldRowProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  align?: 'top' | 'bottom' | 'center'
  justify?: 'start' | 'center' | 'between' | 'around' | 'end'
  wrap?: 'wrap' | 'nowrap'
  width?: '100' | '50' | '25'
  direction?: 'row' | 'column' | 'columnreverse' | 'rowreverse'
  style?: React.CSSProperties
  gap?: string
}

export const FieldRow: React.FunctionComponent<FieldRowProps> = (props) => {
  const {
    children, className, align, justify, wrap, width, direction, style, gap,
  } = props

  return (
    <div
      style={{ ...style, gap }}
      className={classnames(
        cn({
          align,
          justify,
          wrap,
          width,
          direction,
        }),
        className,
      )}
    >
      {children}
    </div>
  )
}

FieldRow.defaultProps = {
  className: null,
  align: 'top',
  justify: 'start',
  wrap: 'nowrap',
  direction: 'row',
}
