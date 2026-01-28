"use client";
import styles from '../styles/Contact.module.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const contactInfo = {
  company: {
    nameTH: 'บริษัท แฟร์ไพรซ์ซัพพลาย จำกัด',
    nameEN: 'FAIR PRICE SUPPLY CO., LTD.',
    business: 'Hotel Amenity',
  },
  person: {
    nameTH: 'สมศักดิ์ หลุทวเสรีประกาย',
    nameEN: 'SOMSAK LEUTHAVESRIPRAKAY',
    nickname: 'TOM',
  },
  address: {
    th: '551 ถ.ริมทางรถไฟ แขวงบางยี่เรือ เขตธนบุรี กรุงเทพฯ 10600',
    en: '551 RIMTANGRODFAI Rd., BANGYERAE, THONBURI, BANGKOK 10600 THAILAND',
  },
  contact: {
    telFax: '+66 2-890-5633',
    mobile: '+66 81-622-2323',
    lineId: 'tom_tafe',
    email: 'contact@fairprice.com',
  },
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function ContactSectionAnimated() {
  useEffect(() => {
    // Place browser-only logic here (e.g., window/document access, analytics, etc.)
    // Example: console.log('ContactSectionAnimated mounted in browser');
  }, []);

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'tween', ease: 'linear' }}
      className={styles.contactSection}
    >
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.infoGrid}>
        <div className={styles.contactInfoCol}>
          <h2>Company</h2>
          <p><strong>{contactInfo.company.nameTH}</strong></p>
          <p>{contactInfo.company.nameEN}</p>
          <p>Business: {contactInfo.company.business}</p>
        </div>
        <div className={styles.contactInfoCol}>
          <h2>Contact Person</h2>
          <p><strong>{contactInfo.person.nameTH}</strong> ({contactInfo.person.nickname})</p>
          <p>{contactInfo.person.nameEN}</p>
        </div>
        <div className={styles.contactInfoCol}>
          <h2>Address</h2>
          <p>{contactInfo.address.th}</p>
          <p>{contactInfo.address.en}</p>
        </div>
        <div className={styles.contactInfoCol}>
          <h2>Contact</h2>
          <p>Tel/Fax: {contactInfo.contact.telFax}</p>
          <p>Mobile: {contactInfo.contact.mobile}</p>
          <p>Line ID: {contactInfo.contact.lineId}</p>
          <p>Email: <a href={`mailto:${contactInfo.contact.email}`}>{contactInfo.contact.email}</a></p>
        </div>
        <div></div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <img
            src="https://aosmcukxqimimqgh.public.blob.vercel-storage.com/logo/unnamed-removebg-preview-LRbRupkYx6PR36OuvV7LskRVf936bF.png"
            alt="Company Logo"
            style={{ width: 120, height: 120, objectFit: 'contain', aspectRatio: '1 / 1', display: 'block' }}
            loading="lazy"
          />
        </div>
      </div>
    </motion.main>
  );
}
