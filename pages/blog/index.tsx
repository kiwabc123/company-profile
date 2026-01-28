import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';

// Example blog post data
const posts = [
  {
    slug: 'hybrid-best-seo-ux',
    title: '🎯 ทำไม Hybrid แบบนี้ “ดีที่สุด”',
    summary: 'SEO, UX, Maintain, Scale, Conversion—all in one hybrid blog layout.',
    content: (
      <>
        <h2>เรื่อง & ผลลัพธ์</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: 24 }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #eee', padding: 8, background: '#fafafa' }}>เรื่อง</th>
              <th style={{ border: '1px solid #eee', padding: 8, background: '#fafafa' }}>ผลลัพธ์</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #eee', padding: 8 }}>SEO</td>
              <td style={{ border: '1px solid #eee', padding: 8 }}>Google index ทุกบทความ</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: 8 }}>UX</td>
              <td style={{ border: '1px solid #eee', padding: 8 }}>Layout ซ้าย-ขวาเหมือน app</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: 8 }}>Maintain</td>
              <td style={{ border: '1px solid #eee', padding: 8 }}>data ที่เดียว</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: 8 }}>Scale</td>
              <td style={{ border: '1px solid #eee', padding: 8 }}>ต่อ CMS ได้ง่าย</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #eee', padding: 8 }}>Conversion</td>
              <td style={{ border: '1px solid #eee', padding: 8 }}>ใส่ link ขายของแบบเนียน เช่น <Link href="/products">ดูสินค้า</Link></td>
            </tr>
          </tbody>
        </table>
        <p>Hybrid blog layout แบบนี้ช่วยให้ Google index ทุกบทความ (SEO), UX ดีเหมือนแอป, ดูแลข้อมูลง่าย, scale ต่อ CMS ได้ และใส่ลิงก์ขายของแบบไม่ hard sell.</p>
      </>
    ),
  },
  {
    slug: 'spa-towel-care-tips',
    title: 'How to Care for Spa Towels in Your Hotel',
    summary: 'Extend the life of your spa towels and keep guests happy with these simple care tips.',
    content: (
      <>
        <p>Proper towel care is essential for guest satisfaction and cost savings. Here are some tips to keep your spa towels soft and long-lasting:</p>
        <ul>
          <li>Wash towels separately from other linens.</li>
          <li>Use gentle, eco-friendly detergents.</li>
          <li>Avoid fabric softeners to maintain absorbency.</li>
        </ul>
        <p>Looking for premium spa towels? <Link href="/products">See our selection</Link>—but only if you need to refresh your stock!</p>
      </>
    ),
  },
  {
    slug: 'eco-friendly-amenities',
    title: 'Eco-Friendly Amenities: A Win for Hotels and Guests',
    summary: 'Explore the benefits of sustainable amenities and how they can enhance your guest experience.',
    content: (
      <>
        <p>Sustainable amenities are increasingly popular with guests. Consider switching to eco-friendly options for a greener reputation and happier customers.</p>
        <p>We offer a range of <Link href="/products">eco-friendly amenities</Link>—explore if you’re interested, no pressure!</p>
      </>
    ),
  },
];

const BlogIndex = () => {
  const [selected, setSelected] = useState(posts[0].slug);
  const selectedPost = posts.find((p) => p.slug === selected);

  return (
    <>
      <Head>
        <title>บทความโรงแรม สปา | Hybrid Blog SEO UX</title>
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
          <nav aria-label="Blog articles" style={{ flex: '0 0 30%', borderRight: '1px solid #f5f5f5', paddingRight: 24 }}>
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
                <div style={{ color: '#444', fontSize: '1.1rem' }}>{selectedPost.content}</div>
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
