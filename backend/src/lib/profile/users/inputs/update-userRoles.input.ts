import { Field, InputType } from '@nestjs/graphql'
import { RoleEnum } from '@lib/connect/roles/interfaces/role'

@InputType()
export class UpdateUserRolesInput {
  @Field()
  role: RoleEnum
}
