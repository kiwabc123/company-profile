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
          <nav
            aria-label="Blog articles"
            style={{
              flex: '0 0 30%',
              borderRight: '1px solid #f5f5f5',
              paddingRight: 24,
              maxHeight: 600,
              overflowY: 'auto',
            }}
          >
            <h2 style={{ fontSize: 22, marginBottom: 16 }}>Articles</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {posts.map((post) => (
                <li
                  key={post.slug}
                  style={{
                    marginBottom: 24,
                    background: selected === post.slug ? '#f5f9f6' : '#fff',
                    border: selected === post.slug
                      ? '2px solid #b7d7c9'
                      : '1px solid #eee',
                    borderRadius: 10,
                    boxShadow:
                      selected === post.slug
                        ? '0 2px 8px rgba(119, 136, 115, 0.08)'
                        : '0 1px 4px rgba(0,0,0,0.03)',
                    transition: 'box-shadow 0.2s, border 0.2s, background 0.2s',
                    padding: '16px 14px 10px 14px',
                  }}
                >
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      width: '100%',
                      fontWeight: selected === post.slug ? 700 : 500,
                      color: selected === post.slug ? '#4b6b50' : '#222',
                      fontSize: 18,
                      cursor: 'pointer',
                      borderRadius: 4,
                      outline: 'none',
                      padding: 0,
                      marginBottom: 4,
                    }}
                    onClick={() => setSelected(post.slug)}
                    aria-current={selected === post.slug ? 'page' : undefined}
                  >
                    {post.title}
                  </button>
                  <p
                    style={{
                      margin: '4px 0 0 0',
                      color: '#7a8b7a',
                      fontSize: 13,
                      fontStyle: 'italic',
                      lineHeight: 1.4,
                    }}
                  >
                    {post.summary}
                  </p>
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
