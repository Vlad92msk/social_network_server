import React, { useCallback, useEffect, useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { Button } from '@shared/components/Button'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { IconButton } from '@shared/components/IconButton'
import { Image } from '@shared/components/Image'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { dateType2 } from '@shared/utils/date'
import { DigitalCard, DigitalCardType } from '..'
import { PhotoType } from '../../data/photoItems.data'
import styles from './AlbumCard.module.scss'

const cn = makeCn('AlbumCard', styles)


export type MainCardType = {
  index: number
  id: number
  title: string
  description?: string
  authorName?: string
  date: Date
  likeCount?: number
  commentsCount?: number
  photo: PhotoType[]
  userId: number
}

export const AlbumCard: React.FC<MainCardType> = React.memo((props) => {
  const {
    id, title, date, authorName, description, commentsCount, likeCount, photo, userId, index,
  } = props
  const [open, setOpen] = useState(false)

  /**
   * Открыть фотоальбом
   */
  const handleMore = useCallback(() => {
    if (!photo.length) return
    setOpen((prev) => !prev)
  }, [photo])

  useEffect(() => {
    if (!photo?.length) {
      setOpen(false)
    }
  }, [photo])

  return (
    <Droppable droppableId={`album[${id}]`} key={`album[${id}]`}>
      {({ innerRef, droppableProps }, snapshot) => (
        <div
          {...droppableProps}
          ref={innerRef}
          className={cn({ active: open, dndActive: snapshot.isDraggingOver })}
        >
          {!open ? (
            <>
              <Text className={cn('Date')} size="2">{dateType2(date)}</Text>
              <Text className={cn('Title')}>{title}</Text>
              {description && (
                <Text className={cn('Description')} size="1">{description}</Text>
              )}
              <div className={cn('ButtonsRow')}>
                <ButtonBox className={cn('Button')} onClick={() => 1}>
                  <Icon className={cn('ButtonIcon')} size="ordinary" icon="heart-fill" fill="redRose40" />
                  <Text className={cn('ButtonText')} size="2">{likeCount || 0}</Text>
                </ButtonBox>
                <ButtonBox className={cn('Button')} onClick={() => 1}>
                  <Icon
                    className={cn('ButtonIcon')}
                    size="ordinary"
                    icon="message-square"
                    fill="bluePrimrose50"
                  />
                  <Text className={cn('ButtonText')} size="2">{commentsCount || 0}</Text>
                </ButtonBox>
                <ButtonBox className={cn('Button')} data-pointer-disable={!photo.length} onClick={handleMore}>
                  <Icon className={cn('ButtonIcon')} size="ordinary" icon="arrow-right" fill="bluePrimrose50" />
                  <Text className={cn('ButtonText')} size="1">Открыть</Text>
                </ButtonBox>
              </div>
              {authorName && (
              <div className={cn('AuthorRow')}>
                <div className={cn('AuthorImg')}>
                  <Image
                    sizePriority="cover"
                    path={{
                      img: 'ava',
                      project: 'social',
                    }}
                  />
                </div>
                <Text className={cn('AuthorName')} size="1">{authorName}</Text>
              </div>
              )}
            </>
          )
            : (
              <>
                <div className={cn('GoBack')}>
                  <Text className={cn('Title')}>{title}</Text>
                  <IconButton icon="arrow-left" onClick={handleMore} />
                </div>
                <div className={cn('Photos')}>
                  {photo.map((photo, i) => (
                    <DigitalCard
                      key={photo.id}
                      index={i}
                      type={DigitalCardType.PHOTO}
                      item={photo}
                    />
                  ))}
                </div>
              </>
            )}
        </div>
      )}
    </Droppable>
  )
})
