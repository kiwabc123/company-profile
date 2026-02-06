import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import parse from 'html-react-parser';

// Example blog post data
import posts, { BlogPostType } from '../../data/posts';

const BlogIndex = () => {
  const [selected, setSelected] = useState(posts[0].slug);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const selectedPost = posts.find((p) => p.slug === selected);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
      if (window.innerWidth >= 800) setSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>บทความโรงแรม สปา</title>
        <meta
          name="description"
          content="Hybrid blog layout for hotel & spa: SEO, UX, maintain, scale, conversion."
        />
        <meta
          property="og:title"
          content="บทความโรงแรม สปา | Hybrid Blog SEO UX"
        />
        <meta
          property="og:description"
          content="Hybrid blog layout for hotel & spa: SEO, UX, maintain, scale, conversion."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.fairpricesupply.com/blog" />
      </Head>

      <main style={{ background: '#f3f7f3', minHeight: '100vh' }}>
        <div
          style={{
            display: 'flex',
            maxWidth: 1100,
            margin: '2rem auto',
            minHeight: 500,
            gap: 24,
          }}
        >
          {/* Sidebar */}
          <nav
            aria-label="Blog articles"
            style={{
              flex: '0 0 30%',
              borderRight: '1px solid #f5f5f5',
              paddingRight: 24,
              paddingLeft: 24,
              background: '#f8faf8',
              position: isMobile ? 'fixed' : 'sticky',
              bottom: isMobile ? 0 : undefined,
              left: isMobile ? 0 : undefined,
              width: isMobile ? '100vw' : undefined,
              height: isMobile ? 'calc(50vh - 64px)' : undefined,
              maxHeight: isMobile ? undefined : '70vh',
              overflowY: 'auto',
              zIndex: isMobile ? 90 : 2,
              boxShadow: isMobile ? '0 2px 16px #0002' : undefined,
              transition: isMobile ? 'transform 0.35s cubic-bezier(.4,1.6,.4,1), opacity 0.2s' : undefined,
              transform:
                isMobile
                  ? sidebarOpen
                    ? 'translateY(0)'
                    : 'translateY(100%)'
                  : 'none',
              opacity: isMobile && !sidebarOpen ? 0 : 1,
              pointerEvents:
                isMobile && !sidebarOpen ? 'none' : 'auto',
              visibility:
                isMobile && !sidebarOpen ? 'hidden' : 'visible',
              borderRadius: 18,
            }}
          >
            <div
              style={{
                display: isMobile ? 'flex' : 'block',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: isMobile ? '1rem' : 0,
                position: isMobile ? 'sticky' : 'static',
                top: 0,
                background: '#f8faf8',
                zIndex: 1,
              }}
            >
              <h2 style={{ fontSize: 22, marginBottom: isMobile ? 0 : 16 }}>
                Articles
              </h2>

              {isMobile && (
                <button
                  style={{
                    background: '#4b6b50',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 24,
                    padding: '10px 18px',
                    fontSize: 16,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'background 0.2s',
                  }}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span style={{ fontSize: 18 }}>ปิดเมนู</span>
                  <span style={{ fontSize: 20, display: 'inline-block', transform: 'rotate(180deg) translateY(1px)' }}>↑</span>
                </button>
              )}
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {posts.map((post) => (
                <li
                  key={post.slug}
                  style={{
                    marginBottom: 24,
                    background:
                      selected === post.slug ? '#f5f9f6' : '#fff',
                    border:
                      selected === post.slug
                        ? '2px solid #b7d7c9'
                        : '1px solid #eee',
                    borderRadius: 10,
                    padding: '16px 14px 10px 14px',
                  }}
                >
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      width: '100%',
                      fontWeight:
                        selected === post.slug ? 700 : 500,
                      color:
                        selected === post.slug
                          ? '#4b6b50'
                          : '#222',
                      fontSize: 18,
                      cursor: 'pointer',
                      padding: 0,
                    }}
                    onClick={() => {
                      setSelected(post.slug);
                      if (isMobile) setSidebarOpen(false);
                    }}
                  >
                    {post.title}
                  </button>

                  <p
                    style={{
                      margin: '4px 0 0 0',
                      color: '#7a8b7a',
                      fontSize: 13,
                      fontStyle: 'italic',
                    }}
                  >
                    {post.summary}
                  </p>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile open button */}
          {isMobile && !sidebarOpen && (
            <button
              style={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                zIndex: 99,
                background: '#4b6b50',
                color: '#fff',
                border: 'none',
                borderRadius: 24,
                padding: '10px 18px',
                fontSize: 16,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 2px 8px #0002',
                transition: 'background 0.2s',
              }}
              onClick={() => setSidebarOpen(true)}
            >
              <span style={{ fontSize: 18 }}>รายการบทความ</span>
              <span style={{ fontSize: 20, display: 'inline-block', transform: 'translateY(1px)' }}>↑</span>
            </button>
          )}

          {/* Article content */}
          <section style={{ flex: '1 1 70%' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: 24,
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                minHeight: 400,
              }}
            >
              {selectedPost ? (
                <article>
                  <h1 style={{ fontSize: 28, marginBottom: 20 }}>
                    {selectedPost.title}
                  </h1>

                  <div
                    style={{
                      color: '#444',
                      fontSize: '1.1rem',
                      paddingBottom: 24,
                    }}
                  >
                    {parse(selectedPost.content)}
                  </div>

                  {/* Related articles */}
                  {selectedPost.relatedSlugs &&
                    selectedPost.relatedSlugs.length > 0 && (
                      <nav
                        aria-label="บทความที่เกี่ยวข้อง"
                        style={{
                          position: 'sticky',
                          bottom: 0,
                          background: '#f8faf8',
                          borderRadius: 18,
                          padding: '1rem 1.5rem',
                          marginTop: 48,
                        }}
                      >
                        <strong
                          style={{
                            fontSize: 18,
                            color: '#357a38',
                            display: 'block',
                            marginBottom: 8,
                          }}
                        >
                          บทความที่เกี่ยวข้อง
                        </strong>

                        <ul
                          style={{
                            display: 'flex',
                            gap: 16,
                            listStyle: 'none',
                            margin: 0,
                            padding: 0,
                          }}
                        >
                          {selectedPost.relatedSlugs.map((slug) => {
                            console.log(slug , 'related slug' ,posts.map(p => p.slug));
                            
                            const related = posts.find(
                              (p) => p.slug === slug
                            );
                            return related ? (
                              <li key={slug}>
                                <button
                                  type="button"
                                  style={{
                                    background: '#eaf6ee',
                                    border: '1px solid #b7d7c9',
                                    color: '#357a38',
                                    fontSize: 16,
                                    cursor: 'pointer',
                                    padding: '10px 18px',
                                    borderRadius: 8,
                                  }}
                                  onClick={() => setSelected(slug)}
                                >
                                  {related.title}
                                </button>
                              </li>
                            ) : null;
                          })}
                        </ul>
                      </nav>
                    )}
                </article>
              ) : (
                <div style={{ color: '#888' }}>
                  Select an article to read.
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default BlogIndex;
