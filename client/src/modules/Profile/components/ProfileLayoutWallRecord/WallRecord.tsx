import React, { useState } from 'react'
import { ServiceComments } from '@modules/Comments/service'
import { WallRecordItemType } from '@modules/Profile/data/walls.data'

import { Icon } from '@shared/components/Icon'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { dateType1 } from '@shared/utils/date'
import { Attachment, ATTACHMENT_ACTION, SliderMedia, UserSmall } from 'src/components'
import { useAttachmentsPurpose } from 'src/components/Attachment/hooks'
import styles from './WallRecord.module.scss'


const cn = makeCn('WallRecord', styles)

type WallRecordType = {
  record: WallRecordItemType
}
export const WallRecord: React.FC<WallRecordType> = React.memo((props) => {
  const {
    record: {
      userAva,
      userName,
      dateCreated,
      recordImg,
      recordText,
      recordVideo,
      id,
      comments,
      commentsCount,
      dislikeCounts,
      likesCount,
      attachments,
    },
  } = props

  const [isOpenComments, setOpenComments] = useState(null)
  const { toSave, toPlay, toSlider } = useAttachmentsPurpose(attachments || [])

  return (
    <div className={cn()}>
      <div className={cn('Header')}>
        <UserSmall
          className={cn('User')}
          avaClassName={cn('UserAva')}
          textClassName={cn('UserName')}
          textSize="3"
          userName={userName}
          img={userAva}
        />
        <Text className={cn('Date')} size="2">{dateType1(dateCreated)}</Text>
      </div>
      <div className={cn('Body')}>
        <div className={cn('Content')}>
          <SliderMedia sliders={toSlider} height="35vh" />
          {toPlay.map((attach) => (
            <Attachment
              key={attach.name}
              attach={attach}
              action={ATTACHMENT_ACTION.PLAY}
            />
          ))}
          {toSave.map((attach) => (
            <Attachment
              key={attach.name}
              attach={attach}
              action={ATTACHMENT_ACTION.SAVE}
            />
          ))}
          {recordText && (<Text className={cn('RecordText')}>{recordText}</Text>)}
          <div className={cn('ButtonsGroup')}>
            <div className={cn('Button')} onClick={() => setOpenComments((prev) => !prev)}>
              <Icon
                className={cn('ButtonIcon')}
                size="ordinary"
                icon="message-square"
                fill="bluePrimrose50"
              />
              <Text
                className={cn('ButtonText')}
                size="2"
              >
                {commentsCount || 0}
              </Text>
            </div>
            <div style={{ display: 'flex' }}>
              <div className={cn('Button')}>
                <Icon
                  className={cn('ButtonIcon')}
                  size="ordinary"
                  icon="heart"
                  fill="redRose40"
                />
                <Text className={cn('ButtonText')} size="2">{likesCount || 0}</Text>
              </div>
              <div className={cn('Button')}>
                <Icon
                  className={cn('ButtonIcon')}
                  size="ordinary"
                  icon="dislike"
                  fill="bluePrimrose50"
                />
                <Text className={cn('ButtonText')} size="2">{dislikeCounts || 0}</Text>
              </div>
            </div>
          </div>
        </div>
        <ServiceComments
          serviceName="Wall Record"
          provideProps={{
            commentsHeight: '40vh',
            width: '100%',
            isOverflow: false,
            openType: 'vertical',
            isOpenComments,
            id,
          }}
        />
      </div>
    </div>
  )
})
