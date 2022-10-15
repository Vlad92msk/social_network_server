import { NextPage } from 'next'
import { App } from '@modules/App'
import { Page } from '@shared/components/Page/Page'
import { PortfolioPages } from 'src/router/pages'

const Home: NextPage = (props) => (
  <Page page={PortfolioPages.PROFILE}>
    <App />
  </Page>
)

// export const getServerSideProps: GetServerSideProps = (ctx) => getSSR(ctx, async (apolloClient) => {
//   const skills = await apolloClient.query<GetAllUsersQuery>({ query: GetAllUsersDocument })
//   return ssrResult(apolloClient, { skills })
// })

export default Home
