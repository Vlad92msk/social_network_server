import { NextApiRequest, NextApiResponse } from 'next'
import { DEFAULT_LANGUAGE } from '@pages/_app'


export default function redirect(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.redirect(`/${DEFAULT_LANGUAGE}/`)
}
