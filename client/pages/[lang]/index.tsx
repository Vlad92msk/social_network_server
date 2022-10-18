import { Profile } from '@modules/Profile'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { App } from '@modules/App'
import { Language } from '@services/language'
import { Page } from '@shared/components/Page/Page'
import { getSSR, ssrResult } from '@shared/utils'
import { PortfolioPages } from 'src/router/pages'

interface HomeProps {
  lang: Language
}

const Home: NextPage<HomeProps> = (props) => {
  const { lang } = props
  const { pathname } = useRouter()

  return (
    <Page page={PortfolioPages.PROFILE} lang={lang}>
      <App pathname={pathname}>
        <Profile />
      </App>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = (ctx) => (
  getSSR(ctx, async (apolloClient) => (
    ssrResult(apolloClient, { lang: ctx.query.lang })
  ))
)

export default Home
