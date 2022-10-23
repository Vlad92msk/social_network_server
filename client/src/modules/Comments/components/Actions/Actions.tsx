import { size } from 'lodash'
import React, { PropsWithChildren, useCallback, useState } from 'react'
import { ServiceCommentsType, useCommentsDispatch } from '@modules/Comments/service'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { IconButton } from '@shared/components/IconButton'
import { Text } from '@shared/components/Text'
import { useToggle } from '@shared/hooks/useToggle'
import { makeCn } from '@shared/utils'

import { InputComment, MainInfoType } from '..'
import styles from './Actions.module.scss'

const cn = makeCn('Actions', styles)


export interface ActionsType extends PropsWithChildren {
  type: MainInfoType
  disableOpenSeeAnswers: boolean
  comment: ServiceCommentsType
  isFromModal?: boolean
}

export const Actions: React.FC<ActionsType> = React.memo((props) => {
  const { type, comment, disableOpenSeeAnswers, isFromModal } = props
  const {
    userIdsLikes,
    userIdsDislikes,
    commentId,
    answers,
    appealToCommentId,
  } = comment
  const dispatch = useCommentsDispatch()
  const [isOpenAddAnswer, setOpenAddAnswer] = useToggle(false)

  const [toggle, setToggle] = useState(true)

  const handleOpenAnswer = useCallback(() => {
    if (toggle) {
      dispatch(() => ({
        openCommentId: commentId,
      }))
      setToggle(false)
    } else {
      dispatch(() => ({
        openCommentId: null,
      }))
      setToggle(true)
    }
  }, [commentId, toggle, dispatch])

  const handleOpenAnswers = useCallback(() => {
    if (!disableOpenSeeAnswers) {
      dispatch(() => ({ modalComment: comment }))
    }
  }, [disableOpenSeeAnswers, dispatch, comment])

  return (
    <>
      <div className={cn()}>
        {type === 'sub' ? (
          <IconButton
            className={cn('Button')}
            size="small"
            icon="message-square"
            fill="bluePrimrose50"
            onClick={setOpenAddAnswer}
          />
        ) : (<div />)}
        <div style={{ display: 'flex' }}>
          {!isFromModal && (
            <ButtonBox
              className={cn('Button')}
              disabled={(type === 'sub' && !size(answers)) || disableOpenSeeAnswers}
              onClick={type === 'main' ? handleOpenAnswer : handleOpenAnswers}
            >
              <Icon
                className={cn('ButtonIcon')}
                size="small"
                icon="undo"
                fill="light100"
              />
              <Text
                className={cn('ButtonText')}
                size="1"
              >
                {size(answers)}
              </Text>
            </ButtonBox>
          )}
          <ButtonBox className={cn('Button')}>
            <Icon
              className={cn('ButtonIcon')}
              size="small"
              icon="heart"
              fill="redRose40"
            />
            <Text className={cn('ButtonText')} size="1">
              {size(userIdsLikes)}
            </Text>
          </ButtonBox>
          <ButtonBox className={cn('Button')}>
            <Icon
              className={cn('ButtonIcon')}
              size="small"
              icon="dislike"
              fill="bluePrimrose50"
            />
            <Text className={cn('ButtonText')} size="1">
              {size(userIdsDislikes)}
            </Text>
          </ButtonBox>
        </div>
      </div>
      {isOpenAddAnswer && (
        <InputComment
          targetCommentId={comment.commentId}
          appealToAnswerId={comment.commentId}
          appealToCommentId={appealToCommentId}
        />
      )}
    </>
  )
})
