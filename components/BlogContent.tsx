import React from 'react';
import parse from 'html-react-parser';
import { posts } from '../data/posts';

interface BlogContentProps {
  slug: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ slug }) => {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <div style={{ color: '#888' }}>Select an article to read.</div>;
  return (
    <section style={{ flex: '1 1 70%', paddingLeft: 24 }}>
      <article>
        <h1 style={{ fontSize: 28, marginBottom: 16 }}>{post.title}</h1>
        <div style={{ color: '#444', fontSize: '1.1rem' }}>{parse(post.content)}</div>
      </article>
    </section>
  );
};

export default BlogContent;
