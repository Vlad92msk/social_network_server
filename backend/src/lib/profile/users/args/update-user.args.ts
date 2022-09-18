import { ArgsType, Field } from '@nestjs/graphql'
import { GetUserArgs } from '.'

@ArgsType()
export class UpdateUserArgs extends GetUserArgs {}
