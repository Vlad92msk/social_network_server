import {InputType, Field} from '@nestjs/graphql'
import {IsString, IsNotEmpty, IsEnum} from 'class-validator'
import {enumMessage} from '@src/utils'
import {RoleEnum} from '../interfaces/role'
import {CreateRole} from '@lib/connect/roles/interfaces/createRole'

@InputType()
export class CreateRoleInput implements CreateRole {
  @IsNotEmpty({message: 'Значение не может быть пустым'})
  @IsString({message: 'Значение должно быть строкой'})
  @IsEnum(RoleEnum, {message: enumMessage(RoleEnum)})
  @Field()
  value: RoleEnum

  @IsNotEmpty({message: 'Значение не может быть пустым'})
  @IsString({message: 'Значение должно быть строкой'})
  @Field()
  description: string
}
