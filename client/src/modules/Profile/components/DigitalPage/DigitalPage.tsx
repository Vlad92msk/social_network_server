import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { ServiceComments } from '@modules/Comments/service'

import { Button } from '@shared/components/Button'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Image } from '@shared/components/Image'
import { Text } from '@shared/components/Text'
import { useToggle } from '@shared/hooks/useToggle'
import { makeCn } from '@shared/utils'
import { UserSmall } from 'src/components'
import { PhotoType } from '../../data/photoItems.data'
import styles from './DigitalPage.module.scss'

const cn = makeCn('DigitalPage', styles)


export interface DigitalPageType {
  userId: number
  data: PhotoType
}

/**
 * Карточка для ФОТО/ВИДЕО
 */
export const DigitalPage: React.FC<DigitalPageType> = React.memo((props) => {
  const { userId, data } = props
  const {
    id,
    commentsCount,
    likeCount,
    date,
    description,
    disLikeCounts,
    authorName,
    title,
    authorId,
  } = data
  const { back } = useRouter()
  const [isOpenComments, setOpenComments] = useToggle(false)

  return (
    <div className={cn()}>
      <Button
        className={cn('Back')}
        styleType="rounded"
        color="blue"
        icon="arrow-left-sharp"
        onClick={back}
      >
        Вернуться
      </Button>

      <div className={cn('Main')}>
        <div className={cn('Box')}>
          <div className={cn('Photo')}>
            <Image path={{ img: 'ava', project: 'social' }} sizePriority="contain" />
          </div>
          <div className={cn('TitleRow')}>
            <ButtonBox className={cn('Button')}>
              <Icon className={cn('ButtonIcon')} size="ordinary" icon="eye-off" fill="oldAsphalt50" />
              <Text className={cn('ButtonText')} size="2">45</Text>
            </ButtonBox>
            {/* <Text className={cn('Date')} size={'2'} children={dateType2(date)} /> */}
          </div>

          <div className={cn('ButtonsGroup')}>
            <div className={cn('Button')}>
              <Icon className={cn('ButtonIcon')} size="ordinary" icon="heart" fill="redRose40" />
              <Text className={cn('ButtonText')} size="2">{likeCount || 0}</Text>
            </div>
            <div className={cn('Button')}>
              <Icon className={cn('ButtonIcon')} size="ordinary" icon="dislike" fill="bluePrimrose50" />
              <Text className={cn('ButtonText')} size="2">{disLikeCounts || 0}</Text>
            </div>
            <div className={cn('Button')} onClick={setOpenComments}>
              <Icon
                className={cn('ButtonIcon')}
                size="ordinary"
                icon="message-square"
                fill="bluePrimrose50"
              />
              <Text className={cn('ButtonText')} size="2">{commentsCount || 0}</Text>
            </div>
            <div className={cn('Button')}>
              <Icon className={cn('ButtonIcon')} size="ordinary" icon="hash" fill="oldAsphalt40" />
              <Text className={cn('ButtonText')} size="2">{commentsCount || 0}</Text>
            </div>
          </div>
        </div>
        {((userId !== authorId) && authorName) && (
          <div className={cn('AuthorBox')}>
            <UserSmall userName={authorName} img="ava" />
            <Text
              className={cn('Subscribe')}
              size="1"
              onClick={() => console.log('subscribe')}
            >
              Подписаться
            </Text>
          </div>
        )}
        <Text className={cn('Title')}>{title}</Text>
        <Text className={cn('Description')}>{description}</Text>
      </div>
      <ServiceComments
        serviceName="DigitalPage"
        provideProps={{
          isOpenComments,
          id,
        }}
      />
    </div>
  )
})
