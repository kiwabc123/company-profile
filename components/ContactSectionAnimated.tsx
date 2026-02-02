'use client'

import styles from '../styles/Contact.module.css'
import {
  motion,
  Variants,
  useInView,
  useReducedMotion,
} from 'framer-motion'
import { useRef } from 'react'
export const contactInfo = { company: { nameTH: 'บริษัท แฟร์ไพรซ์ซัพพลาย จำกัด', nameEN: 'FAIR PRICE SUPPLY CO., LTD.', business: 'Hotel Amenity', }, person: { nameTH: 'สมศักดิ์ หลุทวเสรีประกาย', nameEN: 'SOMSAK LEUTHAVESRIPRAKAY', nickname: 'TOM', }, address: { th: '551 ถ.ริมทางรถไฟ แขวงบางยี่เรือ เขตธนบุรี กรุงเทพฯ 10600', en: '551 RIMTANGRODFAI Rd., BANGYERAE, THONBURI, BANGKOK 10600 THAILAND', }, contact: { telFax: '+66 2-890-5633', mobile: '+66 81-622-2323', lineId: 'tom_tafe', email: 'contact@fairprice.com', }, };

export default function ContactSectionAnimated() {
  const ref = useRef(null)
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

  // 👀 ตรวจว่า scroll มาถึงจริงไหม
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px', // เผื่อ trigger ก่อนเห็นนิดเดียว (ปลอดภัย)
  })

  // ♿ ตรวจ prefers-reduced-motion
  const reduceMotion = useReducedMotion()

  return (
    <motion.main
      ref={ref}
      className={styles.contactSection}
      variants={containerVariants}
      initial="hidden"
      animate={
        reduceMotion
          ? 'show'          // ไม่ animate → แสดงทันที
          : isInView
          ? 'show'          // scroll ถึง → animate
          : 'hidden'
      }
    >
      <motion.h1
        className={styles.title}
        variants={itemVariants}
      >
        Contact Us
      </motion.h1>

      <motion.div
        className={styles.infoGrid}
        variants={containerVariants}
      >
        <motion.div className={styles.contactInfoCol} variants={itemVariants}>
          <h2>Company</h2>
          <p><strong>บริษัท แฟร์ไพรซ์ซัพพลาย จำกัด</strong></p>
          <p>FAIR PRICE SUPPLY CO., LTD.</p>
          <p>Business: Hotel Amenity</p>
        </motion.div>

        <motion.div className={styles.contactInfoCol} variants={itemVariants}>
          <h2>Contact Person</h2>
          <p><strong>สมศักดิ์ หลุทวเสรีประกาย</strong> (TOM)</p>
          <p>SOMSAK LEUTHAVESRIPRAKAY</p>
        </motion.div>

        <motion.div className={styles.contactInfoCol} variants={itemVariants}>
          <h2>Address</h2>
          <p>551 ถ.ริมทางรถไฟ แขวงบางยี่เรือ เขตธนบุรี กรุงเทพฯ 10600</p>
        </motion.div>

        <motion.div className={styles.contactInfoCol} variants={itemVariants}>
          <h2>Contact</h2>
          <p>Tel/Fax: +66 2-890-5633</p>
          <p>Mobile: +66 81-622-2323</p>
          <p>Line ID: tom_tafe</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}
        >
          <img
            src="https://aosmcukxqimimqgh.public.blob.vercel-storage.com/logo/unnamed-removebg-preview-LRbRupkYx6PR36OuvV7LskRVf936bF.png"
            alt="Company Logo"
            width={120}
            height={120}
          />
        </motion.div>
      </motion.div>
    </motion.main>
  )
}
