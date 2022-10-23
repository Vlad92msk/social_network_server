import { reduce } from 'lodash'
import { useId } from 'react'
import { ServiceCommentsType } from '@modules/Comments/api'
import { CommentType } from '@modules/Comments/data/comments.data'
import { GetUserInfoQuery } from '@modules/UserMenu/graphql/generate'
import { LocalStorageEnum } from '@public/models/localStorage'
import { storageGet } from '@shared/utils'

/**
 * Создает объект комментария
 */
export const createComment = (value, appealToCommentId: string, appealToAnswerId: string, findComment: CommentType) => {
  const userInfo = storageGet(LocalStorageEnum.CURRENT_USER) as GetUserInfoQuery['getOneUser']
  const currenUser = {
    id: 1,
    family: 'family',
    name: 'name',
  }

  return ({
    commentId: useId(),
    description: value,
    appealToCommentId,
    appealToAnswerId,
    appealToUserId: findComment?.userId || null,
    appealToUserName: findComment?.userName || null,
    userId: currenUser.id,
    userName: `${currenUser.family} ${currenUser.name}`,
    userIdsDislikes: [],
    userIdsLikes: [],
    date: new Date(),
  })
}

/**
 * Создает объект с комментариями для стора
 */
export const createCommentsToService = (comments: CommentType[]) => reduce(
  comments,
  (acc: Record<string, ServiceCommentsType>, item) => (!item.appealToCommentId ? ({
    ...acc,
    [item.commentId]: {
      ...item,
      answers: reduce(
        comments.filter(({ appealToCommentId }) => appealToCommentId === item.commentId),
        (answersAcc, answersItem, i, arr) => ([...answersAcc,
          {
            ...answersItem,
            answers: arr.filter(({ appealToAnswerId }) => appealToAnswerId === answersItem.commentId),
          },
        ]),
        [],
      ),
    },
  }) : acc),
  {},
)
