import React, { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { AreaField } from '@shared/components/AreaField'
import { Modal } from '@shared/components/Modal'
import { TextField } from '@shared/components/TextField'
import { useSwitcher } from '@shared/hooks'
import { makeCn } from '@shared/utils'
import { SwitchType } from 'src/components'
import styles from './ChangeInfoModal.module.scss'


const cn = makeCn('ChangeInfoModal', styles)


const enum ChangeSections {
  MAIN= 'main',
  HOBBIES= 'hobbies',
  CONTACTS = 'contacts',
  SKILLS= 'skills',
  EXP='experience',
  SCHOOL = 'school'
}

interface ChangeInfoModalProps {
  open: boolean
  setOpen: () => void
}

export const ChangeInfoModal = (props: ChangeInfoModalProps) => {
  const { open, setOpen } = props
  const [openSection, switcher] = useSwitcher<ChangeSections>({
    initial: ChangeSections.MAIN,
    groupName: 'changeResumeInfoSection',
    type: SwitchType.VERTICAL,
    className: cn('Switcher'),
    options: [
      { value: ChangeSections.MAIN, label: 'Осн' },
      { value: ChangeSections.HOBBIES, label: 'Увлечения' },
      { value: ChangeSections.CONTACTS, label: 'Контакты' },
      { value: ChangeSections.SKILLS, label: 'Навыки' },
      { value: ChangeSections.EXP, label: 'Опыт' },
      { value: ChangeSections.SCHOOL, label: 'Учеба' },
    ],
  })

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name1: 'a',
      name2: 'b',
    },

  })
  const onSubmit = (data) => console.log(data)


  return (
    <Modal className={cn()} open={open} onClose={setOpen}>
      {switcher}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{
            required: 'Введите название',
          }}
          name="name1"
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Название"
              placeholder="Введите название..."
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="name2"
          rules={{
            required: 'Введите описание',
          }}
          render={({ field: { onChange, value } }) => (
            <AreaField
              label="Описание"
              placeholder="Введите описание описание..."
              value={value}
              onChange={onChange}
            />
          )}
        />
        <input type="submit" />
      </form>
    </Modal>
  )
}
