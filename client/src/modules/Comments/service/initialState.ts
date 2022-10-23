import { CommentType } from '@modules/Comments/data/comments.data'
import { Service } from '@public/models/service'

export interface ServiceCommentsType extends CommentType {
  answers: CommentType[]
}

export interface StateModule extends Service {
  appealToEntityId: number
  commentsApi: CommentType[]
  newComment: CommentType
  comments: Record<string, ServiceCommentsType>
  openCommentId: string
  modalComment: ServiceCommentsType
}


export const initialState: StateModule = {
  appealToEntityId: null,
  commentsApi: null,
  comments: null,
  openCommentId: null,
  modalComment: null,
  newComment: null
}
