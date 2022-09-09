import {InputType, Field, ID} from '@nestjs/graphql'
import {Connect, FindOneUser, Personal, Progress, Social} from '../interfaces'

@InputType()
export class FindUserInput implements FindOneUser {
  @Field(() => ID, {nullable: true})
  id?: number

  @Field({nullable: true})
  connect?: Partial<Connect>

  @Field({nullable: true})
  personal?: Partial<Personal>

  @Field({nullable: true})
  social?: Partial<Social>

  @Field({nullable: true})
  progress?: Partial<Progress>
}
