import { FieldRow } from '@shared/components/FieldRow'
import { Icon } from '@shared/components/Icon'
import { Image } from '@shared/components/Image'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import { SectionContainer } from '../../components'
import styles from './WithMe.module.scss'

const cn = makeCn('WithMe', styles)

export const WithMe = () => (
  <SectionContainer
    className={cn()}
    title="Обо мне"
    lastAdded={new Date()}
    withSwitcher={false}
  >
    <FieldRow width="100" align="center" gap="50px">
      <FieldRow className={cn('UserPhotoContainer')}>
        <Image path={{ moduleName: 'users', folder: 'photo', img: '1' }} />
      </FieldRow>
      <FieldRow direction="column">
        <Text color="title" textTransform="uppercase" size="8" weight="bold">Фирсов Влад</Text>
        <Text color="title" textTransform="uppercase" size="6">Frontend-азработчик</Text>
      </FieldRow>
    </FieldRow>
    <FieldRow width="100" justify="between">
      <FieldRow direction="column" width="50" gap="10px">
        <Text color="title" size="6">Увлечения</Text>
        <FieldRow width="100" wrap="wrap" gap="10px">
          <Icon icon="redux" size="medium" />
          <Icon icon="graphql" size="medium" />
          <Icon icon="rxjs" size="medium" />
        </FieldRow>
      </FieldRow>
      <FieldRow direction="column" width="50" align="bottom" gap="10px">
        <Text color="title" size="6">Контакты</Text>
        <FieldRow direction="column" align="bottom" gap="5px">
          <FieldRow justify="end" gap="5px" align="center">
            <Text color="body">8-999-999-99-99</Text>
            <Icon icon="photo" fill="oldAsphalt40" size="ordinary" />
          </FieldRow>
          <FieldRow justify="end" gap="5px" align="center">
            <Text color="body">fvs011@yandex.ru</Text>
            <Icon icon="flip" fill="oldAsphalt40" size="ordinary" />
          </FieldRow>
        </FieldRow>
      </FieldRow>
    </FieldRow>

    <FieldRow width="100" justify="between">
      <FieldRow direction="column" width="50" height="100" gap="10px">
        <Text color="title" size="6">Навыки</Text>
        <FieldRow width="100" height="100" content="center" wrap="wrap" gap="10px" align="center" justify="center">
          <Icon icon="redux" size="medium" />
          <Icon icon="graphql" size="medium" />
          <Icon icon="rxjs" size="medium" />
          <Icon icon="postgresql" size="medium" />
          <Icon icon="nest" size="medium" />
          <Icon icon="react" size="medium" />
          <Icon icon="git" size="medium" />
          <Icon icon="typeScript" size="medium" />
          <Icon icon="sass" size="medium" />
          <Icon icon="nextLS" size="medium" />
        </FieldRow>
      </FieldRow>
      <div className={cn('Experience')}>
        <Text color="title" size="6">Опыт</Text>
        <div className={cn('ExperienceContainer')}>
          <div className={cn('ExperienceItem')}>
            <Text className={cn('Period')} color="title" weight="bold" size="4">
              2019-n/v
            </Text>
            <div className={cn('ExperienceList')}>
              <FieldRow direction="column">
                <Text color="title" weight="bold" size="4">Главный инженер-разработчик</Text>
                <Text color="title" size="4">ООО "42"</Text>
              </FieldRow>
              <br />
              <Text color="body" size="4">- Разработка интерфейсов</Text>
              <Text color="body" size="4">- Что еще делал</Text>
              <Text color="body" size="4">- Что еще делал</Text>
              <Text color="body" size="4">- Что еще делал</Text>
              <Text color="body" size="4">- Что еще делал</Text>
            </div>
          </div>
          <div className={cn('ExperienceItem')}>
            <Text className={cn('Period')} color="title" weight="bold" size="4">
              2019-n/v
            </Text>
            <div className={cn('ExperienceList')}>
              <FieldRow direction="column">
                <Text color="title" weight="bold" size="4">Главный инженер-разработчик</Text>
                <Text color="title" size="4">ООО "42"</Text>
              </FieldRow>
              <br />
              <Text color="body" size="4">- Разработка интерфейсов</Text>
              <Text color="body" size="4">- Что еще делал</Text>
              <Text color="body" size="4">- Что еще делал</Text>
              <Text color="body" size="4">- Что еще делал</Text>
              <Text color="body" size="4">- Что еще делал</Text>
            </div>
          </div>

        </div>
      </div>

    </FieldRow>
  </SectionContainer>
)
