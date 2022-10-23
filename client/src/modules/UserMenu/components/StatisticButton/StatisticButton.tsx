import { IconName } from '@public/models/icon.model'

import { ButtonBox } from '@shared/components/ButtonBox'
import { Icon } from '@shared/components/Icon'
import { Text } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import styles from './StatisticButton.module.scss'

const cn = makeCn('StatisticButton', styles)

type StatisticButtonsProps = {
  text: string
  count: number
  onOpen: () => void
  icon: IconName
}
export const StatisticButton = (props: StatisticButtonsProps) => {
  const { count, text, onOpen, icon } = props

  return (
    <ButtonBox className={cn('ButtonTextBox')} onClick={onOpen}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon className={cn('ButtonIcon')} size="ordinary" icon={icon} />
        <Text size="8">{count}</Text>
      </div>
      <Text>{text}</Text>
    </ButtonBox>
  )
}
