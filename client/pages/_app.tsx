import { ApolloProvider } from '@apollo/client'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { storageGet, storageSet } from '@shared/utils'
import { useApollo } from 'apollo/client'
import '@public/styles/base.scss'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-cube/effect-cube.min.css'

/**
 * Предотвращает ошибку
 * Expected server HTML to contain a matching <div> in <div>.
 */
// function SafeHydrate({ children }) {
//   return (
//     <div suppressHydrationWarning>
//       {typeof window === 'undefined' ? null : children}
//     </div>
//   )
// }

export const languageVariants = ['ru', 'en']
export const DEFAULT_LANGUAGE = 'ru'

export const isValidLanguage = (lang: any) => languageVariants.includes(String(lang))

export const ProjectLanguage = React.createContext({
  language: '',
  setLanguage: null,
})


const MyApp = ({ Component, pageProps }: { Component: NextPage; pageProps: Record<string, any> }) => {
  const [language, setLanguage] = useState<string>(() => storageGet('userLanguage') || DEFAULT_LANGUAGE)

  /**
   * Меняем язык в меню - меняем и в сторе
   */
  useEffect(() => {
    storageSet('userLanguage', language)
  }, [language])

  const apolloClient = useApollo(language, pageProps)

  return (
    <ProjectLanguage.Provider value={{ language, setLanguage }}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ProjectLanguage.Provider>
  )
}

export default MyApp
