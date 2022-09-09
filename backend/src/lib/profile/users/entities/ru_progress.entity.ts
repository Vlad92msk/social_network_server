import {RU_User} from '@lib/profile/users/entities/ru_user.entity'
import {entity} from '@utils/entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { Progress as ProgressType } from '../interfaces/progress'


@ObjectType({ description: 'Социальная информация (ru)' })
@Entity(entity('ru_progress'))
export class RU_Progress extends BaseEntity implements ProgressType {
  @Field()
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Field({ description: 'Увлечения' })
  @Column({ name: 'hobbies', type: 'varchar', length: 20 })
  hobbies: string

  @Field({ description: 'Место учебы' })
  @Column({ name: 'placeOfStudy', type: 'varchar', length: 20 })
  placeOfStudy: string

  @Field({ description: 'Место работы' })
  @Column({ name: 'employment', type: 'varchar', length: 20 })
  employment: string

  @Field({ description: 'Владение языками' })
  @Column({ name: 'workingLanguages', type: 'varchar', length: 20 })
  workingLanguages: string

  @Field(() => RU_User)
  @OneToOne(() => RU_User, (user) => user.progress)
  user: RU_User
}
