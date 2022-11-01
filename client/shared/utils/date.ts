import { format } from 'date-fns'
import { ru as RU_LOCALE } from 'date-fns/locale'



export enum DateFormats {
  /**
   * 01.01.11 в 12:00
   */
  FORMAT_1='dd.MM.yyyy в HH:mm',
  /**
   * Ноябрь 01, 2022
   */
  FORMAT_2='LLLL dd, yyyy',
  FORMAT_3='dd.MM.yyyy',
}


export const createDateFormat = (
  date: Date,
  desiredFormat: DateFormats,
  locale: Locale = RU_LOCALE,
) => format(date, desiredFormat, locale && ({ locale }))
