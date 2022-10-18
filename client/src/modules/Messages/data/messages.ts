import { AddedFile } from '@shared/hooks/useMaterialsAttach'
import { MassageSmileReaction } from '../components'

export type Message = {
  messageId: string
  fromUserId: number
  toUserId: number
  massage: string
  smile: MassageSmileReaction
  dateCreate: Date
  dateSeen: Date
  attachments?: AddedFile[]
}

export const MESSAGES: Message[] = [
  {
    messageId: 'dwed-dwed-wed-d-ddwed',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 3,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 7,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 1,
    toUserId: 2,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 2,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 2,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 2,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 2,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 2,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 2,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 2,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
  {
    messageId: 'djtyj-ytj-jjjjyu-jhger-jtdv',
    dateCreate: new Date(),
    dateSeen: null,
    fromUserId: 2,
    toUserId: 1,
    massage: 'text',
    smile: null,
    attachments: [],
  },
]
