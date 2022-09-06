import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {UserResolver} from '@lib/profile/users/user.resolver'
import {UserService} from '@lib/profile/users/user.service'
import {RU_User} from '@lib/profile/users/entities'

@Module({
  imports: [TypeOrmModule.forFeature([RU_User])],
  providers: [UserService, UserResolver],
})
export class UserModule {
}
