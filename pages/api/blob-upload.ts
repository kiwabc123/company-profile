import { handleUpload } from '@vercel/blob/server';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const response = await handleUpload({
    request: req,
    onBeforeGenerateToken: () => ({
      allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp'],
      maximumSizeInBytes: 50 * 1024 * 1024, // 50MB
    }),
  });
  res.status(response.status).send(response.body);
}
