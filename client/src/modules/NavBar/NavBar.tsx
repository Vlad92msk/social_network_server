import React from 'react'

import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Text } from '@shared/components/Text'
import { useReplaceRouterUrl } from '@shared/hooks/useRouterPush'
import { makeCn } from '@shared/utils'
import styles from './NavBar.module.scss'

const cn = makeCn('NavBar', styles)

export const USER_ID = 1

type NavBarType = {
  pathname: string
}
export const NavBar: React.FC<NavBarType> = React.memo(({ pathname }) => {
  const layout = pathname.split('/')[4]
  const [handleGoProfile] = useReplaceRouterUrl(layout, '')
  const [handleGoPhoto] = useReplaceRouterUrl(layout, '')
  const [handleGoVideo] = useReplaceRouterUrl(layout, '')
  const [handleGoGroups] = useReplaceRouterUrl(layout, '')
  const [handleGoMusic] = useReplaceRouterUrl(layout, '')

  return (
    <section className={cn()}>
      <nav className={cn('Nav')}>
        <ul>
          <li>
            <ButtonBox onClick={handleGoProfile}>
              <Icon
                className={cn('Icon', { active: false })}
                size="medium"
                icon="person"
              />
              <Text
                className={cn('Text', { active: false })}
                textTransform="uppercase"
                size="5"
              >
                Профиль
              </Text>
            </ButtonBox>
          </li>
          <li>
            <ButtonBox onClick={handleGoPhoto}>
              <Icon
                className={cn('Icon', { active: false })}
                size="medium"
                icon="photo"
              />
              <Text
                className={cn('Text', { active: false })}
                textTransform="uppercase"
                size="5"
              >
                Фото
              </Text>
            </ButtonBox>
          </li>
          <li>
            <ButtonBox onClick={handleGoVideo}>
              <Icon
                className={cn('Icon', { active: false })}
                size="medium"
                icon="video"
              />
              <Text
                className={cn('Text', { active: false })}
                textTransform="uppercase"
                size="5"
              >
                Видео
              </Text>
            </ButtonBox>
          </li>
          <li>
            <ButtonBox onClick={handleGoGroups}>
              <Icon
                className={cn('Icon', { active: false })}
                size="medium"
                icon="groups"
              />
              <Text
                className={cn('Text', { active: false })}
                textTransform="uppercase"
                size="5"
              >
                Группы
              </Text>
            </ButtonBox>
          </li>
          <li>
            <ButtonBox onClick={handleGoMusic}>
              <Icon
                className={cn('Icon', { active: false })}
                size="medium"
                icon="music"
              />
              <Text
                className={cn('Text', { active: false })}
                textTransform="uppercase"
                size="5"
              >
                Музыка
              </Text>
            </ButtonBox>
          </li>
        </ul>
      </nav>
    </section>
  )
})
