import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { RU_User } from '@lib/profile/users/entities/ru_user.entity'
import { entity } from '@utils/entity'

import { Personal as PersonalType } from '../interfaces/personal'

@ObjectType({ description: 'Персональная информация (ru)' })
@Entity(entity('ru_personal'))
export class RU_Personal extends BaseEntity implements PersonalType {
  @Field()
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Field({ description: 'Имя' })
  @Column({
    name: 'name',
    type: 'varchar',
    length: 20,
    default: 'Влад',
  })
  name: string

  @Field({ description: 'Фамилия' })
  @Column({
    name: 'lastName',
    type: 'varchar',
    length: 20,
    default: 'Фирсов',
  })
  lastName: string

  @Field({ description: 'Отчество' })
  @Column({
    name: 'patronymicName',
    type: 'varchar',
    length: 20,
    nullable: true,
    default: 'Сергеевич',
  })
  patronymicName: string

  @Field({ description: 'Пол' })
  @Column({
    name: 'gender',
    type: 'varchar',
    length: 10,
    nullable: true,
    default: 'М',
  })
  gender: string

  @Field({ description: 'Страна' })
  @Column({
    name: 'country',
    type: 'varchar',
    length: 20,
    nullable: true,
    default: 'Россия',
  })
  country: string

  @Field({ description: 'Город' })
  @Column({
    name: 'city',
    type: 'varchar',
    length: 20,
    nullable: true,
    default: 'Москва',
  })
  city: string

  @Field({ description: 'Гражданство' })
  @Column({
    name: 'nationality',
    type: 'varchar',
    length: 20,
    nullable: true,
    default: 'РФ',
  })
  nationality: string

  @Field({ description: 'Гражданство' })
  @Column({
    name: 'dateOfBirth',
    type: 'date',
    nullable: true,
  })
  dateOfBirth: Date

  @Field(() => RU_User)
  @OneToOne(() => RU_User, (user) => user.personal)
  user: RU_User
}
