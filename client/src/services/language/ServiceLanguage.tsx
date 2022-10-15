import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import { useObservableState } from 'observable-hooks'
import React, { FC, PropsWithChildren, useEffect, useMemo } from 'react'
import { filter, map, tap } from 'rxjs'
import { useApollo } from '@my-apollo/client'
import { withPreviousItem } from '@shared/rxUtils'
import { storageGet, storageSet } from '@shared/utils'
import { ContextService, DEFAULT_LANGUAGE, Language, LANGUAGE_VARIABLES } from './context'

type TestProps = {
  provideValues: any
  apolloClient: any
  children: any
}
const Test: FC<TestProps> = React.memo((props) => {
  const { provideValues, apolloClient, children } = props
  return (
    <ContextService.Provider value={provideValues}>
      <ApolloProvider client={apolloClient}>
        {children}
      </ApolloProvider>
    </ContextService.Provider>
  )
})

export interface ServiceLanguageProps extends PropsWithChildren{
  pageProps: Record<string, any>
}

export const ServiceLanguage: FC<ServiceLanguageProps> = React.memo((props) => {
  const { pageProps, children } = props
  const { query, push } = useRouter()

  const [language, setLanguage] = useObservableState<Language>(
    (event$, init) => event$.pipe(
      filter(Boolean),
      map((lang) => {
        const isUrlCorrect = Boolean(lang && LANGUAGE_VARIABLES.includes(lang))
        return [lang, isUrlCorrect]
      }),
      tap(([lg, isCorrect]) => {
        const languageInStorage = storageGet('userLanguage') as Language
        if (isCorrect && languageInStorage !== lg) {
          storageSet('userLanguage', lg)
          push({
            query: {
              lang: lg,
            },
          })
        }

        if (!isCorrect) {
          if (!languageInStorage) {
            storageSet('userLanguage', languageInStorage || init)
          }
          push({
            query: {
              lang: languageInStorage || init,
            },
          })
        }
      }),
      withPreviousItem(),
      map(({ current, previous }:{current: [Language, boolean], previous: [Language, boolean]}) => {
        const [a, b] = current || []
        const [c, d] = previous || []
        // eslint-disable-next-line no-nested-ternary
        return b ? a : d ? c : init
      }),
    ),
    DEFAULT_LANGUAGE,
  )


  useEffect(() => {
    setLanguage(query?.lang as Language)
  }, [query?.lang, setLanguage])


  const apolloClient = useApollo(language, pageProps)
  const provideValues = useMemo(() => ({ language, setLanguage }), [language, setLanguage])

  return (
    <Test provideValues={provideValues} apolloClient={apolloClient}>
      {children}
    </Test>
  )
})
