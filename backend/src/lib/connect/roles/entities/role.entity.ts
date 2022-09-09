import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, BaseEntity} from 'typeorm'
import {Field, ID, ObjectType} from '@nestjs/graphql'
import {RoleType} from '@lib/connect/roles/interfaces/role'
import {Connect, RU_User} from '@lib/profile/users/entities'
import {entity} from '@utils/entity'

@ObjectType()
@Entity(entity('roles'))
export class Role extends BaseEntity implements RoleType {
  @Field(() => ID)
  @PrimaryGeneratedColumn({name: 'id'})
  id: number

  @Field({description: 'Название роли'})
  @Column({name: 'value'})
  value: string

  @Field({description: 'Описание роли'})
  @Column({name: 'description'})
  description: string

  @Field(() => [RU_User])
  @ManyToMany(() => RU_User, (user) => user.connect.roles)
  users: RU_User[]
}
