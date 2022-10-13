// eslint-disable-next-line import/no-import-module-exports
import fs from 'fs'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../.env' })

const folder = 'src/apollo/graphql/'

/**
 * В какую папку положить сгенерированные хуки
 */
const generates = fs.readdirSync(folder).reduce((acc, moduleName) => ({
  ...acc,
  [`${folder}${moduleName}/generate-${moduleName}-hooks.ts`]: {
    plugins: [
      'typescript',
      'typescript-operations',
      'typescript-react-apollo',
    ],
  },
}), {})

module.exports = {
  /* Путь к схеме */
  schema: `http://${process.env.API_HOST}:${process.env.API_PORT}/graphql`,
  /* Путь к файлам где будут схемы запросов */
  documents: `${folder}**/*.gql`,
  generates,
}
