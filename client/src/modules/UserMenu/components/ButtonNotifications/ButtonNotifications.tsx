import React from 'react'

import { makeCn } from '@shared/utils'
import { useBooleanState } from '@shared/hooks'
import { StatisticButton } from '../../components'
import styles from './ButtonNotifications.module.scss'

const cn = makeCn('ButtonNotifications', styles)

type ButtonNotificationsProps = {}
export const ButtonNotifications: React.FC<ButtonNotificationsProps> = (props) => {
  const [isOpen, setOpen, setClose] = useBooleanState(false)

  return (
    <>
      <StatisticButton
        text={'Уведомлений'}
        onOpen={setOpen}
        icon={'notification'}
        count={10}
      />
    </>
  )
}
