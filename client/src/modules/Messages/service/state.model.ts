import { Message } from '@modules/Messages/data/messages'
import { DefaultObject } from '@public/models/defaultObject.model'
import { Service } from '@public/models/service'
import { FoldersChat } from '../data/foldersChats'

export interface FoldersUI extends FoldersChat {
  friends: number[]
  noFriends: number[]
}

export type FoldersUIObject = DefaultObject<FoldersUI>
export interface ServiceState extends Service {
  folders?: FoldersUIObject
  allMessages?: DefaultObject<Message[]>
  newMessages?: DefaultObject<Message[]>
  openFolderId?: number
  openUserIdChat?: number
  search?: string
  pokemons?: any
}


export const initial: ServiceState = {
  folders: {},
  allMessages: {},
  newMessages: {},
  openFolderId: null,
  openUserIdChat: 3,
  search: '',
  pokemons: null
}
