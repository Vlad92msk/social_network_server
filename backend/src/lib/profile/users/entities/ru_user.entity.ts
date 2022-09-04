import {UserType} from '@lib/profile/users/interfaces'
import {dbVariables} from '@utils/entity'
import { Entity, PrimaryGeneratedColumn, JoinTable, OneToOne, BaseEntity } from 'typeorm'
import {Field, ID, ObjectType} from '@nestjs/graphql'
import {
  RU_Personal as PersonalEntity,
  RU_Social as SocialEntity,
  RU_Progress as ProgressEntity
} from './index'



export type UserTypeRelations = [keyof Omit<UserType, 'id'>]

@ObjectType({ description: 'Пользователь (ru)' })
@Entity(dbVariables('ru_users'))
export class RU_User extends BaseEntity implements UserType {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  // @Field(() => ConnectEntity)
  // @OneToOne(() => ConnectEntity, (connect) => connect.user, { cascade: true })
  // @JoinTable()
  // connect: ConnectEntity

  @Field(() => PersonalEntity)
  @OneToOne(() => PersonalEntity, (personal) => personal.user, { cascade: true })
  @JoinTable()
  personal: PersonalEntity

  @Field(() => SocialEntity)
  @OneToOne(() => SocialEntity, (social) => social.user, { cascade: true })
  @JoinTable()
  social: SocialEntity

  @Field(() => ProgressEntity)
  @OneToOne(() => ProgressEntity, (progress) => progress.user, { cascade: true })
  @JoinTable()
  progress: ProgressEntity
}
