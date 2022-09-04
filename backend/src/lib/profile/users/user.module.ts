import {UserResolver} from '@lib/profile/users/user.resolver'
import {UserService} from '@lib/profile/users/user.service'
import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {db} from '@db/db.map'

import {UserEntity} from './entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity], db.PROFILE)],
  providers: [UserService, UserResolver],
})
export class UserModule {}
