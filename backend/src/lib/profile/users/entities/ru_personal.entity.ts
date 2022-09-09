import {RU_User} from '@lib/profile/users/entities/ru_user.entity'
import {entity} from '@utils/entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { Personal as PersonalType } from '../interfaces/personal'


@ObjectType({ description: 'Персональная информация (ru)' })
@Entity(entity('ru_personal'))
export class RU_Personal extends BaseEntity implements PersonalType {
  @Field()
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Field({ description: 'Имя' })
  @Column({ name: 'name', type: 'varchar', length: 20, })
  name: string

  @Field({ description: 'Фамилия' })
  @Column({ name: 'lastName', type: 'varchar', length: 20 })
  lastName: string

  @Field({ description: 'Отчество' })
  @Column({ name: 'patronymicName', type: 'varchar', length: 20, nullable: true })
  patronymicName: string

  @Field({ description: 'Пол' })
  @Column({ name: 'gender', type: 'varchar', length: 10, nullable: true })
  gender: string

  @Field({ description: 'Страна' })
  @Column({ name: 'country', type: 'varchar', length: 20, nullable: true })
  country: string

  @Field({ description: 'Город' })
  @Column({ name: 'city', type: 'varchar', length: 20, nullable: true })
  city: string

  @Field({ description: 'Гражданство' })
  @Column({ name: 'nationality', type: 'varchar', length: 20, nullable: true })
  nationality: string

  @Field({ description: 'Гражданство' })
  @Column({ name: 'dateOfBirth',  type: 'date',  nullable: true })
  dateOfBirth: Date

  @Field(() => RU_User)
  @OneToOne(() => RU_User, (user) => user.personal)
  user: RU_User
}
