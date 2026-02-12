import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from '../styles/About.module.css';
import aboutData from '../data/aboutPageData.json';

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
   console.log(aboutData ,"aboutData");
   
  return (
    <>
      <Head>
        <title>{aboutData.page.title}</title>
        <meta
          name="description"
          content={aboutData.page.description}
        />
      </Head>

      {/* Hero Section - Enhanced */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1>{aboutData.hero.title}</h1>
          <p>
            {aboutData.hero.subtitle}<br />
            <span className={styles.heroStats}>
              {aboutData.hero.stats}
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
              src={aboutData.story.image} 
              alt={aboutData.story.imageAlt} 
              className={styles['story-image']}
            />
            <div className={styles['story-content']}>
              <h2>{aboutData.story.heading}</h2>
              {aboutData.story.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Two-Column Section - Who We Serve & Vision */}
        <div ref={twoColumnRef} className={styles['two-column-section']} style={{ opacity: 0 }}>
          {/* Who We Serve */}
          <div className={styles['card-modern']}>
            <div className={styles['card-header']}>
              <h3>{aboutData.whoWeServe.icon} {aboutData.whoWeServe.heading}</h3>
            </div>
            <ul className={styles['serve-list']}>
              {aboutData.whoWeServe.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Vision & Mission */}
          <div className={styles['card-modern']}>
            <div className={styles['card-header']}>
              <h3>{aboutData.visionAndMission.icon} {aboutData.visionAndMission.heading}</h3>
            </div>
            <p>
              {aboutData.visionAndMission.vision}
            </p>
            <p className={styles['mission-text']}>
              {aboutData.visionAndMission.mission}
            </p>
          </div>
        </div>

        {/* 3. Our Values - Icon Grid */}
        <div ref={valuesRef} className={styles['values-section']} style={{ opacity: 0 }}>
          <h2>Our Values</h2>
          <div className={styles['values-grid']}>
            {aboutData.values.map((value, idx) => (
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
          <h2>{aboutData.cta.heading}</h2>
          <p className={styles['cta-subtitle']}>
            {aboutData.cta.subtitle}
          </p>
          <div className={styles['about-cta-buttons']}>
            {aboutData.cta.buttons.map((btn, idx) => (
              <Link key={idx} href={btn.href} passHref legacyBehavior>
                <a className={styles['aboutCtaBtn'] + (btn.variant === 'secondary' ? ' ' + styles['cta-secondary'] : '')}>
                  {btn.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
