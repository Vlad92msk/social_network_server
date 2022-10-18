import { UserType } from '@modules/App/data/user'
import { CreateHandlers } from '@public/models/serviceHandler.model'
import { ServiceState } from '.'


export const userMenuActions = {
  DEFAULT: (state) => state,
  INJECT__USER_INFO: (payload: { allUsers: UserType[], currentUser: UserType }) => ({
    payload,
    type: 'INJECT__USER_INFO',
  }),
}
export type UserMenuActions = typeof userMenuActions
export type UserMEnuActionsKeys = keyof UserMenuActions


export type HandlersType = CreateHandlers<UserMEnuActionsKeys, ServiceState, UserMenuActions>
export const handlersCreator = (): HandlersType => ({
  INJECT__USER_INFO: (state, { currentUser, allUsers }) => ({
    ...state,
    friends: allUsers.filter(({ id }) => currentUser.friends.includes(id)),
    possibleFriends: Array.from(
      new Set(state.friends.reduce((acc, item) => [...acc, ...item.friends], [])),
    ).map((possibleUserId) => allUsers.find(({ id }) => id === possibleUserId)).filter(Boolean),
    currenUser: currentUser,
  }),
  DEFAULT: (s) => s,
})
