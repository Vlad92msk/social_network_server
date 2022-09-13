import { ArgsType, Field } from '@nestjs/graphql'

import { FindUserInput } from '../inputs/find-user.input'

@ArgsType()
export class GetUsersArgs {
  @Field({ nullable: true })
  where?: FindUserInput
}
