import { ChatsItem, FriendsListItem } from '@modules/DrawerBar/components'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { IconButton } from '@shared/components/IconButton'
import { Image } from '@shared/components/Image'
import { MenuListItem, MenuListWithButton } from '@shared/components/MenuList'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { UserStatus, UserStatusEnum } from 'src/components'
import styles from 'src/modules/DrawerBar/components/ChatItem/ChatItem.module.scss'

const cn = makeCn('ChatItem', styles)

interface ChatItem {
  chats: ChatsItem
  onClickFriendItem: (friendId: number) => void
}

export const ChatItem = (props: ChatItem) => {
  const {
    chats: {
      id, name, img, lastMessage, activeCount,
    },
    onClickFriendItem,
  } = props
  return (
    <ButtonBox
      className={cn()}
      onClick={() => onClickFriendItem(id)}
    >
      <Image
        classNameContainer={cn('ImgContainer')}
        withContainer
        path={{
          moduleName: 'users',
          folder: 'photo',
          img,
        }}
        sizePriority="contain"
      />
      <div className={cn('TextContainer')}>
        <Text className={cn('FriendName')} size="2" weight="bold">{name}</Text>
        <Text className={cn('FriendName')} size="1">{lastMessage}</Text>
      </div>
      <div className={cn('FriendFastActions')}>
        <IconButton
          icon="message-square"
          fill="bluePrimrose50"
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            console.log('Написать')
          }}
        />
        <IconButton
          icon="alert-circle"
          fill="redRose40"
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            console.log('Скрыть')
          }}
        />
        <IconButton
          icon="alert-circle"
          fill="redRose40"
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            console.log('Заблокировать на 30 мин')
          }}
        />
      </div>
      <div className={cn('ActiveUsers')}>
        <div className={cn('ActiveUsersIconBox')}>
          <Icon className={cn('ActiveUsersIcon')} icon="user" fill="oldAsphalt40" size="small" />
          <span className={cn('ActiveUsersStatus')} />
        </div>
        <Text className={cn('ActiveUsersCount')} size="1">{activeCount}</Text>
      </div>
    </ButtonBox>
  )
}
