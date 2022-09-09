import {RoleEnum} from '@lib/connect/roles/interfaces/role'
import {Field, InputType} from '@nestjs/graphql'

@InputType()
export class UpdateUserRolesInput {
  @Field()
  role: RoleEnum
}
