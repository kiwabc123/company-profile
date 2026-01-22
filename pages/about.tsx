import Head from 'next/head';
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
            Building trusted solutions and long-term partnerships for modern businesses.
          </p>
        </div>
      </section>

      <section className={styles['about-section']}>
        <div className={styles['about-block'] + ' ' + styles.left}>
          <div className={styles['about-block-title']}>Our Story</div>
          <div className={styles['about-block-content']}>
            <p>
              Founded in 2018, Company Name began as a small, passionate team with a vision to solve real business challenges. Over the years, we've grown into a trusted partner for organizations across industries, delivering innovative solutions and exceptional service.
            </p>
          </div>
        </div>
        <div className={styles['about-block'] + ' ' + styles.right}>
          <div className={styles['about-block-title']}>Who We Serve</div>
          <div className={styles['about-block-content']}>
            <ul>
              <li>Manufacturing &amp; Industrial</li>
              <li>Retail &amp; E-commerce</li>
              <li>Technology &amp; Services</li>
              <li>Logistics &amp; Supply Chain</li>
              <li>Hospitality &amp; Real Estate</li>
            </ul>
          </div>
        </div>
        <div className={styles['about-block'] + ' ' + styles.left}>
          <div className={styles['about-block-title']}>Vision &amp; Mission</div>
          <div className={styles['about-block-content']}>
            <p>
              Our vision is to become a leading provider of innovative business solutions, empowering our clients to thrive in a rapidly changing world. We are committed to building long-term relationships based on trust, integrity, and results.
            </p>
          </div>
        </div>
        <div className={styles['about-block'] + ' ' + styles.right}>
          <div className={styles['about-block-title']}>Our Values</div>
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
      </section>
    </>
  );
}
