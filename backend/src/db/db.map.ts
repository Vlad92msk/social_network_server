/**
 * Карта базы данных
 */
export const DB_MAP = [
  {
    schemas: [
      {name: 'connect', tables: ['auth', 'roles', 'tokens']},
    ] as const,
  }, {
    schemas: [
      {name: 'profile', tables: ['ru_users', 'ru_social', 'ru_progress', 'ru_personal', 'connect']},
    ] as const,
  },
]

export type DB_MAP_TYPE = typeof DB_MAP
export type DB_TABLES = DB_MAP_TYPE[number]['schemas'][number]['tables'][number]
export type DB_SCHEMAS = DB_MAP_TYPE[number]['schemas'][number]['name']
