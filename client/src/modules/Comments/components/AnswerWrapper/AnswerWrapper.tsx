import { AnimatePresence, motion } from 'framer-motion'
import React, { PropsWithChildren } from 'react'

import { makeCn } from '@shared/utils'
import { useServiceCommentsSelector } from '../../service'
import styles from './AnswerWrapper.module.scss'

const cn = makeCn('AnswerWrapper', styles)


const initial = { height: 0 }
const animate = { height: 'auto' }

export interface AnswerWrapperType extends PropsWithChildren {
  commentId: string
}

export const AnswerWrapper: React.FC<AnswerWrapperType> = (props) => {
  const { commentId, children } = props
  const openCommentId = useServiceCommentsSelector('openCommentId')

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {commentId === openCommentId && (
        <motion.div
          className={cn()}
          animate={animate}
          exit={initial}
          initial={initial}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
