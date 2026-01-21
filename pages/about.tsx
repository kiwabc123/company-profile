import Head from 'next/head';
import styles from '../styles/About.module.css';
export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Company Name</title>
        <meta
          name="description"
          content="Learn more about Company Name, our history, customers, and vision."
        />
      </Head>

      <section>
            <div className={styles.overlay}>
            <h1>About Our Company</h1>
            <p>
            Building trusted solutions and long-term partnerships for modern
            businesses.
            </p>
        </div>

        <h2>Our History</h2>
        <p>
          Founded in 2018, Company Name started as a small team with a clear
          vision to solve real business challenges.
        </p>

        <h2>Our Customers</h2>
        <ul>
          <li>Manufacturing & Industrial</li>
          <li>Retail & E-commerce</li>
          <li>Technology & Services</li>
          <li>Logistics & Supply Chain</li>
        </ul>

        <h2>Vision & Mission</h2>
        <p>
          Our vision is to become a trusted partner and leading provider of
          innovative business solutions.
        </p>
      </section>
    </>
  );
}
