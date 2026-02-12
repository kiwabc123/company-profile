import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from '../styles/About.module.css';

const VALUES = [
  { icon: '⭐', label: 'Customer First', text: 'Success of our clients drives everything we do' },
  { icon: '🔒', label: 'Integrity', text: 'Transparency and honesty in all dealings' },
  { icon: '🚀', label: 'Innovation', text: 'Continuous improvement and modern solutions' },
  { icon: '🤝', label: 'Teamwork', text: 'Respect and collaboration across all levels' },
  { icon: '🏆', label: 'Excellence', text: 'High standards in quality and service' },
];

export default function About() {
  const storyRef = useRef(null);
  const twoColumnRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles['fade-in-animate']);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animated sections
    [storyRef, twoColumnRef, valuesRef, ctaRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>{`About Us | Company Name`}</title>
        <meta
          name="description"
          content="Learn more about Company Name, our history, customers, and vision."
        />
      </Head>

      {/* Hero Section - Enhanced */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Fair Price Supply</h1>
          <p>
            Thailand's trusted partner for hotel linens, amenities, and hospitality essentials.<br />
            <span className={styles.heroStats}>
              7+ Years Experience | 200+ Clients | Nationwide Delivery
            </span>
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className={styles['about-section']}>
        {/* 1. Our Story - Full Width, Large */}
        <div ref={storyRef} className={styles['story-full-width']} style={{ opacity: 0 }}>
          <div className={styles['story-container']}>
            <img 
              src="\images\Hotel-room-with-quality-linens.jpg" 
              alt="Hotel room with quality linens" 
              className={styles['story-image']}
            />
            <div className={styles['story-content']}>
              <h2>Our Story</h2>
              <p>
                Founded in 2018, Fair Price Supply began as a small, passionate team focused on solving real problems for hotels and resorts. Today, we're proud to partner with over 200 hospitality businesses across Thailand, providing quality linens, amenities, and essentials they can rely on.
              </p>
              <p>
                We didn't just start a business—we built a mission: to make premium hospitality supplies accessible, reliable, and affordable for every property, from boutique resorts to large hotel chains.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Two-Column Section - Who We Serve & Vision */}
        <div ref={twoColumnRef} className={styles['two-column-section']} style={{ opacity: 0 }}>
          {/* Who We Serve */}
          <div className={styles['card-modern']}>
            <div className={styles['card-header']}>
              <h3>🏨 Who We Serve</h3>
            </div>
            <ul className={styles['serve-list']}>
              <li>Hotels &amp; Resorts</li>
              <li>Serviced Apartments</li>
              <li>Spas &amp; Wellness Centers</li>
              <li>Hospitality Businesses</li>
            </ul>
          </div>

          {/* Vision & Mission */}
          <div className={styles['card-modern']}>
            <div className={styles['card-header']}>
              <h3>🎯 Vision &amp; Mission</h3>
            </div>
            <p>
              To be Thailand's leading provider of hospitality supplies, empowering our clients to deliver outstanding guest experiences.
            </p>
            <p className={styles['mission-text']}>
              We build long-term relationships based on trust, integrity, and measurable results.
            </p>
          </div>
        </div>

        {/* 3. Our Values - Icon Grid */}
        <div ref={valuesRef} className={styles['values-section']} style={{ opacity: 0 }}>
          <h2>Our Values</h2>
          <div className={styles['values-grid']}>
            {VALUES.map((value, idx) => (
              <div key={idx} className={styles['value-card']}>
                <div className={styles['value-icon']}>{value.icon}</div>
                <h4>{value.label}</h4>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section ref={ctaRef} className={styles['about-cta-section']} style={{ opacity: 0 }}>
        <div className={styles['about-cta-content']}>
          <h2>Upgrade Your Guest Experience Today</h2>
          <p className={styles['cta-subtitle']}>
            Discover premium linens, amenities, and supplies trusted by Thailand's best hotels
          </p>
          <div className={styles['about-cta-buttons']}>
            <Link href="/products" passHref legacyBehavior>
              <a className={styles['aboutCtaBtn']}>Browse Hotel Supplies</a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <a className={styles['aboutCtaBtn'] + ' ' + styles['cta-secondary']}>Get a Quote</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
