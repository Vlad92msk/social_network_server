import { Field, InputType } from '@nestjs/graphql'

import { Connect, FindOneUser, Personal, Progress, Social } from '../interfaces'

@InputType({ description: 'ddd' })
export class FindUserInput implements FindOneUser {
  @Field({ nullable: true, name: 'id' })
  id?: number

  @Field({ nullable: true, name: 'connect' })
  connect?: Partial<Connect>

  @Field({ nullable: true, name: 'personal' })
  personal?: Partial<Personal>

  @Field({ nullable: true, name: 'social' })
  social?: Partial<Social>

  @Field({ nullable: true, name: 'progress' })
  progress?: Partial<Progress>
}
