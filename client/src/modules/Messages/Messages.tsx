import lodash from 'lodash'
import React, { useEffect, useMemo } from 'react'

import { AreaInput } from '@shared/components/AreaInput'
import { Modal } from '@shared/components/Modal'
import { useBooleanState } from '@shared/hooks'
import { makeCn } from '@shared/utils'

import { ChatContainer, ChatFolders, OpenChatButton, UsersChats } from './components'
import styles from './Messages.module.scss'
import { messageActions, useServiceMessageAction, useServiceMessageSelector } from './service'

const cn = makeCn('Messages', styles)


export const Messages: React.FC = () => {
  const newMessages = useServiceMessageSelector('newMessages')
  const searchInput = useServiceMessageSelector('search')
  const dispatch = useServiceMessageAction()
  const [isOpen, handleOpen, handleClose] = useBooleanState(false)
  /**
   * КОл-во новых сообщений
   */
  const newMessagesSize = useMemo(() => (
    lodash(newMessages)
      .reduce((acc, item) => acc + lodash.size(item), 0)
  ), [newMessages])

  return (
    <>
      <OpenChatButton onOpen={handleOpen} messageCount={newMessagesSize} />
      <Modal className={cn()} backgroundImg="bkg" open={isOpen} onClose={handleClose}>
        <div className={cn('LeftMenu')}>
          <ChatFolders />
        </div>
        <div className={cn('PrevChats')}>
          <AreaInput
            as="input"
            inputClassName={cn('SearchInput')}
            icon={{
              size: 'ordinary',
              icon: 'search',
              fill: 'oldAsphalt40',
            }}
            iconClear={{
              icon: 'close',
              size: 'ordinary',
              fill: 'oldAsphalt40',
            }}
            onIconClear={() => dispatch(messageActions.SEARCH__CHAT({ value: '' }))}
            onChange={({ value }) => dispatch(messageActions.SEARCH__CHAT({ value }))}
            value={searchInput}
          />
          <UsersChats />
        </div>
        <div className={cn('CurrentChat')}>
          <ChatContainer />
        </div>
      </Modal>
    </>
  )
}
