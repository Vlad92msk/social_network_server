import React from 'react'

import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { UserType } from '../../../App/data/user'
import { UserInfo } from '../../../UserMenu/components'
import styles from './ProfileLayoutAboutMe.module.scss'

const cn = makeCn('ProfileLayoutAboutMe', styles)


export type ProfileLayoutAboutMeProps = {
  userInfo: UserType
}

export const ProfileLayoutAboutMe: React.FC<ProfileLayoutAboutMeProps> = (props) => {
  const { userInfo } = props
  const { family, name, hashName, description, baseInformation, professionalInformation } = userInfo
  return (
    <div className={cn()}>
      <Text className={cn('Description')}>{description}</Text>
      <UserInfo
        baseInformation={baseInformation}
        professionalInformation={professionalInformation}
      />
    </div>
  )
}
