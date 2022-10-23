import lodash from 'lodash'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useMessagesDispatch, useMessagesSelector } from '@modules/Messages/api'
import { DefaultObject } from '@public/models/defaultObject.model'

import { IconButton } from '@shared/components/IconButton'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { scrollToCurrent } from '@shared/utils/scrollToParent'


import { ChatMassage, CreateChatMessage, MASSAGE_FROM } from '..'
import { ALL_USERS } from '../../../UserMenu/data/all_users'
import { Message } from '../../data/messages'
import styles from './ChatContainer.module.scss'


const cn = makeCn('ChatContainer', styles)

export type ChatType = {}
export const ChatContainer: React.FC<ChatType> = () => {
  // const { currenUser } = storageGet(LocalStorageEnum.USER) as ServiceState
  const currenUser = {
    id: 1,
  }


  const openUserIdChat = useMessagesSelector((state) => state.openUserIdChat)
  const allMessages = useMessagesSelector((state) => state.allMessages)
  const dispatch = useMessagesDispatch()

  if (!openUserIdChat) return <></>

  const chatMassageContainer = useRef<HTMLDivElement>(null)

  /**
   * Локальные сообщения
   */
  useEffect(() => {
    setTimeout(() => scrollToCurrent(chatMassageContainer), 200)
  }, [openUserIdChat, chatMassageContainer])

  const targetUser = useMemo(
    () => ALL_USERS.find(({ id }) => id === openUserIdChat),
    [openUserIdChat],
  )


  /**
   * Отправить сообщение
   * TODO: на бэке дополнить пустые свойства и сгеренровать ID
   */
  const onCreateMessage = useCallback((message: Message) => {
    dispatch(() => {
      const isFirst = allMessages[message.toUserId]
      const newMessage: DefaultObject<Message[]> = !isFirst ? (lodash.defaults(allMessages, {
        [message.toUserId]: [message],
      })) : ({
        [message.toUserId]: [...allMessages[message.toUserId], message],
      })
      return {
        allMessages: {
          ...allMessages,
          ...newMessage,
        },
      }
    })
    setTimeout(() => scrollToCurrent(chatMassageContainer), 200)
  }, [dispatch, allMessages])

  return (
    <div className={cn()}>
      <div className={cn('Header')}>
        <div className={cn('Contact')}>
          <Text className={cn('ContactUserName')}>
            {`${targetUser?.name} ${targetUser?.family}`}
          </Text>
          <Text size="1" className={cn('ContactOnline')}>
            {targetUser?.status}
          </Text>
        </div>
        <IconButton icon="headphones" fill="oldAsphalt50" className={cn('Call')} />
      </div>
      <div ref={chatMassageContainer} className={cn('MainContainer')}>
        {(allMessages[openUserIdChat] || []).map((message) => (
          <ChatMassage
            key={message.messageId}
            isWasSeen={Boolean(message.dateSeen)}
            from={currenUser?.id === message.fromUserId ? MASSAGE_FROM.ME : MASSAGE_FROM.OTHER}
            message={message}
          />
        ))}
      </div>
      <CreateChatMessage onSendMessage={onCreateMessage} currentUserId={1} targetUserId={targetUser?.id} />
    </div>
  )
}
