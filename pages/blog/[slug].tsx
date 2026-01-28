import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

// Example blog post data
const posts = [
  {
    slug: 'spa-towel-care-tips',
    title: 'How to Care for Spa Towels in Your Hotel',
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
    content: (
      <>
        <p>Sustainable amenities are increasingly popular with guests. Consider switching to eco-friendly options for a greener reputation and happier customers.</p>
        <p>We offer a range of <Link href="/products">eco-friendly amenities</Link>—explore if you’re interested, no pressure!</p>
      </>
    ),
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem' }}><h1>Post not found</h1><Link href="/blog">Back to Blog</Link></div>;
  }

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem' }}>
      <h1>{post.title}</h1>
      <div style={{ color: '#444', fontSize: '1.1rem' }}>{post.content}</div>
      <div style={{ marginTop: 32 }}>
        <Link href="/blog">← Back to Blog</Link>
      </div>
    </div>
  );
};

export default BlogPost;
