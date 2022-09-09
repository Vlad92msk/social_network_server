import {InputType, Field} from '@nestjs/graphql'
import {IsString, IsNumber, IsEnum} from 'class-validator'
import {FindRole} from '@lib/connect/roles/interfaces/findRole'
import {RoleEnum} from '@lib/connect/roles/interfaces/role'
import {enumMessage} from '@src/utils'

@InputType()
export class FindRoleInput implements FindRole {
  @IsNumber()
  @Field({nullable: true})
  id?: number

  @IsEnum(RoleEnum, {message: enumMessage(RoleEnum)})
  @Field({nullable: true})
  value?: RoleEnum

  @IsString({message: 'Значение должно быть строкой'})
  @Field({nullable: true})
  description?: string
}
