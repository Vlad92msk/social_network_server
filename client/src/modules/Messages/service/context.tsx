import { createContext, useContextSelector } from 'use-context-selector'
import { Action } from '@shared/utils/reducer'
import { messageActions } from './handlers'
import { initial, ServiceState } from '.'

type ContextService = {
  store: ServiceState
  dispatch: (action: Action) => void
}
export const ContextService = createContext<ContextService>({
  store: initial,
  dispatch: messageActions.DEFAULT,
})


export const useServiceMessageSelector = <T extends keyof ServiceState>(where: T): ServiceState[T] => (
  useContextSelector<ContextService, ServiceState[T]>(ContextService, (store) => store.store[where])
)
/**
 * TODO: типизировать
 */
export const useServiceMessageAction = () => (
  useContextSelector(ContextService, (store) => store.dispatch)
)
