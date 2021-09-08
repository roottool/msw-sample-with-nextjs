import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const query = req.query as { status?: string }
  const status = Number(query.status)
  switch (status) {
    case 400:
      return res.status(400).json({ message: 'bad request' })
    case 500:
      return res.status(500).json({ message: 'internal server error' })
    default:
      return res.status(200).json({ message: 'success' })
  }
}

export default handler
