import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  return (
    <>
      <h1>Upload Your Avatar</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setBlob(null); // Clear previous image before upload
          if (!inputFileRef.current?.files) {
            throw new Error('No file selected');
          }
          const file = inputFileRef.current.files[0];
          const form = event.currentTarget as HTMLFormElement;
          const assetType = (form.elements.namedItem('assetType') as HTMLSelectElement)?.value;
          const newBlob = await upload(`${assetType}/${file.name}`, file, {
            access: 'public',
            handleUploadUrl: '/api/avatar/upload',
            clientPayload: JSON.stringify({ assetType }),
            
          });
          setBlob(newBlob); // Update image preview after response
        }}
      >
        <label htmlFor="assetType">Asset Type</label>
        <select id="assetType" name="assetType" required style={{ display: 'block', marginBottom: 12 }}>
          <option value="">Select type...</option>
          <option value="product">Product</option>
          <option value="banner">Banner</option>
          <option value="logo">Logo</option>
        </select>
        <input
          name="file"
          ref={inputFileRef}
          type="file"
          accept="image/jpeg, image/png, image/webp"
          required
        />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div style={{ marginTop: 24 }}>
          <img src={blob.url} alt="Uploaded" style={{ maxWidth: '100%' }} />
          <p>Blob url: <a href={blob.url} target="_blank" rel="noopener noreferrer">{blob.url}</a></p>
        </div>
      )}
    </>
  );
}
