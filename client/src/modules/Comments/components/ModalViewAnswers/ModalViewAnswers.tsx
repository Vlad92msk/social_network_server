import React, { useCallback, useEffect, useState } from 'react'
import { ServiceCommentsType, useCommentsDispatch, useCommentsSelector } from '../../service'
import { ArrayMap } from '@shared/components/ArrayMap'

import { Modal } from '@shared/components/Modal'
import { makeCn } from '@shared/utils'
import { Actions, Description, Header, MainInfo } from '..'

import styles from './ModalViewAnswers.module.scss'

const cn = makeCn('ModalViewAnswers', styles)


export type ModalViewAnswersProps = {
  modalComment: ServiceCommentsType
}

const ModalViewAnswers: React.FC<ModalViewAnswersProps> = React.memo((props) => {
  const { modalComment } = props
  const commentsSelector = useCommentsSelector((state) => state.comments)
  const dispatch = useCommentsDispatch()

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
      dispatch(() => ({
        modalComment: null,
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
  const modalComment = useCommentsSelector((state) => state.modalComment)

  if (!modalComment) return <></>
  return <ModalViewAnswers modalComment={modalComment} />
}
