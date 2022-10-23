import React, { useCallback, useMemo } from 'react'

import { useMessagesDispatch, useMessagesSelector } from '@modules/Messages/api'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { UserSmall } from 'src/components'

import { UserType } from '../../../App/data/user'
import styles from './Friend.module.scss'


const cn = makeCn('Friend', styles)


export type FriendComponent = {
  friend: UserType
}
export const Friend: React.FC<FriendComponent> = React.memo((props) => {
  const {
    friend: { status, name, id, img, family },
  } = props

  const allMessages = useMessagesSelector((state) => state.allMessages)
  const openUserIdChat = useMessagesSelector((state) => state.openUserIdChat)
  const dispatch = useMessagesDispatch()

  const handleOpenChat = useCallback(() => {
    dispatch(() => ({ openUserIdChat: id }))
  }, [dispatch, id])

  const newMessageCount = useMemo(() => allMessages[id]?.filter(({ dateSeen }) => !Boolean(dateSeen)).length, [allMessages, id])

  return (
    <ButtonBox className={cn({ active: openUserIdChat === id })} onClick={handleOpenChat}>
      <UserSmall
        img={img}
        className={cn('UserImgName')}
        textClassName={cn('UserName')}
        userName={`${name} ${family}`}
        status={status}
      />
      <div className={cn('CountMessage')}>
        <Text className={cn('CountMessageButton', { active: openUserIdChat === id })} size="1">
          {newMessageCount}
          <Icon className={cn('CountMessageIcon')} size="small" icon="message-square" />
        </Text>
      </div>
    </ButtonBox>
  )
})
