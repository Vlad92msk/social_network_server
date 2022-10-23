import { useEffect } from 'react'
import { GetArgTypes } from '@public/models/getArgTypes'
import Module from '../Module'
import { Provider, StateModule, useUserMenuDispatch } from '.'


interface Props extends GetArgTypes<typeof Module> {
  state?: StateModule
}

const StartWith = (props?: Props) => {
  const { state, ...rest } = props
  const dispatch = useUserMenuDispatch()

  useEffect(() => {
    if (Boolean(state)) {
      dispatch(() => state)
    }
  }, [dispatch, state])

  return (<Module {...rest} />)
}

const Component = (props?: Props) => (
  <Provider>
    <StartWith {...props} />
  </Provider>
)

export default Component
