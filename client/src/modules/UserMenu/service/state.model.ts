import { UserType } from '@modules/App/data/user'

export type ServiceState = {
  friends?: UserType[]
  possibleFriends?: UserType[]
  currenUser?: UserType
  notification?: any
  hashes?: any
}

export const initial: ServiceState = {
  friends: [],
  possibleFriends: [],
  currenUser: {},
  notification: null,
  hashes: null
}
