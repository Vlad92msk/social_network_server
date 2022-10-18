import lodash from 'lodash'
import React, { useMemo } from 'react'
import { Friend } from '@modules/Messages/components'
import { ALL_USERS } from '@modules/UserMenu/data/all_users'

import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { useServiceMessageSelector } from '../../service'
import styles from './UsersChats.module.scss'


const cn = makeCn('UsersChats', styles)

type UsersChatsProps = {}
export const UsersChats: React.FC<UsersChatsProps> = React.memo((props) => {
  const openFolderId = useServiceMessageSelector('openFolderId')
  const folders = useServiceMessageSelector('folders')
  const search = useServiceMessageSelector('search')

  const allFriends = useMemo(() => lodash.uniq(Object.values(folders).map(({ friends }) => friends).flat()), [folders])
  const allNoFriends = useMemo(() => lodash.uniq(Object.values(folders).map(({ noFriends }) => noFriends).flat()), [folders])

  /**
   * Если папка выбрана - показываем чаты из нее, если нет - все чаты
   */
  const friends = useMemo(
    () => folders && lodash(openFolderId ? folders[openFolderId].friends : allFriends)
      .map((id) => ALL_USERS.find(({ id: userId }) => userId === id))
      .filter(({ name, family }) => `${name + family}`.includes(search))
      .value(),
    [folders, openFolderId, allFriends, search],
  )

  const noFriends = useMemo(
    () => lodash(ALL_USERS)
      .filter(({ id }) => allNoFriends.includes(id))
      .value(),
    [allNoFriends],
  )

  return (
    <div className={cn()}>
      {
        Boolean(friends.length) && (
          <>
            <Text className={cn('Title')} size="1">{openFolderId ? 'Чаты с друзьями' : 'Все чаты'}</Text>
            {friends.map((friend) => (
              <Friend key={friend.id} friend={friend} />
            ))}
          </>
        )
}
      {Boolean(noFriends.length) && (
        <>
          <Text className={cn('Title')} size="1">Чаты не с друзьями</Text>
          {noFriends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
          ))}
        </>
      )}
    </div>
  )
})
