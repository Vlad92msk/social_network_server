import React, { useCallback, useState } from 'react'
import { makeCn } from '@shared/utils'
import styles from './Switch.module.scss'

const cn = makeCn('Switch', styles)

export interface SwitchOption {
  groupName: string
  label: string
  value: string|number
}

interface SwitchProps {
  options: SwitchOption[]
  startWith: SwitchOption['value']
  onChange: (selectValue: string | number) => void
}

export const Switch = (props: SwitchProps) => {
  const { options, startWith, onChange } = props
  const [result, setResult] = useState<SwitchOption['value']>(startWith)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setResult(value)
    onChange(value)
  }, [onChange])


  return (
    <div className={cn()}>
      {options.map(({ value, groupName, label }) => (
        <React.Fragment key={value}>
          <input
            onChange={handleChange}
            className={cn('RadioInput')}
            type="radio"
            value={value}
            name={groupName}
            id={String(groupName + value)}
            checked={result === value}
          />
          <label className={cn('RadioLabel')} htmlFor={String(groupName + value)}>
            {label}
          </label>
        </React.Fragment>
      ))}
    </div>
  )
}