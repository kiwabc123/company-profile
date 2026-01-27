import React, { ReactNode } from 'react';
import { contactInfo } from './ContactSectionAnimated';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>{contactInfo.company.nameEN}</title>
      <meta name="description" content={`${contactInfo.company.business} company profile and product details`} />
      <meta property="og:title" content={contactInfo.company.nameEN} />
      <meta property="og:description" content={contactInfo.company.business} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles['nav-left']}>
          <div className={styles.logoBlock} aria-label="Logo">
            {/* Logo image with fallback dummy block on error, SEO optimized */}
            {(() => {
              const [imgError, setImgError] = React.useState(false);
              return imgError ? (
                <div style={{ width: 32, height: 32, background: '#D2DCB6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#778873', fontWeight: 700, fontSize: 18 }}>
                  LOGO
                </div>
              ) : (
                <img
                  src="/logo-placeholder.png"
                  alt="FAIR PRICE SUPPLY CO., LTD. Logo"
                  width={32}
                  height={32}
                  style={{ width: 32, height: 32, objectFit: 'contain' }}
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              );
            })()}
          </div>
          <motion.a
            href="/"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.08, color: "#778873" }}
            whileTap={{ scale: 0.96 }}
            aria-label="Home"
          >
            {contactInfo.company.nameEN}
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
            aria-label="Products"
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
            aria-label="About"
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
            aria-label="Contact"
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
          <strong>{contactInfo.company.nameEN}</strong><br />
          <span>{contactInfo.company.nameTH}</span><br />
          &copy; {new Date().getFullYear()} {contactInfo.company.nameEN}. All rights reserved.
        </div>
        <div className={styles.footerCol}>
          <strong>Address</strong><br />
          {contactInfo.address.en}<br />
          {contactInfo.address.th}
        </div>
        <div className={styles.footerCol}>
          <strong>Contact</strong><br />
          Email: <a href={`mailto:${contactInfo.contact.email}`}>{contactInfo.contact.email}</a><br />
          Tel/Fax: {contactInfo.contact.telFax}<br />
          Mobile: {contactInfo.contact.mobile}<br />
          Line ID: {contactInfo.contact.lineId}
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
