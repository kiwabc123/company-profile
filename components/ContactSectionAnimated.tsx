'use client'

import styles from '../styles/Contact.module.css'
import { motion, Variants, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
export const contactInfo = { company: { nameTH: 'บริษัท แฟร์ไพรซ์ซัพพลาย จำกัด', nameEN: 'FAIR PRICE SUPPLY CO., LTD.', business: 'Hotel Amenity', }, person: { nameTH: 'สมศักดิ์ หลุทวเสรีประกาย', nameEN: 'SOMSAK LEUTHAVESRIPRAKAY', nickname: 'TOM', }, address: { th: '551 ถ.ริมทางรถไฟ แขวงบางยี่เรือ เขตธนบุรี กรุงเทพฯ 10600', en: '551 RIMTANGRODFAI Rd., BANGYERAE, THONBURI, BANGKOK 10600 THAILAND', }, contact: { telFax: '+66 2-890-5633', mobile: '+66 81-622-2323', lineId: 'tom_tafe', email: 'contact@fairprice.com', }, };

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ContactSectionAnimated() {
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true) // ✅ fire once after hydration
  }, [])

  return (
    <motion.main
      className={styles.contactSection}
      initial={false}              // 🔥 สำคัญมาก
      animate={mounted && !reduceMotion ? 'show' : 'show'}
      variants={{
        show: {
          transition: { staggerChildren: 0.25 },
        },
      }}
    >
      <motion.h1
        className={styles.title}
        variants={itemVariants}
      >
        Contact Us
      </motion.h1>

      <div className={styles.infoGrid}>
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
      </div>
    </motion.main>
  )
}
