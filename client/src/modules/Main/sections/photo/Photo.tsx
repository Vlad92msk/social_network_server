import { makeCn } from '@shared/utils'
import { SectionContainer } from '../../components'
import styles from './Photo.module.scss'

const cn = makeCn('Photo', styles)

export const Photo = () => (
  <SectionContainer className={cn()} title="Фото" lastAdded={new Date()}>
    photo
  </SectionContainer>
)
