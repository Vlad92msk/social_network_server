import { useCreateService } from '@shared/hooks/useCreateService'
import React, { useEffect } from 'react'
import { Comments, CommentsProps } from '@modules/Comments'
import { LocalStorageEnum } from '@public/models/localStorage'
import { storageGet } from '@shared/utils'
import { COMMENTS } from '../data/comments.data'
import { ContextService } from './context'
import { commentsActions, handlersCreator, HandlersType } from './handlers'
import { Reactions, reactions } from './reactions'
import { initial, ServiceState } from '.'


interface ServiceCommentsProps {
  serviceName: string
  provideProps: CommentsProps
}

export const ServiceComments: React.FC<ServiceCommentsProps> = (props) => {
  const { serviceName, provideProps } = props
  const userInfo = storageGet(LocalStorageEnum.CURRENT_USER)
  const [dispatch, store] = useCreateService<ServiceState, HandlersType, Reactions>({
    handlersCreator,
    reactions,
    initial,
    serviceName,
    deps: [Boolean(userInfo)],
  })

  useEffect(() => {
    dispatch(commentsActions.INJECT__ENTITY_ID({
      entityId: provideProps.id,
    }))
  }, [dispatch, provideProps])

  useEffect(() => {
    dispatch(commentsActions.INJECT__COMMENTS({
      comments: COMMENTS,
    }))
  }, [dispatch])


  return (
    <ContextService.Provider value={{ store, dispatch }}>
      {store.isServiceRunning && (<Comments {...provideProps} />)}
    </ContextService.Provider>
  )
}
