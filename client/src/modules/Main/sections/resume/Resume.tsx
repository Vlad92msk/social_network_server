import { ExperienceItem } from '@modules/Main/sections/resume/ExperienceItem'
import { FieldRow } from '@shared/components/FieldRow'
import { Icon } from '@shared/components/Icon'
import { Image } from '@shared/components/Image'
import { Text } from '@shared/components/Text'
import { SectionContainer } from '../../components'
import { cn } from './cn'
import { contacts, experience, hobbies, skills } from './mock'

export const Resume = () => (
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
          {hobbies.map(({ id, name }) => (
            <Icon key={id} icon={name} size="medium" basePath="users/hobbies/" fill="bluePrimrose50" />
          ))}
        </FieldRow>
      </FieldRow>
      <FieldRow direction="column" width="50" align="bottom" gap="10px">
        <Text color="title" size="6">Контакты</Text>
        <FieldRow direction="column" align="bottom" gap="5px">
          {contacts.map(({ id, value, type }) => (
            <FieldRow key={id} justify="end" gap="5px" align="center">
              <Text color="body">{value}</Text>
              <Icon icon={type} fill="oldAsphalt40" size="ordinary" />
            </FieldRow>
          ))}
        </FieldRow>
      </FieldRow>
    </FieldRow>

    <FieldRow width="100" justify="between">
      <FieldRow direction="column" width="50" height="100" gap="10px">
        <Text color="title" size="6">Навыки</Text>
        <FieldRow width="100" height="100" content="center" wrap="wrap" gap="10px" align="center" justify="center">
          {skills.map(({ id, name }) => (
            <Icon key={id} icon={name} size="medium" basePath="users/skills/" />
          ))}
        </FieldRow>
      </FieldRow>
      <div className={cn('Experience')}>
        <Text color="title" size="6">Опыт</Text>
        <div className={cn('ExperienceContainer')}>
          {experience.map((item) => (
            <ExperienceItem key={item.id} {...item} />
          ))}
        </div>
      </div>

    </FieldRow>
  </SectionContainer>
)
