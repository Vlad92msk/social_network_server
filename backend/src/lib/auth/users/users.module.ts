import { dbName } from '@db/db.providers'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntity } from './entities/user.entity'
import { UserService } from '@lib/auth/users/user.service'
import { UserResolver } from '@lib/auth/users/user.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity], dbName.AUTH)],
  providers: [UserService, UserResolver]
})
export class UsersModule {
}
