import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {OrmModule} from '@db/orm.module'
import {GQLModule} from '@db/gql.module'
import {ProfileModule} from '@lib/profile/profile.module'
import baseOrmConfig from '@config/orm.config'
import mainConfig from '@config/main.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mainConfig, baseOrmConfig],
      isGlobal: true,
      envFilePath: '../.env',
    }),
    GQLModule,
    OrmModule,
    ProfileModule,
  ],
})
export class AppModule {
}
