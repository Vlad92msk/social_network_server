import { ServiceState } from '.'

export const reactions = new Map([
  [
    ['ANY'], {
      description: 'После получения/отправки сообщения определяет прочитано оно/нет',
      fn: (result: ServiceState): ServiceState => ({
        ...result,
      }),
    },
  ],
])

export type Reactions = typeof reactions
