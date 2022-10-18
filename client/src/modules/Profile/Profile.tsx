import React from 'react'

import { IconButton } from '@shared/components/IconButton'
import { useReplaceRouterQuery } from '@shared/hooks'
import { makeCn } from '@shared/utils'
import { USER } from '../App/data/user'
import { USER_ID } from '../NavBar'
import {
  DigitalCardType,
  ProfileContainer,
  ProfileLayoutAboutMe,
  ProfileLayoutDigital,
  ProfileLayoutWall,
} from './components'
import { PHOTO_ALBUMS } from './data/photoAlbums.data'
import { PHOTO_ITEMS } from './data/photoItems.data'
import { VIDEO_ALBUMS } from './data/videoAlbums.data'
import { VIDEO_ITEMS } from './data/videoItems.data'
import styles from './Profile.module.scss'


const cn = makeCn('Profile', styles)


export const Profile: React.FC = () => {
  const openWallEdit = useReplaceRouterQuery({ isEditing: 'true' })
  const closeWallEdit = useReplaceRouterQuery({}, ['isEditing'])

  return (
    <ProfileContainer
      tabs={{
        wall: (
          <ProfileLayoutWall userId={USER_ID} onCloseWallEditing={closeWallEdit} />
        ),
        video: (
          <ProfileLayoutDigital
            type={DigitalCardType.VIDEO}
            allItems={VIDEO_ITEMS}
            userId={USER_ID}
            albums={VIDEO_ALBUMS}
          />
        ),
        photo: (
          <ProfileLayoutDigital
            type={DigitalCardType.PHOTO}
            allItems={PHOTO_ITEMS}
            userId={USER_ID}
            albums={PHOTO_ALBUMS}
          />
        ),
        about_me: (
          <ProfileLayoutAboutMe
            userInfo={USER}
          />
        ),
        work: <div>work</div>,
      }}

      tabActions={{
        wall: (
          <IconButton icon="wright" size="ordinary" fill="redRose40" onClick={openWallEdit} />
        ),
        video: (
          <>
          </>
        ),
        photo: (
          <>
          </>
        ),
        work: (
          <>
          </>
        ),
        about_me: (
          <>
          </>
        ),
      }}
    />
  )
}
