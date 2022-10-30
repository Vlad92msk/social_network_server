import { FriendsListItem } from '@modules/DrawerBar/components'
import { ButtonBox } from '@shared/components/ButtonBox'
import { IconButton } from '@shared/components/IconButton'
import { Image } from '@shared/components/Image'
import { MenuListItem, MenuListWithButton } from '@shared/components/MenuList'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { IMGPreview, UserStatus, UserStatusEnum } from 'src/components'
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
      <IMGPreview moduleName="users" folder="photo" img={img} />
      <div className={cn('TextContainer')}>
        <Text className={cn('FriendName')}>{name}</Text>
        <div className={cn('Main')}>
          <UserStatus status={UserStatusEnum.ONLINE} />
          <div className={cn('MainContainer')}>
            <IconButton
              icon="alert-circle"
              fill="redRose40"
              size="small"
              onClick={(e) => {
                e.stopPropagation()
                console.log('Оповестить')
              }}
            />
            <IconButton
              className={cn('Message')}
              icon="message-square"
              fill="bluePrimrose50"
              size="small"
              onClick={(e) => {
                e.stopPropagation()
                console.log('Написать')
              }}
            />
            <Text className={cn('LastTime')} size="1" color="body">
              13:42
            </Text>
          </div>
        </div>
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
