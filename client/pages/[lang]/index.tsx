import { NextPage } from 'next'
import { App } from '@modules/App'

const Home: NextPage = (props) => (
  <App />
)

// export const getServerSideProps: GetServerSideProps = (ctx) => getSSR(ctx, async (apolloClient) => {
//   const skills = await apolloClient.query<GetAllUsersQuery>({ query: GetAllUsersDocument })
//   return ssrResult(apolloClient, { skills })
// })

export default Home
