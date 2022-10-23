import { UserType } from '@modules/App/data/user'
import { createStoreContext } from '@shared/utils'

export type StateModule = {
  friends?: UserType[]
  possibleFriends?: UserType[]
  currenUser?: UserType
  notification?: any
  hashes?: any
}

export const initialState: StateModule = {
  friends: [],
  possibleFriends: [],
  currenUser: {},
  notification: null,
  hashes: null,
}

export const {
  Provider,
  useStore: useStoreUserMenu,
  useSelector: useUserMenuSelector,
  useDispatch: useUserMenuDispatch,
} = createStoreContext(initialState)
