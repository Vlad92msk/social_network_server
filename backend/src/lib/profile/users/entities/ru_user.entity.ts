import { Field, ID, ObjectType } from '@nestjs/graphql'
import { BaseEntity, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UserType } from '@lib/profile/users/interfaces'
import { entity } from '@utils/entity'

import { Connect as ConnectEntity, RU_Personal as PersonalEntity, RU_Progress as ProgressEntity, RU_Social as SocialEntity } from './index'

export type UserTypeRelations = [keyof Omit<UserType, 'id'>]

@ObjectType({ description: 'Пользователь (ru)' })
@Entity(entity('ru_users'))
export class RU_User extends BaseEntity implements UserType {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Field(() => ConnectEntity)
  @OneToOne(() => ConnectEntity, (connect) => connect.user)
  @JoinColumn()
  connect: ConnectEntity

  @Field(() => PersonalEntity)
  @OneToOne(() => PersonalEntity, (personal) => personal.user)
  @JoinColumn()
  personal: PersonalEntity

  @Field(() => SocialEntity)
  @OneToOne(() => SocialEntity, (social) => social.user)
  @JoinColumn()
  social: SocialEntity

  @Field(() => ProgressEntity)
  @OneToOne(() => ProgressEntity, (progress) => progress.user)
  @JoinColumn()
  progress: ProgressEntity
}

/**
 * type: 'varchar' - Для строк до 65535 символов
 * length: 30 - кол-во букв в строке (в т.ч пробелы)
 * width: 4 - кол-во цифр в числе
 */
