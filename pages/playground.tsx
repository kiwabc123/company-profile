
import React, { useRef, useState } from 'react';
import { upload } from '@vercel/blob/client';

export default function Playground() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const blob = await upload(
        file.name,
        file,
        {
          access: 'public',
          handleUploadUrl: '/api/blob-upload',
        }
      );
      setImageUrl(blob.url);
    } catch (err: any) {
      alert('Upload failed: ' + (err?.message || err));
    }
    setUploading(false);
  };

  return (
    <div style={{ padding: 32, maxWidth: 400, margin: '0 auto' }}>
      <h1>Image Upload Playground</h1>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        disabled={uploading}
      />
      {uploading && <p>Uploading...</p>}
      {imageUrl && (
        <div style={{ marginTop: 24 }}>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
          <p>URL: <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a></p>
        </div>
      )}
    </div>
  );
}
