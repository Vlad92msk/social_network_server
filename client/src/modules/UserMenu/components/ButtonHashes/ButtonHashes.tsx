import React from 'react'

import { useBooleanState } from '@shared/hooks'
import { makeCn } from '@shared/utils'
import { StatisticButton } from '..'
import styles from './ButtonHashes.module.scss'

const cn = makeCn('ButtonHashes', styles)

type ButtonHashesProps = {}
export const ButtonHashes: React.FC<ButtonHashesProps> = (props) => {
  const [isOpen, setOpen, setClose] = useBooleanState(false)

  return (
    <StatisticButton
      text="Отметок"
      onOpen={setOpen}
      icon="hash"
      count={300}
    />
  )
}
