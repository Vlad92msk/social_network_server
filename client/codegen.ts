// eslint-disable-next-line import/no-import-module-exports
import fs from 'fs'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../.env' })

const folder = './apollo/graphql/'

const options = {
  plugins: [
    'typescript',
    'typescript-operations',
    'typescript-react-apollo',
  ],
}

const generates = fs.readdirSync(folder).reduce((acc, moduleName) => ({
  ...acc,
  [`apollo/graphql/${moduleName}/generate-${moduleName}-hooks.ts`]: options,
}), {})

module.exports = {
  schema: `http://${process.env.API_HOST}:${process.env.API_PORT}/graphql`,
  documents: 'apollo/graphql/**/*.gql',
  generates,
}
