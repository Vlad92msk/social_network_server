import {forwardRef, Module} from '@nestjs/common'

import {UserService} from '@server_lib/connect/users/user.service'
import {DatabaseModule} from '@server_db/db.module'
import {RolesProviders} from './providers/role.providers'
import {RoleService} from './role.service'
import {RoleResolver} from './role.resolver'
import {User_ru, Connect, Personal_ru, Progress_ru, Social_ru} from '@server/lib/connect/users/entitys'
import {UserModule} from '@server/lib/connect/users/user.module'

@Module({
  imports: [DatabaseModule],
  providers: [...RolesProviders, RoleService, RoleResolver],
  exports: [RoleService],
})
export class RoleModule {}
