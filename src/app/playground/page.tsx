'use client';
import { useState } from 'react';
import type { PutBlobResult } from '@vercel/blob';

export default function PlaygroundPage() {
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [uploading, setUploading] = useState(false);

  async function uploadImage(formData: FormData) {
    'use server';
    setUploading(true);
    const imageFile = formData.get('image') as File;
    const res = await fetch(`/api/avatar/upload?filename=${imageFile.name}`, {
      method: 'POST',
      body: imageFile,
    });
    const newBlob = (await res.json()) as PutBlobResult;
    setBlob(newBlob);
    setUploading(false);
  }

  return (
    <div style={{ padding: 32, maxWidth: 400, margin: '0 auto' }}>
      <h1>Image Upload Playground (Server)</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          await uploadImage(formData);
        }}
      >
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/jpeg, image/png, image/webp"
          required
        />
        <button type="submit" disabled={uploading}>Upload</button>
      </form>
      {uploading && <p>Uploading...</p>}
      {blob && (
        <div style={{ marginTop: 24 }}>
          <img src={blob.url} alt="Uploaded" style={{ maxWidth: '100%' }} />
          <p>Blob url: <a href={blob.url} target="_blank" rel="noopener noreferrer">{blob.url}</a></p>
        </div>
      )}
    </div>
  );
}
