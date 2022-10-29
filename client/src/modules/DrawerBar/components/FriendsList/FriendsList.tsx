import { useCallback, useState } from 'react'
import { makeCn } from '@shared/utils'
import { FriendItem } from '..'
import styles from './FriendsList.module.scss'

const cn = makeCn('FriendsList', styles)

export interface FriendsListItem{
  id: number
  name: string
  img: string
}

const friendsListItems: FriendsListItem[] = [
  { id: 1, name: 'Jack', img: '1' },
  { id: 2, name: 'Denis', img: '1' },
  { id: 3, name: 'John', img: '1' },
  { id: 4, name: 'Carl', img: '1' },
  { id: 5, name: 'Mike', img: '1' },
  { id: 6, name: 'Elvis', img: '1' },
  { id: 7, name: 'Elvis', img: '1' },
  { id: 8, name: 'Elvis', img: '1' },
  { id: 9, name: 'Elvis', img: '1' },
  { id: 10, name: 'Elvis', img: '1' },
  { id: 11, name: 'Elvis', img: '1' },
  { id: 12, name: 'Elvis', img: '1' },
  { id: 13, name: 'Elvis', img: '1' },
  { id: 14, name: 'Elvis', img: '1' },
  { id: 15, name: 'Elvis', img: '1' },
]

export const FriendsList = () => {
  const [active, setActive] = useState(1)
  const handleClickFriend = useCallback((friendId: number) => {
    console.log(`Кликнул по пользователю ${friendId}`)
    setActive(friendId)
  }, [])
  return (
    <div className={cn()}>
      {friendsListItems.map((friend) => (
        <FriendItem
          key={friend.id}
          friend={friend}
          onClickFriendItem={handleClickFriend}
          isActive={active === friend.id}
        />
      ))}
    </div>
  )
}
