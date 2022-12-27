import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_O5Eb5Ccjv1PfXosSUcAMEJPIqmuU84cPaGT0Zk4p6Zv',
})

const databaseId = 'ba3aa948efea4a6f8f85a9ab97395618'

async function getItems() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{ property: 'price', direction: 'ascending' }],
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

type Data = {
  items?: any
  // 일단 any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await getItems()
    res.status(200).json({ items: response?.results, message: '성공' })
  } catch (error) {
    res.status(400).json({ message: '실패' })
  }
}
