// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type DataResp = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<DataResp>): void => {
  const { method, body } = req
  if (method === 'POST') {
    res.status(200).json(body)
  }
  res.status(200).json({ name: 'John Doe' })
}
