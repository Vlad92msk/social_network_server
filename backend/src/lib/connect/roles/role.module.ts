import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Connect, RU_User, RU_Personal, RU_Social, RU_Progress} from '@lib/profile/users/entities'

import {Role} from './entities/role.entity'
import {RoleService} from './role.service'
import {RoleResolver} from './role.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([Role, Connect, RU_User, RU_Personal, RU_Social, RU_Progress])],
  providers: [RoleService, RoleResolver],
  exports: [RoleService],
})
export class RoleModule {
}
