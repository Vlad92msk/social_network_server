import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from 'react'
import { DeepPartial } from '@public/models/deepPartial'


export function createStoreContext<Store>(initialState: Store, name?: string) {
  function useStoreData(): {
    get: () => Store;
    set: (v: (s: Store) => DeepPartial<Store>) => Store
    subscribe: (callback: () => void) => () => void;
    } {
    const store = useRef(initialState)

    const get = useCallback(() => store.current, [])

    const subscribers = useRef(new Set<() => void>())

    const set = useCallback((value: Partial<Store>): Store => {
      const assigned = { ...store.current, ...value }
      store.current = assigned
      subscribers.current.forEach((callback) => callback())

      return assigned
    }, [])

    const set1 = useCallback((dispatch: (s: Store) => Partial<Store>) => (
      set(dispatch(get()))
    ), [get, set])

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback)
      return () => subscribers.current.delete(callback)
    }, [])


    return {
      get,
      set: set1,
      subscribe,
    }
  }

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<UseStoreDataReturnType | null>(null)

  const Provider = ({ children }: { children: React.ReactNode }) => (
    <StoreContext.Provider value={useStoreData()}>
      {children}
    </StoreContext.Provider>
  )

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput,
  ): [SelectorOutput, (v: (s: Store) => Partial<Store>) => Store] {
    const store = useContext(StoreContext)
    if (!store) {
      throw new Error('Store not found')
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
    )

    return [state, store.set]
  }

  function useStoreSelector<SelectorOutput>(
    selector: (store: Store) => SelectorOutput,
  ): SelectorOutput {
    const store = useContext(StoreContext)
    if (!store) {
      throw new Error('Store not found')
    }

    return useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
    )
  }

  function useStoreDispatch<SelectorOutput>() {
    const store = useContext(StoreContext)
    if (!store) {
      throw new Error('Store not found')
    }

    return store.set
  }

  if (Boolean(name)) {
    return ({
      [`${name}Provider`]: Provider,
      [`use${name}Store`]: useStore,
      [`use${name}Selector`]: useStoreSelector,
      [`use${name}Dispatch`]: useStoreDispatch,
    })
  }

  return ({
    Provider,
    useStore,
    useSelector: useStoreSelector,
    useDispatch: useStoreDispatch,
  })
}
