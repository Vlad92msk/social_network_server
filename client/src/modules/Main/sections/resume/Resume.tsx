import { SectionContainer } from '../../components'
import { cn } from './cn'
import { Contacts } from './Contacts'
import { ExperienceAndSkills } from './ExperienceAndSkills'
import { WithMe } from './WithMe'

export const Resume = () => (
  <SectionContainer
    className={cn()}
    title="Обо мне"
    lastAdded={new Date()}
    withSwitcher={false}
  >
    <WithMe />
    <Contacts />
    <ExperienceAndSkills />
  </SectionContainer>
)
