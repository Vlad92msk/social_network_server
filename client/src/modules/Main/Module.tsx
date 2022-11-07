import { Video } from '@modules/Main/sections/video/Video'
import { makeCn } from '@shared/utils'
import styles from './Module.module.scss'
import { Photo } from './sections'

const cn = makeCn('Main', styles)

const Module = () => (
  <div className={cn()}>
    <Photo />
    <Video />
  </div>
)

export default Module
