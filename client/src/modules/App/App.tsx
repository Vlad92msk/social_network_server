import React from 'react'
import { NavBar } from '@modules/NavBar'
import { Section } from '@shared/components/Section'
import { makeCn } from '@shared/utils'
import styles from './App.module.scss'

const cn = makeCn('Application', styles)


export const App = () => (
  <Section
    className={cn()}
  >
    <NavBar />
  </Section>
)
