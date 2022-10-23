import React, { useCallback } from 'react'

import { useMessagesDispatch, useMessagesSelector } from '@modules/Messages/api'
import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import styles from './ChatFolders.module.scss'


const cn = makeCn('ChatFolders', styles)

type ChatFoldersProps = {}
export const ChatFolders: React.FC<ChatFoldersProps> = React.memo((props) => {
  const dispatch = useMessagesDispatch()

  const folders = useMessagesSelector((state) => state.folders)
  const openFolderId = useMessagesSelector((state) => state.openFolderId)


  const handleChangeFolder = useCallback((folderId: number) => {
    dispatch(() => ({ openFolderId: folderId ? null : folderId }))
  }, [dispatch])

  return (
    <>
      {Object.values(folders)?.map(({ id, name }) => (
        <ButtonBox key={id} className={cn({ active: openFolderId === id })} onClick={() => handleChangeFolder(id)}>
          <Icon icon="folder" size="small" fill="oldAsphalt40" />
          <Text className={cn('Title', { active: openFolderId === id })} size="2" color="note" children={name} />
        </ButtonBox>
      ))}
    </>
  )
})
