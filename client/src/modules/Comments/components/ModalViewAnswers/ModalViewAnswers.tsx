import React, { useCallback, useEffect, useState } from 'react'
import { ArrayMap } from '@shared/components/ArrayMap'

import { Modal } from '@shared/components/Modal'
import { Action, makeCn } from '@shared/utils'
import { Actions, Description, Header, MainInfo } from '..'
import {
  commentsActions, ServiceCommentsType,
  useServiceCommentsAction, useServiceCommentsSelector,
} from '../../service'
import styles from './ModalViewAnswers.module.scss'

const cn = makeCn('ModalViewAnswers', styles)


export type ModalViewAnswersProps = {
  modalComment: ServiceCommentsType
  dispatch: (action: Action) => void
}

const ModalViewAnswers: React.FC<ModalViewAnswersProps> = React.memo((props) => {
  const { modalComment, dispatch } = props
  const commentsSelector = useServiceCommentsSelector('comments')
  const [comment, setComment] = useState<ServiceCommentsType>(modalComment)
  const {
    appealToAnswerId,
    appealToUserName,
    userName,
    date,
    description,
    appealToCommentId,
    commentId,
  } = comment

  // @ts-ignore
  const answers = commentsSelector[appealToCommentId].answers.find(({ commentId: id }) => id === commentId)?.answers

  const handleCloseModal = useCallback(() => {
    if (modalComment) {
      dispatch(commentsActions.SET__OPEN_MODAL_FOR_VIEW_ANSWERS({
        comment: null,
      }))
    }
  }, [dispatch, modalComment])

  useEffect(() => {
    setComment((prev) => ({ ...prev, answers }))
  }, [answers])

  return (
    <Modal
      className={cn()}
      open
      onClose={handleCloseModal}
    >
      <div className={cn('SeeComment')}>
        <Header
          appealToAnswerId={appealToAnswerId}
          appealToUserName={appealToUserName}
          userName={userName}
          date={date}
        />
        <Description description={description} appealToAnswerId={appealToAnswerId} type="main" />
        <Actions disableOpenSeeAnswers type="sub" comment={comment} />
      </div>
      <div className={cn('ModalContainer')}>
        <ArrayMap key="commentId" data={answers}>
          {(item) => (
            <MainInfo
              isOpenSeeAnswers
              type="sub"
              comment={item}
              isFromModal
            />
          )}
        </ArrayMap>
      </div>
    </Modal>
  )
})


export const ModalViewAnswersHOC: React.FC = () => {
  const modalComment = useServiceCommentsSelector('modalComment') || null
  const dispatch = useServiceCommentsAction()

  if (!modalComment) return <></>
  return <ModalViewAnswers modalComment={modalComment} dispatch={dispatch} />
}
