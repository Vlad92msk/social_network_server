import { ExperienceItemProps } from '@modules/Main/sections/resume/ExperienceItem'
import { IconName } from '@public/models/icon.model'

export const experience: ExperienceItemProps[] = [
  {
    id: 1,
    dateStart: new Date('2019-08-06'),
    dateEnd: null,
    responsibility: [
      'Разработка интерфейсов',
      'Что еще делал',
      'Что еще делал',
      'Что еще делал',
      'Что еще делал',
    ],
    companyName: 'ООО "42"',
    position: 'Главный инженер-разработчик',
  },
  {
    id: 2,
    dateStart: new Date('2018-08-06'),
    dateEnd: new Date('2019-09-06'),
    responsibility: [
      'Разработка интерфейсов',
      'Что еще делал',
      'Что еще делал',
      'Что еще делал',
      'Что еще делал',
    ],
    companyName: 'ООО "42"',
    position: 'Главный инженер-разработчик',
  },
]

export const hobbies:{id: number, name: IconName}[] = [
  { id: 1, name: 'bulb' },
  { id: 2, name: 'burger-split' },
  { id: 3, name: 'burger-dot' },
]
export const skills:{id: number, name: IconName}[] = [
  { id: 1, name: 'git' },
  { id: 2, name: 'graphql' },
  { id: 3, name: 'nest' },
  { id: 4, name: 'nextLS' },
  { id: 5, name: 'postgresql' },
  { id: 6, name: 'react' },
  { id: 7, name: 'redux' },
  { id: 8, name: 'rxjs' },
  { id: 9, name: 'sass' },
  { id: 10, name: 'typeScript' },
]

export const contacts: {id: number, value: string, type: IconName}[] = [
  { id: 1, type: 'photo', value: '8-999-999-99-99' },
  { id: 2, type: 'eye', value: 'fvs011@yandex.ru' },
]
