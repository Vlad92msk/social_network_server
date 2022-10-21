import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DefaultObject } from '@public/models/defaultObject.model'

import { IconButton } from '@shared/components/IconButton'
import { Text } from '@shared/components/Text'
import { useReplaceRouterQuery } from '@shared/hooks'
import { makeCn } from '@shared/utils'
import styles from './ProfileContainer.module.scss'


const cn = makeCn('ProfileContainer', styles)


export enum PROFILE_LAYOUTS {
  WALL = 'wall',
  PHOTO = 'photo',
  VIDEO = 'video',
  WORK = 'work',
  ABOUT_ME = 'about_me'
}

const TABS = [
  {
    id: 1,
    activeLayout: PROFILE_LAYOUTS.ABOUT_ME,
    title: 'Обо мне',
  },
  {
    id: 2,
    activeLayout: PROFILE_LAYOUTS.WALL,
    title: 'Стена',
  },
  {
    id: 3,
    activeLayout: PROFILE_LAYOUTS.PHOTO,
    title: 'Фото',
  },
  {
    id: 4,
    activeLayout: PROFILE_LAYOUTS.VIDEO,
    title: 'Видео',
  },
  {
    id: 5,
    activeLayout: PROFILE_LAYOUTS.WORK,
    title: 'Работа',
  },
]


type ProfileContainerProps = {
  tabs: DefaultObject<any>
  tabActions: DefaultObject<any>
}
export const ProfileContainer: React.FC<ProfileContainerProps> = React.memo((props) => {
  const { tabs, tabActions } = props
  const { query } = useRouter()

  const checkWall = useReplaceRouterQuery({ layout: PROFILE_LAYOUTS.WALL }, ['isEditing'])
  const checkVideo = useReplaceRouterQuery({ layout: PROFILE_LAYOUTS.VIDEO }, ['isEditing'])
  const checkPhoto = useReplaceRouterQuery({ layout: PROFILE_LAYOUTS.PHOTO }, ['isEditing'])
  const checkWork = useReplaceRouterQuery({ layout: PROFILE_LAYOUTS.WORK }, ['isEditing'])
  const checkAboutMe = useReplaceRouterQuery({ layout: PROFILE_LAYOUTS.ABOUT_ME }, ['isEditing'])


  const tabsChangeLayout = useMemo(() => ({
    wall: checkWall,
    video: checkVideo,
    photo: checkPhoto,
    work: checkWork,
    about_me: checkAboutMe,
  }), [])


  /**
   * По умолчанию открыта стена
   */
  useEffect(() => {
    if (!query.layout) {
      checkWall()
    }
  }, [checkWall, query])


  return (
    <div className={cn()}>
      <div className={cn('TabButtons')}>
        {TABS.map(({ activeLayout, title, id }) => (
          <Text
            key={id}
            size="4"
            textTransform="uppercase"
            data-active={query.layout === activeLayout}
            onClick={tabsChangeLayout[activeLayout]}
          >
            {title}
          </Text>
        ))}
      </div>
      <div className={cn('Container')}>
        {tabs[query.layout as PROFILE_LAYOUTS]}
      </div>
    </div>
  )
})
