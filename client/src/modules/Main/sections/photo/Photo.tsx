import { useCallback, useState } from 'react'
import { makeCn } from '@shared/utils'
import { Album, SectionContainer } from '../../components'
import styles from './Photo.module.scss'

const cn = makeCn('Photo', styles)

const PHOTOS = [
  {
    id: '1-1', // Наверно хеширвоать с userID + DataCreate
    title: 'Фото 1',
    authorName: 'Фирсов Влад',
    authorId: 1,
    likeUsersIds: [1, 3123, 543],
    disLikeUsersIds: [1, 3123, 543],
    likeCount: 13,
    disLikeCounts: 54,
    commentsCount: 423,
    date: new Date(),
    description: 'Описание к фото 1 очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание очеень длинное описание',
    hash: null,
    commentUsersIds: [],
    albumId: 1,
  },
  {
    id: '1-2', // Наверно хеширвоать с userID + DataCreate
    title: 'Фото 2',
    authorName: 'Фирсов Влад',
    authorId: 1,
    likeUsersIds: [1, 3123, 543],
    disLikeUsersIds: [1, 3123, 543],
    likeCount: 13,
    disLikeCounts: 54,
    commentsCount: 423,
    date: new Date(),
    description: 'Описание к фото 2',
    hash: null,
    commentUsersIds: [],
    albumId: 1,
  },
  {
    id: '1-3', // Наверно хеширвоать с userID + DataCreate
    title: 'Фото 3',
    authorName: 'Фирсов Влад',
    authorId: 1,
    likeUsersIds: [1, 3123, 543],
    disLikeUsersIds: [1, 3123, 543],
    likeCount: 13,
    disLikeCounts: 54,
    commentsCount: 423,
    date: new Date(),
    description: 'Описание к фото 3',
    hash: null,
    commentUsersIds: [],
    albumId: 1,
  },
]
const ALBUMS = [
  {
    id: 1,
    title: 'Альбом 1',
    description: 'Описание к альбому 1',
    bcg: '1',
    elements: ['1-1', '1-2', '1-3'],
  },
  {
    id: 2,
    title: 'Альбом 2',
    description: 'Описание к альбому 2',
    bcg: '1',
    elements: [],
  },
  {
    id: 3,
    title: 'Альбом 3',
    description: 'Описание к альбому 3',
    bcg: '1',
    elements: [],
  },
  {
    id: 4,
    title: 'Альбом 4',
    description: 'Описание к альбому 4',
    bcg: '1',
    elements: [],
  },
  {
    id: 5,
    title: 'Альбом 5',
    description: 'Описание к альбому 5',
    bcg: 'parkovka',
    elements: [],
  },
]

export const Photo = () => {
  const [visibleType, setVisibleType] = useState<string>(null)

  const changeVisibleType = useCallback((value: string | number) => {
    setVisibleType(String(value))
  }, [])
  return (
    <SectionContainer
      className={cn()}
      title="Фото"
      lastAdded={new Date()}
      changeVisibleType={changeVisibleType}
    >
      {visibleType === 'albums' ? (
        ALBUMS.map((album) => (
          <Album key={album.id} {...album} elementsCount={album.elements.length} />
        ))
      ) : (
        PHOTOS.map((photo) => (
          <div key={photo.id}>{photo.title}</div>
        ))
      )}
    </SectionContainer>
  )
}
