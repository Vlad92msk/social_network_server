import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypeOrmModuleAsyncOptions} from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface'
import {DB_VIEW_TYPE} from '@db/db.providers'

/**
 * Фабрика для создания подключений
 */
export const createDbProvider = ({dbName}: DB_VIEW_TYPE[0]): TypeOrmModuleAsyncOptions => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  name: dbName,
  useFactory: async (config: ConfigService) =>
    await {
      database: dbName,
      type: config.get<'aurora-data-api'>('TYPEORM_CONNECTION'),
      host: config.get<string>('TYPEORM_HOST'),
      username: config.get<string>('TYPEORM_USERNAME'),
      password: config.get<string>('TYPEORM_PASSWORD'),
      port: config.get<number>('TYPEORM_PORT'),
      entities: [__dirname + `/../lib/${dbName}/**/entities/*.entity{.ts,.js}`],
      autoLoadEntities: true,
      synchronize: true,
    },
})
