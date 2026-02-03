import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';
export default function About() {
  return (
    <>
      <Head>
        <title>{`About Us | Company Name`}</title>
        <meta
          name="description"
          content="Learn more about Company Name, our history, customers, and vision."
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1>About Our Company</h1>
          <p>
            A trusted supplier of hotel amenities, linens, and hospitality essentials.<br />
            Building trusted hospitality supply solutions and long-term partnerships for hotels and resorts.
          </p>
        </div>
      </section>

      <section className={styles['about-section']}>
        <div className={styles['about-block-pair']}>
          <div className={styles['about-block'] + ' ' + styles.left}>
            <div className={styles['about-block-title']}>
              Our Story
            </div>
            <div className={styles['about-block-content']}>
              <p>
                Founded in 2018, Fair Price Supply began as a small, passionate team focused on hospitality. Today, we supply hotels, resorts, and spas across Thailand with quality amenities, linens, and essentials—delivering reliability and service you can trust.
              </p>
            </div>
          </div>
          <div className={styles['about-block'] + ' ' + styles.right}>
            <div className={styles['about-block-title']} style={{ justifyContent: 'flex-end', paddingRight: '2.2em' }}>
              Who We Serve
            </div>
            <div className={styles['about-block-content']}>
              <ul className={styles['about-list-with-icon']}>
                <li><span className={styles['about-bullet-icon']}>🏨</span>Hotels &amp; Resorts</li>
                <li><span className={styles['about-bullet-icon']}>🏢</span>Serviced Apartments</li>
                <li><span className={styles['about-bullet-icon']}>💆‍♂️</span>Spas &amp; Wellness Centers</li>
                <li><span className={styles['about-bullet-icon']}>🍽️</span>Hospitality Businesses</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles['about-block-pair']} style={{ gap: '1.6rem' }}>
          <div className={styles['about-block'] + ' ' + styles.left}>
            <div className={styles['about-block-title']}>
              Vision &amp; Mission
            </div>
            <div className={styles['about-block-content']}>
              <p>
                To be the leading provider of hospitality supplies in Thailand, empowering our clients to deliver outstanding guest experiences. We build long-term relationships based on trust, integrity, and results.
              </p>
            </div>
          </div>
          <div className={styles['about-block'] + ' ' + styles.right}>
            <div className={styles['about-block-title']}>
              Our Values
            </div>
            <div className={styles['about-block-content']}>
              <ul>
                <li>Customer Success First</li>
                <li>Integrity &amp; Transparency</li>
                <li>Continuous Innovation</li>
                <li>Teamwork &amp; Respect</li>
                <li>Quality &amp; Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Soft CTA Section */}
      <section className={styles['about-cta-section']}>
        <div className={styles['about-cta-content']}>
          <h2>Ready to work with us?</h2>
          <div className={styles['about-cta-buttons']}>
            <Link href="/products" passHref legacyBehavior><a className={styles['aboutCtaBtn']}>View Products</a></Link>
            <Link href="/contact" passHref legacyBehavior><a className={styles['aboutCtaBtn']}>Contact Us</a></Link>
          </div>
        </div>
      </section>
    </>
  );
}
