import {TypeOrmModule} from '@nestjs/typeorm'
import {DB_MAP} from '@db/db.map'
import {createDbProvider} from './createDbProvider'

/**
 * Создание подключений
 */
export const databaseProviders = DB_MAP.map((options) => TypeOrmModule.forRootAsync(createDbProvider(options)))
