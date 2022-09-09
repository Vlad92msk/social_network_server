import {entity} from '@utils/entity'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: 'Хранит актуальный токен для каждого пользователя' })
@Entity(entity('tokens'))
export class Token {
  @Field()
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Field({ description: 'Токен' })
  @Column({ name: 'token', unique: true })
  token: string

  @Field({ description: 'Чей токен' })
  @Column({ name: 'uid', unique: true })
  uid: number

  @Field(() => Date, { description: 'Сколько действует' })
  @Column({ name: 'expireAt' })
  expireAt: Date
}
