import { createStoreContext } from '@shared/utils'

const initialState = {
  first: '',
  last: '-',
  main: {
    sub: {
      value: '',
    },
    sub1: {
      value: '',
    },
  },
}

export const {
  Provider: NavBarProvider,
  useStore: useNavBarStore,
  useSelector: useNavBarSelector,
  useDispatch: useNavBarDispatch,
} = createStoreContext(initialState)
