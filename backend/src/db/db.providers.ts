import {TypeOrmModule} from '@nestjs/typeorm'
import {createDbProvider} from './createDbProvider'

/**
 * Именя баз данных
 */
export enum dbName {
  AUTH = 'auth',
}

export interface DbCustomOptions extends Record<string, dbName | any> {
  dbName: dbName.AUTH
}

const dbCustomOptions: DbCustomOptions[] = [{dbName: dbName.AUTH}]

/**
 * Создание подключений
 */
export const databaseProviders = dbCustomOptions.map((options) => TypeOrmModule.forRootAsync(createDbProvider(options)))
