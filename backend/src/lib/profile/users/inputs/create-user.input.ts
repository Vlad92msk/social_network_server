import {Field, InputType} from '@nestjs/graphql'
import {IsNotEmpty, Matches} from 'class-validator'

@InputType()
export class CreateUserInput {
  @Field()
  email: string

  @Field({nullable: true})
  name: string

  @IsNotEmpty()
  @Matches(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/, { message: 'Пароль ненадежный' })
  @Field()
  password: string
}
