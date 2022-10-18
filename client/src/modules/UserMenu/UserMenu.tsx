import React from 'react'
import { Button } from '@shared/components/Button'
import { ButtonBox } from '@shared/components/ButtonBox'
import { IconButton } from '@shared/components/IconButton'
import { Image } from '@shared/components/Image'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { StatisticBox } from './components'
import { useServiceUserMenuSelector } from './service'
import styles from './UserMenu.module.scss'

const cn = makeCn('UserMenu', styles)


export const UserMenu: React.FC = () => {
  const {
    img,
    family,
    hashName,
    name,
    id,
    status,
  } = useServiceUserMenuSelector('currenUser')


  return (
    <section className={cn()}>
      <div className={cn('UserRow')}>
        <div className={cn('UserFIO')}>
          <Text className={cn('UserName')} size="8" weight="medium">{`${family} ${name}`}</Text>
          <IconButton fill="oldAsphalt50" size="ordinary" icon="settings-2" />
        </div>
        <div className={cn('Row')}>
          <ButtonBox className={cn('UserStatus')}>
            <span className={cn('UserStatusDot', { status })} />
            <Text className={cn('UserStatusText')} size="2">{status}</Text>
          </ButtonBox>
          {/* eslint-disable-next-line react/no-children-prop */}
          <Text className={cn('Hash')} size="2" children={`#${hashName}`} />
        </div>
      </div>
      <div className={cn('User')}>
        <StatisticBox />
        <div className={cn('Photo')}>
          <Image sizePriority="contain" path={{ project: 'social', img }} />
        </div>
        {id !== 1 && (
        <div className={cn('Actions')}>
          <Button styleType="rounded" color="blue" icon="message-square" iconPosition="left">
            <Text size="2">Написать</Text>
          </Button>
          <Button styleType="rounded" color="red" icon="plus" iconPosition="left">
            <Text size="2">Добавить</Text>
          </Button>
        </div>
        )}
      </div>
    </section>
  )
}
