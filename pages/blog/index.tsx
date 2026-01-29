import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';
import parse from 'html-react-parser';

// Example blog post data
import posts ,{ BlogPostType } from '../../data/posts';

const BlogIndex = () => {
  const [selected, setSelected] = useState(posts[0].slug);
  const selectedPost = posts.find((p) => p.slug === selected);

  return (
    <>
      <Head>
        <title>บทความโรงแรม สปา</title>
        <meta name="description" content="Hybrid blog layout for hotel & spa: SEO, UX, maintain, scale, conversion. Google index, app-like layout, easy data, CMS-ready, soft product links." />
        <meta property="og:title" content="บทความโรงแรม สปา | Hybrid Blog SEO UX" />
        <meta property="og:description" content="Hybrid blog layout for hotel & spa: SEO, UX, maintain, scale, conversion. Google index, app-like layout, easy data, CMS-ready, soft product links." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.fairpricesupply.com/blog" />
      </Head>
      <main>
        <div style={{
          display: 'flex',
          maxWidth: 1100,
          margin: '2rem auto',
          padding: '1rem',
          minHeight: 500,
          gap: 32,
        }}>
          {/* Left: Blog List */}
          <nav aria-label="Blog articles" style={{ flex: '0 0 30%', borderRight: '1px solid #f5f5f5', paddingRight: 24, maxHeight: 600, overflowY: 'auto' }}>
            <h2 style={{ fontSize: 22, marginBottom: 16 }}>Articles</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {posts.map(post => (
                <li key={post.slug} style={{ marginBottom: 24 }}>
                  <button
                    style={{
                      background: selected === post.slug ? '#f5f5f5' : 'none',
                      border: 'none',
                      textAlign: 'left',
                      width: '100%',
                      padding: '8px 0',
                      fontWeight: selected === post.slug ? 700 : 400,
                      color: selected === post.slug ? '#778873' : '#222',
                      fontSize: 18,
                      cursor: 'pointer',
                      borderRadius: 4,
                      transition: 'background 0.2s',
                    }}
                    onClick={() => setSelected(post.slug)}
                    aria-current={selected === post.slug ? 'page' : undefined}
                  >
                    {post.title}
                  </button>
                  <p style={{ margin: '4px 0 0 0', color: '#bbb', fontSize: 12, fontStyle: 'italic', lineHeight: 1.3 }}>{post.summary}</p>
                </li>
              ))}
            </ul>
          </nav>
          {/* Right: Article Content */}
          <section style={{ flex: '1 1 70%', paddingLeft: 24 }}>
            {selectedPost ? (
              <article>
                <h1 style={{ fontSize: 28, marginBottom: 16 }}>{selectedPost.title}</h1>
                <div style={{ color: '#444', fontSize: '1.1rem' }}>{parse(selectedPost.content)}</div>
              </article>
            ) : (
              <div style={{ color: '#888' }}>Select an article to read.</div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default BlogIndex;
