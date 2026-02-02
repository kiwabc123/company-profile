'use client'

import styles from '../styles/Contact.module.css'
import { motion, Variants, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const shouldReduceMotion = useReducedMotion()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  return (
    <motion.main
      ref={ref}
      className={styles.contactSection}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate={inView ? 'show' : 'hidden'}
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
        {[
          {
            title: 'Company',
            content: (
              <>
                <strong>บริษัท แฟร์ไพรซ์ซัพพลาย จำกัด</strong>
                <p>FAIR PRICE SUPPLY CO., LTD.</p>
                <p>Business: Hotel Amenity</p>
              </>
            ),
          },
          {
            title: 'Contact Person',
            content: (
              <>
                <strong>สมศักดิ์ หลุทวเสรีประกาย</strong> (TOM)
                <p>SOMSAK LEUTHAVESRIPRAKAY</p>
              </>
            ),
          },
          {
            title: 'Address',
            content: (
              <p>551 ถ.ริมทางรถไฟ แขวงบางยี่เรือ เขตธนบุรี กรุงเทพฯ 10600</p>
            ),
          },
          {
            title: 'Contact',
            content: (
              <>
                <p>Tel/Fax: +66 2-890-5633</p>
                <p>Mobile: +66 81-622-2323</p>
                <p>Line ID: tom_tafe</p>
              </>
            ),
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={styles.contactInfoCol}
            variants={itemVariants}
          >
            <h2>{item.title}</h2>
            {item.content}
          </motion.div>
        ))}

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
