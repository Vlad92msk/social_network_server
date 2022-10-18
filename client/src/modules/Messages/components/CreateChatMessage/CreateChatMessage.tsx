import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { ButtonBox } from '@shared/components/ButtonBox'
import { FileUpLoad } from '@shared/components/FileUpLoad'
import { InputSmiles } from '@shared/components/InputSmiles'

import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { AreaInput } from 'src/components'
import { Message } from '../../data/messages'
import styles from './CreateChatMessage.module.scss'

const cn = makeCn('CreateChatMessage', styles)

export type CreateChatMessageProps = {
  onSendMessage: React.Dispatch<React.SetStateAction<Message>>
  currentUserId: number
  targetUserId: number
}
export const CreateChatMessage: React.FC<CreateChatMessageProps> = (props) => {
  const { onSendMessage, currentUserId, targetUserId } = props
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const [newRecordFiles, setNewRecordFiles] = useState([])
  const [messageInput, setMessageInput1] = useState<string>('')

  const setMessageInput = useCallback(({ value }) => {
    setMessageInput1(value)
  }, [])
  /**
   * Отправить сообщение
   * TODO: на бэке дополнить пустые свойства и сгеренровать ID
   */
  const onCreateMessage = useCallback(() => {
    onSendMessage({
      fromUserId: currentUserId,
      toUserId: targetUserId,
      dateSeen: null,
      dateCreate: new Date(),
      messageId: useId(),
      smile: null,
      massage: messageInput,
      attachments: newRecordFiles,
    })
    setMessageInput({ value: '' })
    setNewRecordFiles([])
  }, [onSendMessage, currentUserId, targetUserId, messageInput, newRecordFiles, setMessageInput])

  return (
    <div className={cn()}>
      <div className={cn('FileSmileRow')}>
        <FileUpLoad className={cn('File')} icon="file-outlined" onApply={setNewRecordFiles} />
        <InputSmiles className={cn('Smile')} setText={setMessageInput1} textAreaRef={textAreaRef} />
      </div>
      <AreaInput
        anchorEl={textAreaRef}
        className={cn('InputText')}
        value={messageInput}
        // @ts-ignore
        onChange={setMessageInput}
      />
      <div className={cn('InputSubmitRow')}>
        {Boolean(newRecordFiles.length) && (
          <Text
            className={cn('AddedFilesCount')}
            size="1"
          >
            {`${newRecordFiles.length} файлов`}
          </Text>
        )}
        <ButtonBox
          style={{ justifyContent: 'flex-end', width: '100%' }}
          onClick={onCreateMessage}
          disabled={!messageInput?.length}
        >
          <Text
            className={cn('Submit', { active: Boolean(messageInput?.length) })}
            size="1"
          >
            Отправить
          </Text>
        </ButtonBox>
      </div>
    </div>
  )
}
