import {
  Connect as ConnectEntity,
  Personal as PersonalEntity,
  Social as SocialEntity,
  Progress as ProgressEntity
} from './index'

export interface UserType {
  id: number
  // connect: ConnectEntity
  personal: PersonalEntity
  social: SocialEntity
  progress: ProgressEntity
}
