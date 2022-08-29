import { dbName } from '@db/db.providers'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity('users', { database: dbName.AUTH, schema: 'user' })
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

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string
}
