import { useState } from 'react'
import { ChatItem } from '@modules/DrawerBar/components'
import { Button } from '@shared/components/Button'
import { Image } from '@shared/components/Image'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import styles from './Footer.module.scss'

const cn = makeCn('Footer', styles)

export interface ChatsItem {
  id: number
  name: string
  img: string
  lastMessage: string
  activeCount: number
}

const chats: ChatsItem[] = [
  { id: 1, name: 'Шашлыки 2022', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 2, name: 'ДР Ванька', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 3, name: 'МЭШ', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 4, name: 'WOT Team', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 5, name: 'Группа 1', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 6, name: 'Группа 2', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 7, name: 'Группа 3', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 8, name: 'Группа 4', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 9, name: 'Группа 5', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 10, name: 'Группа 6', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
  { id: 11, name: 'Группа 7', img: '1', lastMessage: 'lastMessage', activeCount: 4 },
]


export const Footer = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn({ open })}>
      <div className={cn('Title')} onClick={() => setOpen((prev) => !prev)}>
        <Text color="title">Чаты</Text>
        <div className={cn('UserPreview')}>
          <Image
            classNameContainer={cn('UserPreviewImg')}
            withContainer
            path={{
              moduleName: 'users',
              folder: 'photo',
              img: '1',
            }}
          />
          <Image
            classNameContainer={cn('UserPreviewImg')}
            withContainer
            path={{
              moduleName: 'users',
              folder: 'photo',
              img: '1',
            }}
          />
          <span className={cn('UsersPlus')}>
            <Text size="1" color="note">+6</Text>
          </span>
        </div>
      </div>
      <div className={cn('ChatsContainer')}>
        {chats?.map((chat) => (
          <ChatItem key={chat.id} onClickFriendItem={() => 1} chats={chat} />
        ))}
      </div>
    </div>
  )
}
