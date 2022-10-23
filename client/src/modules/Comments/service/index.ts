import { createStoreContext } from '@shared/utils'
import { initialState } from './initialState'

export * from './initialState'

export const {
  Provider,
  useSelector: useCommentsSelector,
  useDispatch: useCommentsDispatch,
} = createStoreContext(initialState, 'Comments')
