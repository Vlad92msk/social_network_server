import React from 'react'
import { makeCn } from '@shared/utils'
import { Actions, Description, Header } from '..'
import { CommentType } from '../../data/comments.data'
import styles from './MainInfo.module.scss'

const cn = makeCn('MainInfo', styles)

export type MainInfoType = 'main' | 'sub'
type MainInfoProps = {
  type: MainInfoType
  comment: CommentType
  isOpenSeeAnswers?: boolean
  isFromModal?: boolean
}
export const MainInfo: React.FC<MainInfoProps> = (props) => {
  const { type, comment, isOpenSeeAnswers, isFromModal } = props
  const { userName, date, description, appealToAnswerId, appealToUserName } = comment
  return (
    <div className={cn()}>
      <Header
        date={date}
        userName={userName}
        appealToUserName={appealToUserName}
        appealToAnswerId={appealToAnswerId}
      />
      <Description description={description} appealToAnswerId={appealToAnswerId} type={type} />
      <Actions
        disableOpenSeeAnswers={isOpenSeeAnswers}
        type={type}
          // @ts-ignore
        comment={comment}
        isFromModal={isFromModal}
      />
    </div>
  )
}
