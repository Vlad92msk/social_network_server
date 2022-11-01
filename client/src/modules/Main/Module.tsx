import { makeCn } from '@shared/utils'
import styles from './Module.module.scss'
import { Photo } from './sections'

const cn = makeCn('Main', styles)

const Module = () => (
  <div className={cn()}>
    <Photo />
  </div>
)

export default Module
