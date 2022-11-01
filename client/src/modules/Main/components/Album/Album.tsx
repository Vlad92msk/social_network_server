import { classnames } from '@bem-react/classnames'
import { PropsWithChildren } from 'react'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Section } from '@shared/components/Section'
import { Text } from '@shared/components/Text'
import { useGetAccentImageColor } from '@shared/hooks'
import { createString, makeCn } from '@shared/utils'
import styles from './Album.module.scss'


const cn = makeCn('Album', styles)

interface SectionContainerProps {
  className?: string
  title: string
  description?: string
  elementsCount?: number
  img?: string
  containerWidth?: number
}

export const Album = (props: PropsWithChildren<SectionContainerProps>) => {
  const {
    title, description, img, elementsCount, containerWidth, className,
  } = props
  const src = `/resources/images${createString(['users', 'photo', img], '/')}`
  const [background, hex, color] = useGetAccentImageColor(`${src}.webp`, 0.4)
  console.log('width', containerWidth)
  return (
    <Section
      className={classnames(cn(), className)}
      style={{ height: `clamp(200px, calc(${containerWidth / 3 + 50}px), 380px)` }}
      bcgImg={{
        path: {
          moduleName: 'users',
          folder: 'photo',
          img: '1',
        },
      }}
    >
      <div className={cn('Preview')} style={{ background }}>
        <Text weight="bold" size="6" style={{ color }}>{title}</Text>
        <Text style={{ color }}>{description}</Text>
        <ButtonBox className={cn('ButtonOpen')} style={{ background }}>
          <Text className={cn('ButtonOpenTitle')} style={{ color }}>Открыть</Text>
          <Icon className={cn('ButtonOpenIcon')} icon="play" size="medium" style={{ fill: color }} />
        </ButtonBox>
      </div>
      <div>
        1
      </div>
    </Section>
  )
}
