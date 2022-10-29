import { useState } from 'react'
import { Button } from '@shared/components/Button'
import { Image } from '@shared/components/Image'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import styles from './Footer.module.scss'

const cn = makeCn('Footer', styles)

export const Footer = () => {
  const [open, setOpen] = useState(false)


  return (
    <div className={cn({ open })}>
      <div className={cn('Title')} onClick={() => setOpen((prev) => !prev)}>
        <Text color="title">Чаты</Text>
        <div className={cn('UserPreview')}>
          <Image
            classNameContainer={cn('UserPreviewImg')}
            withContainer
            path={{
              moduleName: 'users',
              folder: 'photo',
              img: '1',
            }}
          />
          <Image
            classNameContainer={cn('UserPreviewImg')}
            withContainer
            path={{
              moduleName: 'users',
              folder: 'photo',
              img: '1',
            }}
          />
          <span className={cn('UsersPlus')}>
            <Text size="1" color="note">+6</Text>
          </span>
        </div>
      </div>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Text>1</Text>
      <Button styleType="rounded" buttonName="red" icon="exit" iconPosition="left">
        Выйти
      </Button>
    </div>
  )
}
