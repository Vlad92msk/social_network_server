import { useGetAllUsersQuery } from '@my-apollo/graphql/moduleName/generate'
import { Section } from '@shared/components/Section'
import { makeCn } from '@shared/utils'
import styles from './App.module.scss'

const cn = makeCn('Application', styles)

export const App = () => {
  const { data } = useGetAllUsersQuery({ ssr: true })
  return (
    <Section
      className={cn()}
      imgClassName={cn('Img')}
      bcgImg={{
        path: {
          img: 'bcg',
          project: 'portfolio',
        },
      }}
    >
      {data?.getAllUsers.map((a) => <div>{a.id}</div>)}
    </Section>
  )
}
