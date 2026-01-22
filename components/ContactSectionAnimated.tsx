"use client";
import styles from '../styles/Contact.module.css';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSectionAnimated() {
  return (
    <motion.section
      className={styles.contactSection}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h1 className={styles.title}>Contact Us</h1>

      <motion.div className={styles.infoGrid}>
        <motion.div variants={item} className={styles.contactInfoCol}>
          <h2>Company</h2>
          <p><strong>บริษัท แฟร์ไพรซ์ซัพพลาย จำกัด</strong></p>
          <p>FAIR PRICE SUPPLY CO., LTD.</p>
          <p>Business: Hotel Amenity</p>
        </motion.div>

        <motion.div variants={item} className={styles.contactInfoCol}>
          <h2>Contact Person</h2>
          <p><strong>สมศักดิ์ หลุทวเสรีประกาย</strong> (TOM)</p>
          <p>SOMSAK LEUTHAVESRIPRAKAY</p>
        </motion.div>

        <motion.div variants={item} className={styles.contactInfoCol}>
          <h2>Address</h2>
          <p>551 ถ.ริมทางรถไฟ แขวงบางยี่เรือ เขตธนบุรี กรุงเทพฯ 10600</p>
          <p>551 RIMTANGRODFAI Rd., BANGYERAE, THONBURI, BANGKOK</p>
        </motion.div>

        <motion.div variants={item} className={styles.contactInfoCol}>
          <h2>Contact</h2>
          <p>Tel/Fax: +66 2-890-5633</p>
          <p>Mobile: +66 81-622-2323</p>
          <p>Line ID: tom_tafe</p>
          <p>Email: <a href="mailto:contact@fairprice.com">contact@fairprice.com</a></p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
