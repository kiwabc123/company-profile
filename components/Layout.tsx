import { useRouter } from 'next/router';
import React, { ReactNode, useState, useEffect } from 'react';

import { contactInfo } from './ContactSectionAnimated';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  // Close mobile nav when scrolling
  useEffect(() => {
    if (!mobileNavOpen) return;
    const handleScroll = () => setMobileNavOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileNavOpen]);
  return (
    <>
      <Head>
        <title>{contactInfo.company.nameEN}</title>
        <meta name="description" content={`${contactInfo.company.business} company profile and product details`} />
        <meta property="og:title" content={contactInfo.company.nameEN} />
        <meta property="og:description" content={contactInfo.company.business} />
        <link rel="icon" href="https://aosmcukxqimimqgh.public.blob.vercel-storage.com/logo/unnamed-removebg-preview-LRbRupkYx6PR36OuvV7LskRVf936bF.png" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav + ' ' + styles.hideOnMobile} aria-label="Main navigation">
          <div className={styles['nav-left']}>
            <div className={styles.logoBlock} aria-label="Logo">
              {imgError ? (
                <div style={{ width: 32, height: 32, background: '#D8E983', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#AEB877', fontWeight: 700, fontSize: 18 }}>
                  LOGO
                </div>
              ) : (
                <img
                  src="https://aosmcukxqimimqgh.public.blob.vercel-storage.com/logo/unnamed-removebg-preview-LRbRupkYx6PR36OuvV7LskRVf936bF.png"
                  alt="FAIR PRICE SUPPLY CO., LTD. Logo"
                  width={40}
                  height={40}
                  style={{ width: 40, height: 40, objectFit: 'contain' }}
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
            <Link href="/" passHref legacyBehavior>
              <motion.a
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.08, color: "#AEB877" }}
                whileTap={{ scale: 0.96 }}
                aria-label="Home"
              >
                {contactInfo.company.nameEN}
              </motion.a>
            </Link>
          </div>
          <div className={styles['nav-right']}>
            <Link href="/products" passHref legacyBehavior>
              <motion.a initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6, type: "spring", stiffness: 120 }} whileHover={{ scale: 1.12, color: "#AEB877" }} whileTap={{ scale: 0.96 }} aria-label="Products">Products</motion.a>
            </Link>
            <Link href="/blog" passHref legacyBehavior>
              <motion.a initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 120 }} whileHover={{ scale: 1.12, color: "#AEB877" }} whileTap={{ scale: 0.96 }} aria-label="Blog">Blog</motion.a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <motion.a initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 120 }} whileHover={{ scale: 1.12, color: "#AEB877" }} whileTap={{ scale: 0.96 }} aria-label="About">About</motion.a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <motion.a initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6, type: "spring", stiffness: 120 }} whileHover={{ scale: 1.12, color: "#AEB877" }} whileTap={{ scale: 0.96 }} aria-label="Contact">Contact</motion.a>
            </Link>
          </div>
          {/* Hamburger button for mobile */}
          <button
            className={styles.mobileNavToggle + ' ' + styles.hideOnDesktop}
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav-overlay"
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            <span className={styles.hamburger + (mobileNavOpen ? ' ' + styles.active : '')}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </nav>
        {/* Mobile nav overlay */}
        {mobileNavOpen && (
          <div className={styles.mobileNavOverlay} id="mobile-nav-overlay" role="dialog" aria-modal="true">
            <nav className={styles.mobileNavMenu}>
                  <Link href="/" legacyBehavior>
                  <a
                    className={router.pathname === '/' ? styles.activeTab : styles.tab}
                    onClick={() => setMobileNavOpen(false)}
                  >Home</a>
                </Link>
                <Link href="/products" legacyBehavior>
                  <a
                    className={router.pathname === '/products' ? styles.activeTab : styles.tab}
                    onClick={() => setMobileNavOpen(false)}
                  >Products</a>
                </Link>
                <Link href="/blog" legacyBehavior>
                  <a
                    className={router.pathname === '/blog' ? styles.activeTab : styles.tab}
                    onClick={() => setMobileNavOpen(false)}
                  >Blog</a>
                </Link>
                <Link href="/about" legacyBehavior>
                  <a
                    className={router.pathname === '/about' ? styles.activeTab : styles.tab}
                    onClick={() => setMobileNavOpen(false)}
                  >About</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a
                    className={router.pathname === '/contact' ? styles.activeTab : styles.tab}
                    onClick={() => setMobileNavOpen(false)}
                  >Contact</a>
                </Link>
            </nav>
          </div>
        )}
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
};

export default Layout;