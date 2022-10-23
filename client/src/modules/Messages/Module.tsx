import lodash from 'lodash'
import React, { useMemo } from 'react'
import { useMessagesDispatch, useMessagesSelector } from '@modules/Messages/api'

import { AreaInput } from '@shared/components/AreaInput'
import { Modal } from '@shared/components/Modal'
import { useBooleanState } from '@shared/hooks'
import { makeCn } from '@shared/utils'

import { ChatContainer, ChatFolders, OpenChatButton, UsersChats } from './components'
import styles from './Module.module.scss'

const cn = makeCn('Messages', styles)


const Module: React.FC = () => {
  const newMessages = useMessagesSelector((state) => state.newMessages)
  const searchInput = useMessagesSelector((state) => state.search)
  const dispatch = useMessagesDispatch()
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
            onIconClear={() => dispatch(() => ({ search: '' }))}
            onChange={({ value }) => dispatch(() => ({ search: value }))}
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

export default Module
