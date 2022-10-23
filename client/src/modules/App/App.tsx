import React from 'react'
import { USER } from '@modules/App/data/user'
import { Messages } from '@modules/Messages'
import { NavBar } from '@modules/NavBar'
import { Profile } from '@modules/Profile'
import { UserMenu } from '@modules/UserMenu'
import { Section } from '@shared/components/Section'
import { makeCn } from '@shared/utils'
import styles from './App.module.scss'

const cn = makeCn('Application', styles)


export const App: React.FC = () => (
  <>
    <Section
      className={cn()}
      noPaddingRight
      bcgImg={{
        path: {
          img: 'bkg',
          project: 'social',
        },
      }}
    >
      <UserMenu
        state={{
          currenUser: USER,
        }}
      />
      {/* <ServiceUserMenu /> */}
      <Profile />
    </Section>
    <Messages />
  </>
)
