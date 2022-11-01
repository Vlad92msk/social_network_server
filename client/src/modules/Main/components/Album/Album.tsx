import { classnames } from '@bem-react/classnames'
import { PropsWithChildren } from 'react'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Section } from '@shared/components/Section'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import styles from './Album.module.scss'

const cn = makeCn('Album', styles)

interface SectionContainerProps {
  className?: string
  title: string
  description?: string
  elementsCount?: number
  img?: string
}

export const Album = (props: PropsWithChildren<SectionContainerProps>) => {
  const { title, description, img, elementsCount, className, children } = props

  return (
    <Section
      className={classnames(cn(), className)}
      bcgImg={{
        path: {
          moduleName: 'users',
          folder: 'photo',
          img: '1',
        },
      }}
    >
      <div className={cn('Preview')}>
        <Text color="title" weight="bold" size="6">{title}</Text>
        <Text color="title">{description}</Text>
        <ButtonBox className={cn('ButtonOpen')}>
          <Text className={cn('ButtonOpenTitle')} color="title">Открыть</Text>
          <Icon className={cn('ButtonOpenIcon')} icon="play" size="medium" fill="redRose40" />
        </ButtonBox>
      </div>
    </Section>
  )
}
