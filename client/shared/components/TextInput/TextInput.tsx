import { classnames } from '@bem-react/classnames'
import React, { useCallback } from 'react'
import { IconName } from '@public/models/icon.model'
import { IconFill } from '@shared/components/Icon'
import { IconButton } from '@shared/components/IconButton'
import { Text, TextSize } from '@shared/components/Text'
import { makeCn } from '@shared/utils'
import styles from './TextInput.module.scss'

const cn = makeCn('TextInput', styles)

export interface TextInputProps {
  className?: string
  style?: React.CSSProperties

  icon?: IconName
  iconPosition?: 'left' | 'right'
  iconFill?: IconFill
  iconClick?: () => void

  size?: TextSize
  error?: boolean
  disabled?: boolean
  placeholder?: string

  name?: string
  value: string
  onChange: (value: string, name?: string) => void
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    className,
    style,

    icon,
    iconPosition,
    iconFill,
    iconClick,

    name,
    value,
    onChange,
    onClick,

    size,
    disabled,
    placeholder,
    error,
  } = props

  const handleChange = useCallback(
    ({ target: { value: nextValue } }) => {
      onChange(nextValue, name)
    },
    [name, onChange],
  )

  return (
    <div className={classnames(cn({ error }), className)} style={style} onClick={onClick}>
      {icon && <IconButton className={cn('Icon', { iconPosition })} icon={icon} fill={iconFill} onClick={iconClick} />}
      <Text
        as="input"
        className={cn('Input', { error, icon: !!icon && iconPosition })}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        // @ts-ignore
        size={size}
      />
    </div>
  )
}

TextInput.defaultProps = {
  className: null,
  placeholder: 'Введите значение...',
  iconPosition: 'left',
  iconFill: 'oldAsphalt40',
}
