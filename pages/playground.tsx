import React, { useRef, useState } from 'react';

export default function Playground() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result;
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file: base64 }),
      });
      const data = await res.json();
      setImageUrl(data.url);
      setUploading(false);
    };
    reader.readAsDataURL(file);
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
