import { FriendsListItem } from '@modules/DrawerBar/components'
import { ButtonBox } from '@shared/components/ButtonBox'
import { IconButton } from '@shared/components/IconButton'
import { Image } from '@shared/components/Image'
import { MenuListItem, MenuListWithButton } from '@shared/components/MenuList'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { UserStatus, UserStatusEnum } from 'src/components'
import styles from './FriendItem.module.scss'

const cn = makeCn('FriendItem', styles)

interface FriendItem {
  friend: FriendsListItem
  isActive: boolean
  onClickFriendItem: (friendId: number) => void
}

export const FriendItem = (props: FriendItem) => {
  const {
    friend: {
      id,
      name,
      img,
    },
    isActive,
    onClickFriendItem,
  } = props
  return (
    <ButtonBox
      className={cn({ active: isActive })}
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
        <Text className={cn('FriendName')}>{name}</Text>
        <UserStatus status={UserStatusEnum.ONLINE} />
      </div>
      <div className={cn('FriendFastActions')}>
        <IconButton
          icon="message-square"
          fill="bluePrimrose50"
          size="ordinary"
          onClick={(e) => {
            e.stopPropagation()
            console.log('Написать')
          }}
        />
        <IconButton
          icon="alert-circle"
          fill="redRose40"
          size="ordinary"
          onClick={(e) => {
            e.stopPropagation()
            console.log('Оповестить')
          }}
        />
      </div>
      <MenuListWithButton classNameButton={cn('MenuButton')}>
        <MenuListItem
          className={cn('ListItem')}
          text="Удалить"
          onClick={() => console.log('Удалить')}
        />
        <MenuListItem
          className={cn('ListItem')}
          text="Заблокировать"
          onClick={() => console.log('Заблокировать')}
        />
        <MenuListItem
          className={cn('ListItem')}
          text="Скрыться"
          onClick={() => console.log('Скрыться')}
        />
      </MenuListWithButton>
    </ButtonBox>
  )
}
