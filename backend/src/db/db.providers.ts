import {TypeOrmModule} from '@nestjs/typeorm'
import {findKey} from 'lodash'
import {createDbProvider} from './createDbProvider'

/**
 * Именя баз данных
 */
export enum dbName {
  CONNECT = 'connect',
  PROFILE = 'profile',
}

/**
 * Преставление всей базы данных
 */
export const DB_VIEW = [
  {
    dbName: dbName.CONNECT,
    schemas: [
      {name: 'auth', tables: ['auth']},
      {name: 'roles', tables: ['roles']},
      {name: 'token', tables: ['tokens']},
    ] as const,
  }, {
    dbName: dbName.PROFILE,
    schemas: [
      {name: 'user', tables: ['users']},
    ] as const,
  },
]

export type DB_VIEW_TYPE = typeof DB_VIEW
export type BD_TABLES = DB_VIEW_TYPE[number]['schemas'][number]['tables'][number]

/**
 * Создание подключений
 */
export const databaseProviders = DB_VIEW.map((options) => TypeOrmModule.forRootAsync(createDbProvider(options)))
