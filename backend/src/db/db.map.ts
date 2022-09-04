/**
 * Именя баз данных
 */
export enum db {
  CONNECT = 'connect',
  PROFILE = 'profile',
}

/**
 * Карта базы данных
 */
export const DB_MAP = [
  {
    dbName: db.CONNECT,
    schemas: [
      {name: 'auth', tables: ['auth']},
      {name: 'roles', tables: ['roles']},
      {name: 'token', tables: ['tokens']},
    ] as const,
  }, {
    dbName: db.PROFILE,
    schemas: [
      {name: 'user', tables: ['users']},
    ] as const,
  },
]

export type DB_MAP_TYPE = typeof DB_MAP
export type DB_TABLES = DB_MAP_TYPE[number]['schemas'][number]['tables'][number]
export type DB_SCHEMAS = DB_MAP_TYPE[number]['schemas'][number]['name']
