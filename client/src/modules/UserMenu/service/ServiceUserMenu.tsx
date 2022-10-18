import React, { useEffect } from 'react'
import { USER } from '@modules/App/data/user'
import { ALL_USERS } from '@modules/UserMenu/data/all_users'
import { useCreateService } from '@shared/hooks/useCreateService'
import { UserMenu } from '../UserMenu'
import { ContextService } from './context'
import { handlersCreator, HandlersType, userMenuActions } from './handlers'
import { Reactions, reactions } from './reactions'
import { initial, ServiceState } from '.'


export const ServiceUserMenu: React.FC = () => {
  const [dispatch, store] = useCreateService<ServiceState, HandlersType, Reactions>({
    handlersCreator,
    reactions,
    initial,
    serviceName: 'UserMenu',
  })

  useEffect(() => {
    dispatch(userMenuActions.INJECT__USER_INFO({
      currentUser: USER,
      allUsers: ALL_USERS,
    }))
  }, [dispatch])

  return (
    <ContextService.Provider value={{ store, dispatch }}>
      <UserMenu />
    </ContextService.Provider>
  )
}
