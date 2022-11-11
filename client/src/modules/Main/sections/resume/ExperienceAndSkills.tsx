import { useState } from 'react'
import { FieldRow } from '@shared/components/FieldRow'
import { Icon } from '@shared/components/Icon'
import { Text } from '@shared/components/Text'
import { cn } from './cn'
import { ExperienceItem } from './ExperienceItem'
import { Experience, Skills } from './mock'

const enum VisibleExp {
  PRIMARY,
  SECONDARY
}

interface ExperienceAndSkillsProps {
  experiencePrimary: Experience[]
  experienceSecondary: Experience[]
  skills: Skills []
}

export const ExperienceAndSkills = (props: ExperienceAndSkillsProps) => {
  const { experiencePrimary, experienceSecondary, skills } = props
  const [selectExperience, setSelectExperience] = useState<Experience>(null)
  const [visibleExp, setVisibleExp] = useState(VisibleExp.PRIMARY)

  return (
    <FieldRow width="100" justify="between">
      <div className={cn('Skills')}>
        <Text color="title" size="6">Навыки</Text>
        <FieldRow width="100" height="100" content="center" wrap="wrap" gap="10px" align="center" justify="center">
          {skills.map(({
            id,
            name,
          }) => (
            <Icon
              className={cn('SkillsItem', { active: selectExperience?.skills.includes(name) })}
              key={id}
              icon={name}
              size="medium"
              basePath="users/skills/"
            />
          ))}
        </FieldRow>
      </div>
      <div className={cn('Experience')}>
        <FieldRow justify="between" width="100">
          <Text color="title" size="6" weight="bold" textTransform="uppercase">Опыт</Text>
          <FieldRow gap="10px">
            <Text
              color={visibleExp === VisibleExp.PRIMARY ? 'title' : 'body'}
              size="6"
              onClick={() => setVisibleExp(VisibleExp.PRIMARY)}
            >
              Осн
            </Text>
            <Text
              color={visibleExp === VisibleExp.SECONDARY ? 'title' : 'body'}
              size="6"
              onClick={() => setVisibleExp(VisibleExp.SECONDARY)}
            >
              Доп
            </Text>
          </FieldRow>
        </FieldRow>
        {(() => {
          switch (visibleExp) {
            case VisibleExp.PRIMARY:
              return (
                <div className={cn('ExperienceContainer')}>
                  {experiencePrimary.map((item) => (
                    <ExperienceItem
                      key={item.id}
                      experience={item}
                      activeId={selectExperience?.id}
                      setSelectExperience={setSelectExperience}
                    />
                  ))}
                </div>
              )
            case VisibleExp.SECONDARY:
              return (
                <div className={cn('ExperienceContainer')}>
                  {experienceSecondary.map((item) => (
                    <ExperienceItem
                      key={item.id}
                      experience={item}
                      activeId={selectExperience?.id}
                      setSelectExperience={setSelectExperience}
                    />
                  ))}
                </div>
              )
            default: return null
          }
        })()}
      </div>
    </FieldRow>
  )
}
