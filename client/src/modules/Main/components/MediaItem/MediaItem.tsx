import { classnames } from '@bem-react/classnames'
import { PropsWithChildren } from 'react'
import { MediaItemType } from '@modules/Main/types/mediaItem'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Section } from '@shared/components/Section'
import { Text } from '@shared/components/Text'
import { useGetAccentImageColor } from '@shared/hooks'
import { createString, makeCn } from '@shared/utils'
import styles from './MediaItem.module.scss'


const cn = makeCn('MediaItem', styles)

interface SectionContainerProps {
  className?: string
  item: MediaItemType
  containerWidth?: number
}

export const MediaItem = (props: PropsWithChildren<SectionContainerProps>) => {
  const { containerWidth, className, item } = props

  return (
    <Section
      className={classnames(cn(), className)}
      bcgImg={{
        path: {
          moduleName: 'users',
          folder: 'photo',
          img: item.path,
        },
        withContainer: true,
      }}
    >
      MediaItem
    </Section>
  )
}
