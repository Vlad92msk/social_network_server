import { Profile } from '@modules/Profile'
import React, { PropsWithChildren } from 'react'
import { ServiceMessage } from '@modules/Messages/service'
import { NavBar } from '@modules/NavBar'
import { ServiceUserMenu } from '@modules/UserMenu/service'
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
      <ServiceUserMenu />
      <Profile />
       <NavBar />
    </Section>
    {/*<ServiceMessage />*/}
  </>
)



