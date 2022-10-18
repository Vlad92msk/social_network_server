import React, { useCallback, useState } from 'react'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { AreaInput } from 'src/components'
import { commentsActions, useServiceCommentsAction } from '../../service'
import styles from './InputComment.module.scss'

const cn = makeCn('InputComment', styles)

type InputCommentProps = {
  targetCommentId?: string
  appealToCommentId: string
  appealToAnswerId: string
}
export const InputComment: React.FC<InputCommentProps> = (props) => {
  const { targetCommentId, appealToCommentId, appealToAnswerId } = props
  const dispatch = useServiceCommentsAction()
  const [comment, setComment] = useState('')

  const sentComment = useCallback(() => {
    dispatch(commentsActions.SET__SENT_COMMENT({
      targetCommentId,
      appealToCommentId,
      appealToAnswerId,
      value: comment,
    }))
    setComment('')
  }, [dispatch, targetCommentId, appealToCommentId, appealToAnswerId, comment])

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
