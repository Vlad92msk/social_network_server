import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Role} from '@lib/connect/roles/entities/role.entity'
import {RoleModule} from '@lib/connect/roles/role.module'
import {UserResolver} from './user.resolver'
import {UserService} from './user.service'
import {Connect, RU_User, RU_Social, RU_Personal, RU_Progress} from './entities'

@Module({
  imports: [
    TypeOrmModule.forFeature([RU_User, Connect, Role, RU_Social, RU_Personal, RU_Progress]),
    RoleModule
  ],
  providers: [UserService, UserResolver],
})
export class UserModule {
}
