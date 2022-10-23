import { useEffect, useMemo } from 'react'
import { GetArgTypes } from '@public/models/getArgTypes'
import Module from '../Module'
import { Provider, StateModule, useMessagesDispatch } from '.'


interface Props extends GetArgTypes<typeof Module> {
  state?: StateModule
}

const StartWith = (props?: Props) => {
  const { state, ...rest } = props
  const dispatch = useMessagesDispatch()

  useEffect(() => {
    if (Boolean(state)) {
      dispatch(() => state)
    }
  }, [dispatch, state])


  return useMemo(() => (
    <Module {...rest} />
  ), [rest])
}

const Component = (props?: Props) => (
  <Provider>
    <StartWith {...props} />
  </Provider>
)

export default Component
