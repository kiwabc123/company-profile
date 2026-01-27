import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blobs, setBlobs] = useState<PutBlobResult[]>([]);
  return (
    <>
      <h1>Upload Your Avatar</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setBlobs([]); // Clear previous images before upload
          if (!inputFileRef.current?.files || inputFileRef.current.files.length === 0) {
            throw new Error('No file selected');
          }
          const files = Array.from(inputFileRef.current.files);
          const form = event.currentTarget as HTMLFormElement;
          const assetType = (form.elements.namedItem('assetType') as HTMLSelectElement)?.value;
          const productCode = (form.elements.namedItem('productCode') as HTMLInputElement)?.value;
          const uploadedBlobs: PutBlobResult[] = [];
          for (const file of files) {
            const newBlob = await upload(`${assetType}/${file.name}`, file, {
              access: 'public',
              handleUploadUrl: '/api/avatar/upload',
              clientPayload: JSON.stringify({ assetType, productCode }),
            });
            uploadedBlobs.push(newBlob);
          }
          setBlobs(uploadedBlobs); // Update image previews after response
        }}
      >
        <label htmlFor="assetType">Asset Type</label>
        <select id="assetType" name="assetType" required style={{ display: 'block', marginBottom: 12 }}>
          <option value="">Select type...</option>
          <option value="product">Product</option>
          <option value="banner">Banner</option>
          <option value="logo">Logo</option>
        </select>
        <label htmlFor="productCode">Product Code</label>
        <input
          type="text"
          id="productCode"
          name="productCode"
          required
          style={{ display: 'block', marginBottom: 12 }}
        />
        <input
          name="file"
          ref={inputFileRef}
          type="file"
          accept="image/jpeg, image/png, image/webp"
          multiple
          required
        />
        <button type="submit">Upload</button>
      </form>
      {blobs.length > 0 && (
        <div style={{ marginTop: 24 }}>
          {blobs.map((blob, idx) => (
            <div key={blob.url} style={{ marginBottom: 16 }}>
              <img src={blob.url} alt={`Uploaded ${idx + 1}`} style={{ maxWidth: '100%' }} />
              <p>Blob url: <a href={blob.url} target="_blank" rel="noopener noreferrer">{blob.url}</a></p>
            </div>
          ))}
          <div>
            Blob URLs: [ {blobs.map((blob) => `'${blob.url}'`).join(', ')} ]
          </div>
        </div>
      )}
    </>
  );
}
