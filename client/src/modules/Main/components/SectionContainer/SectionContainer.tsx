import { classnames } from '@bem-react/classnames'
import { ChangeEvent, ChangeEventHandler, PropsWithChildren, useCallback, useState } from 'react'
import { Icon } from '@shared/components/Icon'
import { Text } from '@shared/components/Text'
import { createDateFormat, DateFormats, makeCn } from '@shared/utils'
import styles from './SectionContainer.module.scss'

const cn = makeCn('SectionContainer', styles)

interface SectionContainerProps {
  className?: string
  title: string
  lastAdded: Date
}

export const SectionContainer = (props: PropsWithChildren<SectionContainerProps>) => {
  const { title, lastAdded, className, children } = props
  const [language, setLanguage] = useState('ru')
  const changeLang = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value)
  }, []);

  return (
    <div className={classnames(cn(), className)}>
      <title className={cn('Title')}>
        <Text color="title" size="7" weight="bold" textTransform="uppercase">{title}</Text>
        <div className={cn('Calendar')}>
          <Icon className={cn('CalendarIcon')} icon="calendar-not-filled" fill="redRose40" />
          <Text color="title" size="2">{createDateFormat(lastAdded, DateFormats.FORMAT_3)}</Text>
        </div>
        <div style={{
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '15px',
          width: 'fit-content',
          marginLeft: 'auto'
        }}
        >
          <input
            onChange={changeLang}
            className={cn('RadioInput')}
            type="radio"
            value="ru"
            name="lang"
            id="ru"
            checked={language === 'ru'}
          />
          <label className={cn('RadioLabel')} htmlFor="ru">Все</label>

          <input
            onChange={changeLang}
            className={cn('RadioInput')}
            type="radio"
            value="en"
            name="lang"
            id="en"
            checked={language === 'en'}
          />
          <label className={cn('RadioLabel')} htmlFor="en">Альбомы</label>
        </div>
      </title>
      {children}
    </div>
  )
}
