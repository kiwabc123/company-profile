import React from 'react';
import posts from '../data/posts';

interface BlogSidebarProps {
  selectedSlug: string;
  onSelect: (slug: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ selectedSlug, onSelect }) => (
  <aside style={{ flex: '0 0 30%', borderRight: '1px solid #f5f5f5', paddingRight: 24 }}>
    <h2 style={{ fontSize: 22, marginBottom: 16 }}>Articles</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {posts.map(post => (
        <li key={post.slug} style={{ marginBottom: 24 }}>
          <button
            style={{
              background: selectedSlug === post.slug ? '#f5f5f5' : 'none',
              border: 'none',
              textAlign: 'left',
              width: '100%',
              padding: '8px 0',
              fontWeight: selectedSlug === post.slug ? 700 : 400,
              color: selectedSlug === post.slug ? '#A86E6A' : '#222',
              fontSize: 18,
              cursor: 'pointer',
              borderRadius: 4,
              transition: 'background 0.2s',
            }}
            onClick={() => onSelect(post.slug)}
            aria-current={selectedSlug === post.slug ? 'page' : undefined}
          >
            {post.title}
          </button>
          <p style={{ margin: '4px 0 0 0', color: '#bbb', fontSize: 12, fontStyle: 'italic', lineHeight: 1.3 }}>{post.summary}</p>
        </li>
      ))}
    </ul>
  </aside>
);

export default BlogSidebar;
