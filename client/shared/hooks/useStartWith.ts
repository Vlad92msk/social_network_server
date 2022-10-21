import { findKey, setWith } from 'lodash'
import { useMemo } from 'react'
import { GetKeys } from '@public/models/getObjectKeys'
import { findPathsToKey } from '@shared/utils'


/**
 * Устанавливает первоначальное значение
 * Берет defaultState
 * Если мы передали первоначальное значение - установит его
 * Если нет - будет использовано значение из defaultState
 * startValues - массив объектов с первоначальным значением
 */
export const useStartWith = <T extends Record<string, any>>(
  // @ts-ignore
  startValues?: Partial<Record<GetKeys<T>, any>>[],
  defaultState?: T,
): T => useMemo(() => {
  console.log('startValues', startValues)
  console.log('defaultState', defaultState)
    if (Boolean(startValues?.length && defaultState)) {
      return startValues.reduce((acc: T, item) => setWith(
        defaultState,
        findPathsToKey({ obj: defaultState, key: findKey(item) }),
        item[findKey(item)],
      ), defaultState)
    }
    return defaultState
  }, [defaultState, startValues])
