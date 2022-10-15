import { useObservableCallback, useSubscription } from 'observable-hooks'
import { pluck } from 'rxjs'
import { useGetAllUsersQuery } from '@my-apollo/graphql/moduleName/generate'
import { Section } from '@shared/components/Section'
import { makeCn } from '@shared/utils'
import { useServiceLanguageAction } from 'src/services/language'
import styles from './App.module.scss'

const cn = makeCn('Application', styles)

export const App = () => {
  const wed = useServiceLanguageAction()
  const [onChange, textChange$] = useObservableCallback< string, React.FormEvent<HTMLInputElement> >((event$) => event$.pipe(
    pluck('currentTarget', 'value'),
  ))

  useSubscription(textChange$, wed)
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
      <input
        style={{
          position: 'relative',
        }}
        type="text"
        onChange={onChange}
      />
    </Section>
  )
}
