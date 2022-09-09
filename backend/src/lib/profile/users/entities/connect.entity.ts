import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne, BaseEntity} from 'typeorm'
import {Field, ObjectType} from '@nestjs/graphql'

import {Role} from '@lib/connect/roles/entities/role.entity'
import {RU_User} from '@lib/profile/users/entities/ru_user.entity'
import {entity} from '@utils/entity'
import {Connect as ConnectType} from '../interfaces/connect'

@ObjectType({description: 'Инф о подключении'})
@Entity(entity('connect'))
export class Connect extends BaseEntity implements ConnectType {
  @Field()
  @PrimaryGeneratedColumn({name: 'id'})
  id: number

  @Field({description: 'Чей токен'})
  @Column({name: 'name'})
  name: string

  @Field({description: 'Пароль'})
  @Column({name: 'password'})
  password: string

  @Field({description: 'Почта'})
  @Column({name: 'email', unique: true})
  email: string

  @Field({description: 'Статус'})
  @Column({name: 'status'})
  status: string

  @Field(() => [Role])
  @ManyToMany(() => Role, (role) => role.users, {cascade: true})
  @JoinTable()
  roles: Role[]

  @Field(() => RU_User)
  @OneToOne(() => RU_User, (user) => user.connect)
  user: RU_User
}
