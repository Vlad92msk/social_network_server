import { Icon } from '@shared/components/Icon'
import React from 'react'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import styles from './UserOlineForOf.module.scss'

const cn = makeCn('UserOlineForOf', styles)

export type UserOlineForOfProps = {
  status: any
}

export const UserOlineForOf = React.memo((props: UserOlineForOfProps) => {
  const { status } = props
  return (
    <div className={cn()}>
      <div className={cn('IconBox')}>
        <Icon className={cn('Icon')} icon="user" fill="oldAsphalt40" size="small" />
        <span className={cn('Status')} />
      </div>
      <Text className={cn('Count')} size="1">1 / 5</Text>
    </div>
  )
})
