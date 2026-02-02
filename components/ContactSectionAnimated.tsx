'use client'

import styles from '../styles/Contact.module.css'
import { useEffect, useState } from 'react'
export const contactInfo = { company: { nameTH: 'บริษัท แฟร์ไพรซ์ซัพพลาย จำกัด', nameEN: 'FAIR PRICE SUPPLY CO., LTD.', business: 'Hotel Amenity', }, person: { nameTH: 'สมศักดิ์ หลุทวเสรีประกาย', nameEN: 'SOMSAK LEUTHAVESRIPRAKAY', nickname: 'TOM', }, address: { th: '551 ถ.ริมทางรถไฟ แขวงบางยี่เรือ เขตธนบุรี กรุงเทพฯ 10600', en: '551 RIMTANGRODFAI Rd., BANGYERAE, THONBURI, BANGKOK 10600 THAILAND', }, contact: { telFax: '+66 2-890-5633', mobile: '+66 81-622-2323', lineId: 'tom_tafe', email: 'contact@fairprice.com', }, };


export default function ContactSectionAnimated() {
  return (
    <main className={styles.contactSection}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.infoGrid}>
        <div className={styles.contactInfoCol + ' ' + styles.fadeInStagger} style={{ '--stagger': 0 } as React.CSSProperties}>
          <h2>Company</h2>
          <p><strong>บริษัท แฟร์ไพรซ์ซัพพลาย จำกัด</strong></p>
          <p>FAIR PRICE SUPPLY CO., LTD.</p>
          <p>Business: Hotel Amenity</p>
        </div>
        <div className={styles.contactInfoCol + ' ' + styles.fadeInStagger} style={{ '--stagger': 1 } as React.CSSProperties}>
          <h2>Contact Person</h2>
          <p><strong>สมศักดิ์ หลุทวเสรีประกาย</strong> (TOM)</p>
          <p>SOMSAK LEUTHAVESRIPRAKAY</p>
        </div>
        <div className={styles.contactInfoCol + ' ' + styles.fadeInStagger} style={{ '--stagger': 2 } as React.CSSProperties}>
          <h2>Address</h2>
          <p>551 ถ.ริมทางรถไฟ แขวงบางยี่เรือ เขตธนบุรี กรุงเทพฯ 10600</p>
        </div>
        <div className={styles.contactInfoCol + ' ' + styles.fadeInStagger} style={{ '--stagger': 3 } as React.CSSProperties}>
          <h2>Contact</h2>
          <p>Tel/Fax: +66 2-890-5633</p>
          <p>Mobile: +66 81-622-2323</p>
          <p>Line ID: tom_tafe</p>
        </div>
        <div className={styles.fadeInStagger} style={{ display: 'flex', justifyContent: 'center', marginTop: 24, '--stagger': 4 } as React.CSSProperties}>
          <img
            src="https://aosmcukxqimimqgh.public.blob.vercel-storage.com/logo/unnamed-removebg-preview-LRbRupkYx6PR36OuvV7LskRVf936bF.png"
            alt="Company Logo"
            width={120}
            height={120}
          />
        </div>
      </div>
    </main>
  )
}
