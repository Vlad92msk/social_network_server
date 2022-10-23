import { FoldersChat } from '@modules/Messages/data/foldersChats'
import { Message } from '@modules/Messages/data/messages'
import { DefaultObject } from '@public/models/defaultObject.model'
import { Service } from '@public/models/service'

export interface FoldersUI extends FoldersChat {
  friends: number[]
  noFriends: number[]
}

export type FoldersUIObject = DefaultObject<FoldersUI>
export interface StateModule extends Service {
  folders?: FoldersUIObject
  allMessages?: DefaultObject<Message[]>
  newMessages?: DefaultObject<Message[]>
  openFolderId?: number
  openUserIdChat?: number
  search?: string
}


export const initialState: StateModule = {
  folders: {},
  allMessages: {},
  newMessages: {},
  openFolderId: null,
  openUserIdChat: 3,
  search: '',
}
