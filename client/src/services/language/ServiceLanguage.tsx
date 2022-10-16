import { ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'
import { useObservable, useSubscription } from 'observable-hooks'
import React, { FC, PropsWithChildren, useMemo, useState } from 'react'
import {
  combineLatest, distinctUntilChanged, filter, map, pairwise,
} from 'rxjs'
import { useApollo } from '@my-apollo/client'
import { storageGet, storageSet } from '@shared/utils'
import { ContextService, DEFAULT_LANGUAGE, Language, LANGUAGE_VARIABLES } from './context'

export interface ServiceLanguageProps extends PropsWithChildren{
  pageProps: Record<string, any>
}

export const ServiceLanguage: FC<ServiceLanguageProps> = React.memo((props) => {
  const { pageProps, children } = props
  const router = useRouter()
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)
  const [language1, setLanguage1] = useState(DEFAULT_LANGUAGE)

  const language$ = useObservable(
    (event$) => event$.pipe(
      filter(([value]) => Boolean(value)),
      map(([value]) => {
        const isCorrect = Boolean(value && LANGUAGE_VARIABLES.includes(value))
        if (!isCorrect) return DEFAULT_LANGUAGE

        return value
      }),
      distinctUntilChanged(),
    ),
    [language],
  )

  const router$ = useObservable(
    (inputs$) => inputs$.pipe(
      filter(([query]) => Boolean(query)),
      map(([query]: [Language]) => {
        const isCorrect = Boolean(query && LANGUAGE_VARIABLES.includes(query))
        if (!isCorrect) return DEFAULT_LANGUAGE
        setLanguage(query)

        return query
      }),
      distinctUntilChanged(),
    ),
    [router.query?.lang],
  )

  const result$ = useObservable(() => combineLatest(router$, language$).pipe(
    pairwise(),
    map(([prev, current]) => {
      const currentRouter = current[0]
      const currentLang = current[1]

      const isChangedRouter = prev[0] !== currentRouter
      const isChangedLang = prev[1] !== currentLang

      if (isChangedLang) {
        router.push({
          query: {
            lang: currentLang,
          },
        })
      }

      const languageInStorage = storageGet('userLanguage') as Language
      if (!languageInStorage || languageInStorage !== currentLang) {
        storageSet(
          'userLanguage',
          (isChangedLang && currentLang)
          || (isChangedRouter && currentRouter)
          || DEFAULT_LANGUAGE,
        )
      }

      if (isChangedLang) return currentLang
      if (isChangedRouter) return currentRouter
      return DEFAULT_LANGUAGE
    }),
    distinctUntilChanged(),
  ))
  useSubscription(result$, setLanguage1)

  const apolloClient = useApollo(language1, pageProps)

  return useMemo(() => {
    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <ContextService.Provider value={{
        language: language1,
        setLanguage,
      }}
      >
        <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider>
      </ContextService.Provider>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language1, children])
})
