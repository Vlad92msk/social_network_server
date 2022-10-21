import { USER } from '@modules/App/data/user'
import { USER_ID } from '@modules/NavBar'
import { PHOTO_ALBUMS } from '@modules/Profile/data/photoAlbums.data'
import { PHOTO_ITEMS } from '@modules/Profile/data/photoItems.data'
import { VIDEO_ALBUMS } from '@modules/Profile/data/videoAlbums.data'
import { VIDEO_ITEMS } from '@modules/Profile/data/videoItems.data'
import { IconName } from '@public/models/icon.model'
import {
  DigitalCardType,
  ProfileLayoutAboutMe,
  ProfileLayoutDigital,
  ProfileLayoutWall,
} from '../components'

export enum profileLayouts {
  WALL = 'wall',
  PHOTO = 'photo',
  VIDEO = 'video',
  WORK = 'work',
  ABOUT_ME = 'about_me'
}

export interface ProfileLayout {
  id: number,
  activeLayout: profileLayouts,
  title: string,
  icon: IconName
  component: any
}

export const PROFILE_LAYOUTS: Record<profileLayouts, ProfileLayout> = {
  [profileLayouts.WALL]: {
    id: 2,
    activeLayout: profileLayouts.WALL,
    title: 'Стена',
    icon: 'award',
    component: <ProfileLayoutWall userId={USER_ID} />,
  },
  [profileLayouts.PHOTO]: {
    id: 3,
    activeLayout: profileLayouts.PHOTO,
    title: 'Фото',
    icon: 'photo',
    component: <ProfileLayoutDigital
      type={DigitalCardType.PHOTO}
      allItems={PHOTO_ITEMS}
      userId={USER_ID}
      albums={PHOTO_ALBUMS}
    />,
  },
  [profileLayouts.VIDEO]: {
    id: 4,
    activeLayout: profileLayouts.VIDEO,
    title: 'Видео',
    icon: 'video',
    component: <ProfileLayoutDigital
      type={DigitalCardType.VIDEO}
      allItems={VIDEO_ITEMS}
      userId={USER_ID}
      albums={VIDEO_ALBUMS}
    />,
  },
  [profileLayouts.WORK]: {
    id: 5,
    activeLayout: profileLayouts.WORK,
    title: 'Работа',
    icon: 'exit',
    component: <div>work</div>,
  },
  [profileLayouts.ABOUT_ME]: {
    id: 1,
    activeLayout: profileLayouts.ABOUT_ME,
    title: 'Обо мне',
    icon: 'person',
    component: <ProfileLayoutAboutMe userInfo={USER} />,
  },
}
