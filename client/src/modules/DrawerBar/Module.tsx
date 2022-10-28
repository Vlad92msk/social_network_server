import { useState } from 'react'
import { Section } from '@shared/components/Section'
import { TextInput } from '@shared/components/TextInput'
import { makeCn } from '@shared/utils'
import { Footer, FriendsList, Header } from './components'
import styles from './Module.module.scss'

const cn = makeCn('DrawerBar', styles)

const Module = () => {
  const [search, setSearch] = useState('')
  return (
    <Section
      className={cn()}
      imgClassName={cn('Img')}
      bcgImg={{
        path: {
          moduleName: 'app',
          folder: 'bcg',
          img: 'drawBar1',
        },
      }}
    >
      <Header />
      <TextInput value={search} onChange={(v) => setSearch(v)} />
      <FriendsList />
      <Footer />
    </Section>
  )
}

export default Module
