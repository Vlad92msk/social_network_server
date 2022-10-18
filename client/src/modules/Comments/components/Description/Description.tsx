import React from 'react'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { MainInfoType } from '..'
import styles from './Description.module.scss'

const cn = makeCn('Description', styles)

type DescriptionProps = {
  type: MainInfoType
  description: string
  appealToAnswerId: string
}
export const Description: React.FC<DescriptionProps> = (props) => {
  const { description, type, appealToAnswerId } = props

  return (
    <Text
      className={cn({ type: appealToAnswerId && 'answer' })}
      size={type === 'main' ? '2' : '1'}
      children={description}
    />
  )
}
