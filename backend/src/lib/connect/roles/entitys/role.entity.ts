import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm'
import {Field, ObjectType} from '@nestjs/graphql'
import {User_ru} from '@server/lib/connect/users/entitys'

@ObjectType()
@Entity('Roles')
export class Role {
  @Field({description: 'id'})
  @PrimaryGeneratedColumn({name: 'id'})
  id: number

  @Field({description: 'Название роли'})
  @Column({name: 'value'})
  value: string

  @Field({description: 'Описание роли'})
  @Column({name: 'description'})
  description: string

  @Field(() => [User_ru])
  @ManyToMany(() => User_ru, (user) => user.connect.roles)
  users: User_ru[]
}
