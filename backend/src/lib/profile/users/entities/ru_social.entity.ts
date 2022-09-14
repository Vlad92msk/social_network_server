import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { RU_User } from '@lib/profile/users/entities/ru_user.entity'
import { entity } from '@utils/entity'

import { Social as SocialType } from '../interfaces/social'

@ObjectType({ description: 'Социальная информация (ru)' })
@Entity(entity('ru_social'))
export class RU_Social extends BaseEntity implements SocialType {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field({ description: 'Друзья' })
  @Column({ name: 'friends', nullable: true })
  friends: string

  @Field({ description: 'Чаты' })
  @Column({ name: 'chats', nullable: true })
  chats: string

  @Field({ description: 'Подписчики' })
  @Column({ name: 'subscribers', nullable: true })
  subscribers: string

  @Field({ description: 'Подписки' })
  @Column({ name: 'subscription', nullable: true })
  subscription: string

  @Field(() => RU_User)
  @OneToOne(() => RU_User, (user) => user.social)
  user: RU_User
}
