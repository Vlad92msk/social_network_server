import { makeCn } from '@shared/utils'
import styles from './Module.module.scss'

const cn = makeCn('Main', styles)

const Module = () => (
  <div className={cn()}>
    body
  </div>
)

export default Module
