import { Field, InputType } from '@nestjs/graphql'

import { Connect, Personal, Progress, Social } from '../interfaces'

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  id?: number

  @Field({ nullable: true })
  connect?: Partial<Connect>

  @Field({ nullable: true })
  personal?: Partial<Personal>

  @Field({ nullable: true })
  social?: Partial<Social>

  @Field({ nullable: true })
  progress?: Partial<Progress>
}
