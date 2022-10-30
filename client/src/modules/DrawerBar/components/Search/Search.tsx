import { useState } from 'react'
import { TextInput } from '@shared/components/TextInput'
import { makeCn } from '@shared/utils'
import styles from './Search.module.scss'

const cn = makeCn('Search', styles)

export const Search = () => {
  const [search, setSearch] = useState('')
  return (
    <div className={cn()}>
      <TextInput
        className={cn('Input')}
        icon="search"
        value={search}
        onChange={(v) => setSearch(v)}
      />
    </div>
  )
}
