import React, { useCallback } from 'react'
import { makeCn } from '@shared/utils'
import styles from './NavBar.module.scss'
import { NavBarProvider, useNavBarDispatch, useNavBarSelector, useNavBarStore } from './service/provider'

const cn = makeCn('NavBar', styles)

export const USER_ID = 1


export const NavBar = React.memo(() => (
  <NavBarProvider>
    <section className={cn()}>
      <Watch />
      <FormContainer />
      <DisplayContainer />
    </section>
  </NavBarProvider>
))

const Watch = () => {
  const store = useNavBarSelector((store1) => store1)
console.log('Watch', store)
  return (
      <div>{JSON.stringify(store, null, 5)}</div>
  )
}

const DisplayContainer = () => (
  <div className="container">
    <h5>DisplayContainer</h5>
    <Display value="first" />
    <Display value="last" />
  </div>
)

const Display = ({ value }: { value: 'first' | 'last' }) => {
  const fieldValue = useNavBarSelector((store) => store[value])
  return (
    <div className="value">
      {value}
      :
      {fieldValue}
    </div>
  )
}

const FormContainer = () => (
  <div className="container">
    <h5>FormContainer</h5>
    <TextInput value="first" />
    <TextInput value="last" />
  </div>
)
const TextInput = ({ value }: { value: 'first' | 'last' }) => {
  const dispatch = useNavBarDispatch()
  const fieldValue = useNavBarSelector((store) => store[value])
  const v1 = useNavBarSelector((store) => store.main.sub.value)

  const handleSub = useCallback((e) => dispatch((s) => {
    console.log('store sub', s)
    return ({
      main: {
        sub: {
          value: e.target.value
        }
      }
    })
  }), [dispatch])

  return (
    <div className="field">
      {value}
      :
      {' '}
      <input
        value={fieldValue}
        onChange={(e) => dispatch((s) => {
          console.log('store first-last', s)
          return ({
            [value]: e.target.value,
          })
        })}
      />
      <input
        value={v1}
        onChange={handleSub}
      />
      <div>{v1}</div>
    </div>
  )
}
