import { UserType } from '@modules/App/data/user'

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
