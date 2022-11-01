import { makeCn } from '@shared/utils'
import { Album, SectionContainer } from '../../components'
import styles from './Photo.module.scss'

const cn = makeCn('Photo', styles)

export const Photo = () => (
  <SectionContainer className={cn()} title="Фото" lastAdded={new Date()}>
    <Album title="Title" description="Lorem" elementsCount={6} img="1" />
  </SectionContainer>
)
