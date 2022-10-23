import React from 'react'

import { useBooleanState } from '@shared/hooks'
import { makeCn } from '@shared/utils'
import { StatisticButton } from '..'
import styles from './ButtonNotifications.module.scss'

const cn = makeCn('ButtonNotifications', styles)

type ButtonNotificationsProps = {}
export const ButtonNotifications = (props: ButtonNotificationsProps) => {
  const [isOpen, setOpen, setClose] = useBooleanState(false)

  return (
    <StatisticButton
      text="Уведомлений"
      onOpen={setOpen}
      icon="notification"
      count={10}
    />
  )
}
