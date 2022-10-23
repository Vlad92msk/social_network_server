import { values } from 'lodash'
import React from 'react'
import { ServiceCommentsType, useCommentsSelector } from '@modules/Comments/api'
import { ArrayMap } from '@shared/components/ArrayMap'
import { makeCn } from '@shared/utils'
import { AnswerWrapper, InputComment, MainInfo } from '..'
import { CommentType } from '../../data/comments.data'
import styles from './CommentsMap.module.scss'

const cn = makeCn('CommentsMap', styles)


export type CommentsMapProps = {
  commentsHeight?: string
  isOverflow?: boolean
}


export const CommentsMap: React.FC<CommentsMapProps> = (props) => {
  const { commentsHeight, isOverflow } = props

  const commentsService = values(useCommentsSelector((state) => state.comments))

  return (
    <div
      className={cn()}
      style={{ maxHeight: commentsHeight, overflowY: isOverflow ? 'auto' : null }}
    >
      <ArrayMap
        key="commentId"
        data={commentsService}
      >
        {((comment: ServiceCommentsType) => (
          <div className={cn('Comment')}>
            <MainInfo type="main" comment={comment} />
            <AnswerWrapper commentId={comment.commentId}>
              <InputComment
                targetCommentId={comment.commentId}
                appealToCommentId={comment.commentId}
                appealToAnswerId={null}
              />
              <ArrayMap
                key="commentId"
                data={comment.answers}
              >
                {(answer: CommentType) => (
                  <MainInfo type="sub" comment={answer} />
                )}
              </ArrayMap>
            </AnswerWrapper>
          </div>
        )
        )}
      </ArrayMap>
    </div>
  )
}
