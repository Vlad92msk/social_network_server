import React, { useCallback } from 'react'
import { StatisticButton } from '@modules/UserMenu/components'
import { useServiceUserMenuSelector } from '@modules/UserMenu/service'
import { NavigationDrawer } from '@shared/components/NavigationDrawer'
import { useBooleanState } from '@shared/hooks'
import { makeCn } from '@shared/utils'
import { UserSmall } from 'src/components'

import styles from './StatisticButtons.module.scss'

const cn = makeCn('ButtonContacts', styles)

type ButtonContactsProps = {}
export const ButtonContacts: React.FC<ButtonContactsProps> = (props) => {
  const friends = useServiceUserMenuSelector('friends')
  const [isOpen, setOpen, setClose] = useBooleanState(false)


  return (
    <>
      <StatisticButton
        text="Контактов"
        onOpen={setOpen}
        icon="friends"
        count={friends?.length || 0}
      />
      <NavigationDrawer
        isOpen={isOpen}
        onClose={setClose}
        className={cn('Friends')}
      >
        {friends?.map(({ id, name, family, img, status }) => (
          <div key={id} className={cn('UserStatus')}>
            <UserSmall img={img} userName={name + family} status={status} />
          </div>
        ))}
      </NavigationDrawer>
    </>
  )
}
