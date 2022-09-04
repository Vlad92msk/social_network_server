import {dbVariables} from '@utils/entity'
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity} from 'typeorm'
import {Field, ID, ObjectType} from '@nestjs/graphql'

@ObjectType()
@Entity(dbVariables('users'))
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Field()
  @Column()
  email: string

  @Field({nullable: true})
  @Column({nullable: true})
  name: string
}
