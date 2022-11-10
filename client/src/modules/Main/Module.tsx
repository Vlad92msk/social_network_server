import { makeCn } from '@shared/utils'
import styles from './Module.module.scss'
import { Photo, Video, WithMe } from './sections'

const cn = makeCn('Main', styles)

const Module = () => (
  <div className={cn()}>
    <WithMe />
    <Photo />
    <Video />
  </div>
)

export default Module
