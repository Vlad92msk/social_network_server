import React from 'react'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { dateType2 } from '@shared/utils/date'
import { UserSmall } from 'src/components'
import styles from './Header.module.scss'

const cn = makeCn('Header', styles)

type HeaderProps = {
  appealToAnswerId: string
  appealToUserName: string
  userName: string
  date: Date
}
export const Header: React.FC<HeaderProps> = (props) => {
  const { appealToUserName, userName, appealToAnswerId, date } = props

  return (
    <div className={cn()}>
      <div className={cn('UsersInf')}>
        <UserSmall textClassName={cn('AuthorName')} userName={userName} img="ava" />
        {appealToAnswerId && (
          <>
            <Text className={cn('For')} size="1">для</Text>
            <Text className={cn('ForUser')} size="1">{appealToUserName}</Text>
          </>
        )}
      </div>
      <Text className={cn('Date')} size="1">{dateType2(date)}</Text>
    </div>
  )
}
