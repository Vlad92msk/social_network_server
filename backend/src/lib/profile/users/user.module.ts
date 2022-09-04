import {UserResolver} from '@lib/profile/users/user.resolver'
import {UserService} from '@lib/profile/users/user.service'
import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {db} from '@db/db.map'
import {RU_Personal, RU_Progress, RU_Social, RU_User} from '@lib/profile/users/entities'

@Module({
  imports: [TypeOrmModule.forFeature([RU_User, RU_Personal, RU_Social, RU_Progress], db.PROFILE)],
  providers: [UserService, UserResolver],
})
export class UserModule {
}
