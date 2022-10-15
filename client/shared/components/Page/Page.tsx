import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import { AuthGuard, AuthGuardType } from '@shared/containers/AuthGuard'
import { PortfolioPages } from 'src/router/pages'
import { Language, LANGUAGE_VARIABLES, useServiceLanguageAction, useServiceLanguageSelector } from 'src/services/language'


export interface PageType extends AuthGuardType {
  title?: string
  subTitle?: string
}


export const Page: NextPage<PropsWithChildren<PageType>> = React.memo((props) => {
  const { title, subTitle, children, roles, page } = props
  const language = useServiceLanguageSelector()

  // console.log('11111', 11111)
  return (
    <AuthGuard page={page} roles={roles}>
      <Head>
        <link type="image/png" rel="shortcut icon" href="/resources/images/htmlTag.png" />
        {(title || subTitle) && (
          <title>
            {`${title} | ${subTitle} [${language}]`}
          </title>
        )}
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {children}
    </AuthGuard>
  )
})

Page.defaultProps = {
  title: 'Vlad',
  subTitle: 'Social',
}
