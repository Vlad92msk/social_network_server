import React, { useCallback, useState } from 'react'
import { useCommentsDispatch } from '@modules/Comments/service'
import { CommentType } from '@modules/Comments/data/comments.data'
import { createComment, createCommentsToService } from '@modules/Comments/utils'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { AreaInput } from 'src/components'
import styles from './InputComment.module.scss'

const cn = makeCn('InputComment', styles)

type InputCommentProps = {
  targetCommentId?: string
  appealToCommentId: string
  appealToAnswerId: string
}
export const InputComment: React.FC<InputCommentProps> = (props) => {
  const { targetCommentId, appealToCommentId, appealToAnswerId } = props
  const dispatch = useCommentsDispatch()
  const [comment, setComment] = useState('')

  const sentComment = useCallback(() => {
    dispatch((state) => {
      const find = state.commentsApi.find(({ commentId: id }) => id === targetCommentId)

      const newComment: CommentType = {
        appealToEntityId: state.appealToEntityId,
        ...createComment(comment, appealToCommentId, appealToAnswerId, find),
      }

      return ({
        newComment,
        commentsApi: [...state.commentsApi, newComment],
        comments: createCommentsToService([...state.commentsApi, newComment]),
      })
    })
    setComment('')
  }, [dispatch, comment, appealToCommentId, appealToAnswerId, targetCommentId])

  return (
    <div className={cn()}>
      <AreaInput onChange={setComment} value={comment} />
      <Text
        className={cn('Send', { disabled: !comment?.length })}
        size="1"
        onClick={sentComment}
      >
        Отправить
      </Text>
    </div>
  )
}
