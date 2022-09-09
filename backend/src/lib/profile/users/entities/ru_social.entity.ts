import {RU_User} from '@lib/profile/users/entities/ru_user.entity'
import {entity} from '@utils/entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, BaseEntity } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { Social as SocialType } from '../interfaces/social'


@ObjectType({ description: 'Социальная информация (ru)' })
@Entity(entity('ru_social'))
export class RU_Social extends BaseEntity implements SocialType {
  @Field()
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Field({ description: 'Друзья' })
  @Column({ name: 'friends' })
  friends: string

  @Field({ description: 'Чаты' })
  @Column({ name: 'chats' })
  chats: string

  @Field({ description: 'Подписчики' })
  @Column({ name: 'subscribers'})
  subscribers: string

  @Field({ description: 'Подписки' })
  @Column({ name: 'subscription'})
  subscription: string

  @Field(() => RU_User)
  @OneToOne(() => RU_User, (user) => user.social)
  user: RU_User
}
