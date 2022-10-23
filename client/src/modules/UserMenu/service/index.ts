import { createStoreContext } from '@shared/utils'
import { initialState } from './initialState'

export * from './initialState'

export const {
  Provider,
  useSelector: useUserMenuSelector,
  useDispatch: useUserMenuDispatch,
} = createStoreContext(initialState, 'UserMenu')
