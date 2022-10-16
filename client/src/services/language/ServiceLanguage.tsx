import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import { useObservable, useObservableState, useSubscription } from 'observable-hooks'
import React, { FC, PropsWithChildren} from 'react'
import { distinctUntilChanged, filter, map, tap } from 'rxjs'
import { useApollo } from '@my-apollo/client'
import { storageGet, storageSet } from '@shared/utils'
import { ContextService, DEFAULT_LANGUAGE, Language, LANGUAGE_VARIABLES } from './context'

export interface ServiceLanguageProps extends PropsWithChildren{
  pageProps: Record<string, any>
}

export const ServiceLanguage: FC<ServiceLanguageProps> = React.memo((props) => {
  const { pageProps, children } = props
  const router = useRouter()

  const [language, setLanguage] = useObservableState<Language>(
    (event$, init) => event$.pipe(
      filter(Boolean),
      distinctUntilChanged(),
      map((value) => {
        const isCorrect = Boolean(value && LANGUAGE_VARIABLES.includes(value))
        const languageInStorage = storageGet('userLanguage') as Language

        if (!languageInStorage) {
          storageSet('userLanguage', isCorrect ? value : init)
        }

        if (!isCorrect) {
          return languageInStorage || init
        }

        if (languageInStorage !== value) {
          storageSet('userLanguage', value)
        }

        return value
      }),
      distinctUntilChanged(),
      tap((val) => router.push({
        query: {
          lang: val,
        },
      })),
    ),
    DEFAULT_LANGUAGE,
  )

  const router$ = useObservable(
    (inputs$) => inputs$.pipe(
      filter(([query]) => Boolean(query)),
      distinctUntilChanged(),
      map(([query]: [Language]) => {
        const isCorrect = Boolean(query && LANGUAGE_VARIABLES.includes(query))
        const languageInStorage = storageGet('userLanguage') as Language

        if (!isCorrect) {
          router.push({
            query: {
              lang: languageInStorage || DEFAULT_LANGUAGE,
            },
          })
          return languageInStorage || DEFAULT_LANGUAGE
        }

        if (!languageInStorage || languageInStorage !== query) {
          storageSet('userLanguage', query)
        }

        return query
      }),
      distinctUntilChanged(),
      tap(setLanguage),
    ),
    [router.query?.lang],
  )
  useSubscription(router$)


  const apolloClient = useApollo(language, pageProps)
  console.log('111111111', 111111111)
  return (
    <ContextService.Provider value={{ language, setLanguage }}>
      <ApolloProvider client={apolloClient}>
        {children}
      </ApolloProvider>
    </ContextService.Provider>
  )
})
