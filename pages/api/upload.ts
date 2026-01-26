import { put } from '@vercel/blob';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const file = req.body.file; // base64 or blob
  const filename = `company/gallery/${Date.now()}.jpg`;

  const blob = await put(filename, file, {
    access: 'public',
  });

  res.status(200).json({ url: blob.url });
}
