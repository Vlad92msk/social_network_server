import React, { PropsWithChildren } from 'react'
import { ServiceMessage } from '@modules/Messages/service'
import { NavBar } from '@modules/NavBar'
import { ServiceUserMenu } from '@modules/UserMenu/service'
import { Section } from '@shared/components/Section'
import { makeCn } from '@shared/utils'
import styles from './App.module.scss'

const cn = makeCn('Application', styles)

interface AppType extends PropsWithChildren {
  pathname: string
}
export const App: React.FC<AppType> = React.memo(({ children, pathname }) => (
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
      <div className={cn('Gap')} />
      <ServiceUserMenu />
      {children}
      <NavBar pathname={pathname} />
    </Section>
    <ServiceMessage />
  </>
), (a, b) => a.pathname === b.pathname)
