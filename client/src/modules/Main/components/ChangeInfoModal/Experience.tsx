import { useCallback, useId } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { ChangeResume } from '@modules/Main/components'
import { ButtonBox } from '@shared/components/ButtonBox'
import { FieldRow } from '@shared/components/FieldRow'
import { FieldSet } from '@shared/components/FieldSet'
import { Icon } from '@shared/components/Icon'
import { Option, SelectField } from '@shared/components/SelectField'
import { Text } from '@shared/components/Text'
import { TextField } from '@shared/components/TextField'
import { phoneMask } from '@shared/utils'
import { Experience as ExperienceType } from '../../sections/resume/mock'
import { cn } from './cn'

const initConvoyPerson: ExperienceType = {
  id: '3613',
  skills: null,
  responsibility: null,
  position: null,
  dateEnd: null,
  dateStart: null,
  companyName: null,
}

export const Experience = () => {
  const { control } = (useFormContext<ChangeResume>() || {})

  const { fields, append } = useFieldArray({
    control,
    name: 'experienceSecondary',
  })

  const handleAddPerson = useCallback(() => {
    append(initConvoyPerson)
  }, [append])

  return (
    <FieldSet className={cn('Experience')} label="Опыт">
      <div className={cn('ExperienceContainer')}>
        {fields.map((teacher, index) => (
          <div className={cn('ExperienceContainerItem')} key={teacher.id}>
            <Controller
              name={`experienceSecondary.${index}.companyName`}
              control={control}
              rules={{
                required: 'Укажите название компании',
              }}
              render={({ field }) => (
                <TextField
                  autoWidth
                  label="Название компании"
                  placeholder=""
                  required
                  {...field}
                />
              )}
            />
            <Controller
              name={`experienceSecondary.${index}.position`}
              control={control}
              rules={{
                required: 'Укажите должность',
              }}
              render={({ field }) => (
                <TextField
                  autoWidth
                  label="Должность"
                  placeholder=""
                  required
                  {...field}
                />
              )}
            />
          </div>
        ))}
      </div>
      <ButtonBox className={cn('ExperienceAdd')} onClick={handleAddPerson}>
        <Icon icon="plus" size="small_1" fill="light100" />
        <Text weight="bold" color="body"> Добавить сопровождающего</Text>
      </ButtonBox>
    </FieldSet>
  )
}
