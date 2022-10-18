import lodash from 'lodash'
import { useRouter } from 'next/router'
import React, { useCallback, useRef, useState } from 'react'

import { ButtonBox } from '@shared/components/ButtonBox'
import { FileUpLoad } from '@shared/components/FileUpLoad'
import { InputSmiles } from '@shared/components/InputSmiles'
import { Modal } from '@shared/components/Modal'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { AreaInput } from 'src/components'
import { WallRecord } from '..'
import { USER } from '../../../App/data/user'
import { WALL_RECORDS } from '../../data/walls.data'
import styles from './ProfileLayoutWall.module.scss'


const cn = makeCn('ProfileLayoutWall', styles)

type ProfileLayoutWallType = {
  userId: number
  onCloseWallEditing: () => Promise<boolean>
}

const NEW_RECORD_BASE = {
  id: Math.random(),
  dateCreated: new Date(),
  recordImg: null,
  recordVideo: null,
  commentsCount: null,
  comments: null,
  likesCount: null,
  dislikeCounts: null,
}


/**
 * Раздел Профиля - Контент-компонет для Видео или Фото
 */
export const ProfileLayoutWall: React.FC<ProfileLayoutWallType> = React.memo((props) => {
  const { userId, onCloseWallEditing } = props

  const { query } = useRouter()

  const user = USER
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const [records, setRecords] = useState(WALL_RECORDS)
  const [newRecordText, setNewRecordText1] = useState<string>('')
  const [newRecordFiles, setNewRecordFiles] = useState([])

  const setNewRecordText = useCallback(({ value }) => {
    setNewRecordText1(value)
  }, [])

  const handleAddRecord = useCallback(() => {
    setRecords((prev) => [{
      ...NEW_RECORD_BASE,
      userId: user.id,
      userName: `${user.name} ${user.family}`,
      userAva: user.img,
      recordText: newRecordText,
      attachments: newRecordFiles,
    }, ...prev])

    // @ts-ignore
    setNewRecordText('')
    setNewRecordFiles([])
    onCloseWallEditing()
  }, [setNewRecordText, onCloseWallEditing, user.id, user.name, user.family, user.img, newRecordText, newRecordFiles])

  return (
    <>
      <div className={cn()}>
        <div className={cn('Records')}>
          {
            lodash.orderBy(records, 'dateCreated', 'desc').map((record) => (
              <WallRecord key={record.id} record={record} />
            ))
          }
        </div>
      </div>
      <Modal className={cn('Modal')} open={Boolean(query.isEditing)} isBckOnClose onClose={onCloseWallEditing}>
        <div className={cn('CreateRecord')}>
          <div className={cn('RecordAdd')}>
            <FileUpLoad onApply={setNewRecordFiles} isConfirm />
            <AreaInput
              anchorEl={textAreaRef}
              value={newRecordText}
              // @ts-ignore
              onChange={setNewRecordText}
            />
            <InputSmiles
              // @ts-ignore
              setText={setNewRecordText}
              textAreaRef={textAreaRef}
            />
          </div>
          <div className={cn('SendRecord')}>
            {Boolean(newRecordFiles.length) && (
              <Text className={cn('AddedFilesCount')} size="1">{`${newRecordFiles.length} файлов`}</Text>
            )}
            <ButtonBox
              className={cn('Send', { disabled: !newRecordText?.length })}
              onClick={handleAddRecord}
              disabled={!newRecordText?.length}
            >
              Отправить
            </ButtonBox>
          </div>
        </div>
      </Modal>
    </>
  )
})
