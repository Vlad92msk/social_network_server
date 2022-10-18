import React from 'react'
import { AnimateOpenComments, CommentsMap, CommentsOpenType, Filters, InputComment, ModalViewAnswersHOC } from '@modules/Comments/components'
import { makeCn } from '@shared/utils'

import styles from './Comments.module.scss'

const cn = makeCn('Comments', styles)


export type CommentsProps = {
  isOpenComments: boolean
  width?: string
  commentsHeight?: string
  openType?: CommentsOpenType
  isOverflow?: boolean
  id: number
}

export const Comments: React.FC<CommentsProps> = React.memo((props) => {
  const { isOpenComments, width, commentsHeight, openType, isOverflow } = props

  return (
    <AnimateOpenComments width={width} isOpenComments={isOpenComments} openType={openType}>
      <Filters />
      <div className={cn('Container')}>
        <InputComment
          appealToCommentId={null}
          appealToAnswerId={null}
        />
        <CommentsMap commentsHeight={commentsHeight} isOverflow={isOverflow} />
      </div>
      <ModalViewAnswersHOC />
    </AnimateOpenComments>
  )
})

Comments.defaultProps = {
  openType: 'horizontal',
  isOverflow: true,
}
