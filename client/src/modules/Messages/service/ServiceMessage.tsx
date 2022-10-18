import React, { useEffect } from 'react'
import { USER } from '@modules/App/data/user'
import { FOLDERS_CHATS } from '@modules/Messages/data/foldersChats'
import { LocalStorageEnum } from '@public/models/localStorage'
import { useCreateService } from '@shared/hooks/useCreateService'
import { storageGet } from '@shared/utils'
import { Message, MESSAGES } from '../../UserMenu/data/messages'
import { Messages } from '../Messages'
import { ContextService } from './context'
import { handlersCreator, HandlersType, messageActions } from './handlers'
import { Reactions, reactions } from './reactions'
import { initial, ServiceState } from '.'


export const ServiceMessage: React.FC = () => {
  const userInfo = storageGet(LocalStorageEnum.USER) as any
  const [dispatch, store] = useCreateService<ServiceState, HandlersType, Reactions>({
    handlersCreator,
    reactions,
    initial,
    serviceName: 'Message',
    deps: [Boolean(userInfo)],
  })
  useEffect(() => {
    dispatch(messageActions.INJECT__MESSAGE_API({
      allMessages: MESSAGES,
    }))
  }, [dispatch])

  useEffect(() => {
    if (USER?.friends.length) {
      dispatch(messageActions.INJECT__FOLDERS_API({
        folders: FOLDERS_CHATS,
      }))
    }
  }, [dispatch])

  return (
    <ContextService.Provider value={{ store, dispatch }}>
      {store.isServiceRunning && (<Messages />)}
    </ContextService.Provider>
  )
}
