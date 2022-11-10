import { format } from 'date-fns'
import { FieldRow } from '@shared/components/FieldRow'
import { Text } from '@shared/components/Text'
import { DateFormats } from '@shared/utils'
import { cn } from './cn'

export interface ExperienceItemProps {
  id: number
  dateStart: Date
  dateEnd?: Date
  responsibility: any[]
  companyName: string
  position: string
}

export const ExperienceItem = (props: ExperienceItemProps) => {
  const { dateStart, dateEnd, position, responsibility, companyName } = props
  return (
    <div className={cn('ExperienceItem')}>
      <Text className={cn('Period')} color="title" weight="bold" size="4">
        {`${format(dateStart, DateFormats.FORMAT_4)}-${dateEnd ? format(dateEnd, DateFormats.FORMAT_4) : 'н/в'}`}
      </Text>
      <div className={cn('ExperienceList')}>
        <FieldRow direction="column">
          <Text color="title" weight="bold" size="4">{position}</Text>
          <Text color="title" size="4">{companyName}</Text>
        </FieldRow>
        {responsibility?.map((value) => (
          <Text key={value} color="body" size="4">{`- ${value}`}</Text>
        ))}
      </div>
    </div>
  )
}
