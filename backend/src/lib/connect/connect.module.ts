import {Module} from '@nestjs/common'
import {RoleModule} from '@lib/connect/roles/role.module'
import {TokenModule} from '@lib/connect/tokens/token.module'

@Module({
  imports: [RoleModule, TokenModule],
  exports: [RoleModule, TokenModule],
})
export class ConnectModule {
}
