import {BD_TABLES, DB_VIEW} from '@db/db.providers'

/**
 * Принимает название искомой таблицы и вовзращает Базу данных и схему где лежит данная таблица
 */
export const dbVariables = (table: BD_TABLES) => DB_VIEW.reduce((acc, item) => {
  // @ts-ignore
  const findSchema = item.schemas.find(({tables}) => tables.includes(table))?.name
  return findSchema ? ({db: item.dbName, schema: findSchema, name: table}) : acc
}, {})

