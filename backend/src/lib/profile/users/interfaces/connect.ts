import {RoleType} from '@lib/connect/roles/interfaces/role'

export interface Connect {
  email: string
  password: string
  status: string
  name: string
  roles: RoleType[]
}
