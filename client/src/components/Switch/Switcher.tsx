import React from 'react'
import { cn } from 'src/components/Switch/cn'
import { SwitcherElement, SwitcherOption } from 'src/components/Switch/SwitcherOption'

export type SwitcherType = {
  options: SwitcherElement[]
  currentValue: any
  onChange: (id: any) => void
}

export const Switcher: React.FC<SwitcherType> = React.memo((props) => {
  const { options, currentValue, onChange } = props

  return (
    <div className={cn('Switcher')}>
      {options.map((option) => (
        <SwitcherOption
          key={option.value}
          onChange={onChange}
          currentValue={currentValue}
          switcher={option}
        />
      ))}
    </div>
  )
})
