import { ArgsType, Field } from '@nestjs/graphql'
import { FindUserToConnectInput } from '@lib/profile/users/inputs/find-user-to-connect.input'
import { FindUserToPersonalInput } from '@lib/profile/users/inputs/find-user-to-personal.input'
import { FindUserToProgressInput } from '@lib/profile/users/inputs/find-user-to-progress.input'
import { FindUserToSocialInput } from '@lib/profile/users/inputs/find-user-to-social.input'

@ArgsType()
export class GetUsersArgs {
  @Field({ nullable: true })
  id?: number

  @Field({ nullable: true })
  connect?: FindUserToConnectInput

  @Field({ nullable: true })
  personal?: FindUserToPersonalInput

  @Field({ nullable: true })
  social?: FindUserToSocialInput

  @Field({ nullable: true })
  progress?: FindUserToProgressInput
}
