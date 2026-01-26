import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';

export default async function handler(req:any, res:any) {
  const body = req.body as HandleUploadBody;
  try {
    
    const jsonResponse = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async (
        pathname,
        /* clientPayload */
      ) => {
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp'],
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({}),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log('blob upload completed', blob, tokenPayload);
        try {
          // Run any logic after the file upload completed
        } catch (error) {
          throw new Error('Could not update user');
        }
      },
    });
    res.status(200).json(jsonResponse);
  } catch (error) {
    res.status(400).json({ error: (error instanceof Error ? error.message : String(error)) });
  }
}
