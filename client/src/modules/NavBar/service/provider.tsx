import { get } from 'lodash'
import createFastContext from '@services/createStoreContext/createStoreContext'

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

// const useNavBarSelector = (path: string) => {
//   const [select, chenge] = useNavBarStore((store) => get(store, path))
//   return select
// })

export const {
  Provider: NavBarProvider,
  useStore: useNavBarStore,
  useSelector: useNavBarSelector,
  useDispatch: useNavBarDispatch,
} = createFastContext(initialState)
