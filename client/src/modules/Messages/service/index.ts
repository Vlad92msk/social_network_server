import { createStoreContext } from '@shared/utils'
import { initialState } from './initialState'

export * from './initialState'

export const {
  Provider,
  useSelector: useMessagesSelector,
  useDispatch: useMessagesDispatch,
} = createStoreContext(initialState, 'Messages')
