import { Section } from '@shared/components/Section'
import { makeCn } from '@shared/utils'
import styles from './App.module.scss'

const cn = makeCn('Application', styles)

export const App = () => (
  <Section
    className={cn()}
    imgClassName={cn('Img')}
    bcgImg={{
      path: {
        img: 'bcg',
        project: 'portfolio',
      },
    }}
  >
    app
  </Section>
)
