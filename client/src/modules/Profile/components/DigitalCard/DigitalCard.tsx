import { AnimatePresence, motion } from 'framer-motion'
import { pick } from 'lodash'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import { Button } from '@shared/components/Button'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Image } from '@shared/components/Image'
import { Text } from '@shared/components/Text'
import { useBooleanState } from '@shared/hooks'
import { makeCn } from '@shared/utils'
import { dateType1 } from '@shared/utils/date'
import { PhotoType } from '../../data/photoItems.data'
import styles from './DigitalCard.module.scss'
import { DigitalCardDraggable } from './DigitalCardDraggable'

const cn = makeCn('DigitalCard', styles)

export const enum DigitalCardType {
  PHOTO = 'photo',
  VIDEO = 'video'
}

interface DigitalCardProps {
  type: DigitalCardType
  item: PhotoType
  index: number
}

/**
 * Карточка для ФОТО/ВИДЕО
 */
export const DigitalCard: React.FC<DigitalCardProps> = React.memo((props) => {
  const { index, item, type } = props
  const {
    id,
    commentsCount,
    likeCount,
    date,
    disLikeCounts,
  } = item

  const [isHover, setVisible, setHide] = useBooleanState(false)
  const { push, pathname, query } = useRouter()

  const handleOpenPage = useCallback(() => {
    push({
      pathname: `${pathname}/[digital_type]/[digital_id]`,
      query: { ...pick(query, ['lang', 'user_id']), digital_type: type, digital_id: id },
    })
  }, [push, pathname, query, type, id])

  return (
    <DigitalCardDraggable id={id} index={index}>
      <div className={cn()}>
        <div className={cn('Row')}>
          <ButtonBox
            className={cn('Photo')}
            onMouseEnter={setVisible}
            onMouseLeave={setHide}
            onClick={handleOpenPage}
          >
            <Image
              path={{ img: 'ava', project: 'social' }}
            />
          </ButtonBox>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              className={cn('TitleRow')}
              data-hover={isHover}
            >
              <ButtonBox className={cn('Button')}>
                <Icon className={cn('ButtonIcon')} size="ordinary" icon="eye-off" fill="oldAsphalt50" />
                <Text className={cn('ButtonText')} size="2">45</Text>
              </ButtonBox>
              <Text className={cn('ButtonText')} size="2">{dateType1(date)}</Text>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              className={cn('ButtonsGroup')}
              data-hover={isHover}
            >
              <div className={cn('Button')}>
                <Icon className={cn('ButtonIcon')} size="ordinary" icon="heart" fill="redRose40" />
                <Text className={cn('ButtonText')} size="2">{likeCount || 0}</Text>
              </div>
              <div className={cn('Button')}>
                <Icon className={cn('ButtonIcon')} size="ordinary" icon="dislike" fill="bluePrimrose50" />
                <Text className={cn('ButtonText')} size="2">{disLikeCounts || 0} </Text>
              </div>
              <div className={cn('Button')}>
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </DigitalCardDraggable>
  )
})
