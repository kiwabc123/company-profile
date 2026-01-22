"use client";
import styles from '../styles/Contact.module.css';
import { motion } from 'framer-motion';

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

export default function ContactSectionAnimated() {
  return (
    <motion.section
      className={styles.contactSection}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.infoGrid}>
        <motion.div
          className={styles.contactInfoCol}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2>Company</h2>
          <p><strong>{contactInfo.company.nameTH}</strong></p>
          <p>{contactInfo.company.nameEN}</p>
          <p>Business: {contactInfo.company.business}</p>
        </motion.div>
        <motion.div
          className={styles.contactInfoCol}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2>Contact Person</h2>
          <p><strong>{contactInfo.person.nameTH}</strong> ({contactInfo.person.nickname})</p>
          <p>{contactInfo.person.nameEN}</p>
        </motion.div>
        <motion.div
          className={styles.contactInfoCol}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h2>Address</h2>
          <p>{contactInfo.address.th}</p>
          <p>{contactInfo.address.en}</p>
        </motion.div>
        <motion.div
          className={styles.contactInfoCol}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h2>Contact</h2>
          <p>Tel/Fax: {contactInfo.contact.telFax}</p>
          <p>Mobile: {contactInfo.contact.mobile}</p>
          <p>Line ID: {contactInfo.contact.lineId}</p>
          <p>Email: <a href={`mailto:${contactInfo.contact.email}`}>{contactInfo.contact.email}</a></p>
        </motion.div>
      </div>
    </motion.section>
  );
}
