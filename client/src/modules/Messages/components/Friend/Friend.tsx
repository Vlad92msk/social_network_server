import React, { useCallback, useMemo } from 'react'

import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { UserSmall } from 'src/components'

import { UserType } from '../../../App/data/user'
import { messageActions, useServiceMessageAction, useServiceMessageSelector } from '../../service'
import styles from './Friend.module.scss'


const cn = makeCn('Friend', styles)


export type FriendComponent = {
  friend: UserType
}
export const Friend: React.FC<FriendComponent> = React.memo((props) => {
  const {
    friend: { status, name, id, img, family },
  } = props

  const allMessages = useServiceMessageSelector('allMessages')
  const openUserIdChat = useServiceMessageSelector('openUserIdChat')
  const dispatch = useServiceMessageAction()

  const handleOpenChat = useCallback(() => {
    dispatch(messageActions.SET__OPEN_CHAT_ID({ userId: id }))
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
