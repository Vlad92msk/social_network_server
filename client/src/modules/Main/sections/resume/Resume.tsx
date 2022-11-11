import { SectionContainer } from '../../components'
import { cn } from './cn'
import { Contacts } from './Contacts'
import { ExperienceAndSkills } from './ExperienceAndSkills'
import { contacts, experiencePrimary, experienceSecondary, hobbies, schoolInfo, skills } from './mock'
import { School } from './School'
import { WithMe } from './WithMe'

export const Resume = () => (
  <SectionContainer
    className={cn()}
    title="Обо мне"
    lastAdded={new Date()}
    withSwitcher={false}
  >
    <WithMe />
    <Contacts contacts={contacts} hobbies={hobbies} />
    <ExperienceAndSkills
      skills={skills}
      experienceSecondary={experienceSecondary}
      experiencePrimary={experiencePrimary}
    />
    <School schoolInfo={schoolInfo} />
  </SectionContainer>
)
