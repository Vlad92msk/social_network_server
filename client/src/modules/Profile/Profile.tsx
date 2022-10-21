import { entries } from 'lodash'
import React, { useState } from 'react'
import { PROFILE_LAYOUTS, profileLayouts } from '@modules/Profile/data/tabs'

import { IconButton } from '@shared/components/IconButton'
import { makeCn } from '@shared/utils'

import styles from './Profile.module.scss'


const cn = makeCn('Profile', styles)


export const Profile: React.FC = () => {
  const [layoutActive, setLayoutActive] = useState(profileLayouts.WALL)
  return (
    <div className={cn()}>
      <div className={cn('LayoutContainer')}>
        {
        PROFILE_LAYOUTS[layoutActive].component
      }
      </div>
      <div className={cn('Buttons')}>
        {entries(PROFILE_LAYOUTS).map(([key, { icon, activeLayout }]) => (
          <IconButton
            fill="oldAsphalt50"
            key={key}
            icon={icon}
            onClick={() => setLayoutActive(activeLayout)}
          />
        ))}
      </div>
    </div>
  )
}
