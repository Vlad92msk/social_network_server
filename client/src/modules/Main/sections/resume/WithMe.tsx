import { FieldRow } from '@shared/components/FieldRow'
import { Image } from '@shared/components/Image'
import { Text } from '@shared/components/Text'
import { cn } from './cn'

export const WithMe = () => (
  <FieldRow width="100" align="center" gap="50px">
    <FieldRow className={cn('UserPhotoContainer')}>
      <Image path={{ moduleName: 'users', folder: 'photo', img: '1' }} />
    </FieldRow>
    <FieldRow direction="column">
      <Text color="title" textTransform="uppercase" size="8" weight="bold">Фирсов Влад</Text>
      <Text color="title" textTransform="uppercase" size="6">Frontend-азработчик</Text>
    </FieldRow>
  </FieldRow>
)
