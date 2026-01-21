import React, { ReactNode } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Company Name</title>
      <meta name="description" content="Company profile and product details" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles['nav-left']}>
          <motion.a
            href="/"
          >
            Company
          </motion.a>
        </div>
        <div className={styles['nav-right']}>
          <motion.a
            href="/products"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.12, color: "#778873" }}
            whileTap={{ scale: 0.96 }}
          >
            Products
          </motion.a>
          <motion.a
            href="/about"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.12, color: "#778873" }}
            whileTap={{ scale: 0.96 }}
          >
            About
          </motion.a>
          <motion.a
            href="/contact"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.12, color: "#778873" }}
            whileTap={{ scale: 0.96 }}
          >
            Contact
          </motion.a>
        </div>
      </nav>
    </header>
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <strong>Company Name</strong><br />
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
        <div className={styles.footerCol}>
          <strong>Operation Hours</strong><br />
          Mon-Fri: 9:00 AM - 6:00 PM<br />
          Sat-Sun: Closed
        </div>
        <div className={styles.footerCol}>
          <strong>Contact</strong><br />
          Email: info@company.com<br />
          Tel: (123) 456-7890
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
