'use client'

import styles from '../styles/Contact.module.css'
import { useEffect, useState } from 'react'
export const contactInfo = { company: { nameTH: 'บริษัท แฟร์ไพรซ์ซัพพลาย จำกัด', nameEN: 'FAIR PRICE SUPPLY CO., LTD.', business: 'Hotel Amenity', }, person: { nameTH: 'สมศักดิ์ หลุทวเสรีประกาย', nameEN: 'SOMSAK LEUTHAVESRIPRAKAY', nickname: 'TOM', }, address: { th: '551 ถ.ริมทางรถไฟ แขวงบางยี่เรือ เขตธนบุรี กรุงเทพฯ 10600', en: '551 RIMTANGRODFAI Rd., BANGYERAE, THONBURI, BANGKOK 10600 THAILAND', }, contact: { telFax: '+66 2-890-5633', mobile: '+66 81-622-2323', lineId: 'tom_tafe', email: 'contact@fairprice.com', }, };


export default function ContactSectionAnimated() {
  return (
    <main className={styles.contactSection}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.infoGridWrapper}>
        <div className={styles.watermarkLogo}>
          <img
            src="https://aosmcukxqimimqgh.public.blob.vercel-storage.com/logo/unnamed-removebg-preview-LRbRupkYx6PR36OuvV7LskRVf936bF.png"
            alt="Company Logo Watermark"
            width={260}
            height={260}
            aria-hidden="true"
            draggable="false"
          />
        </div>
        <div className={styles.flexRow}>
          <div className={styles.infoCol}>
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
            </div>
            {/* CTA Button Group */}
            <div className={styles.fadeInStagger + ' ' + styles.cta} style={{ '--stagger': 5 } as React.CSSProperties}>
              <a href="tel:+66816222323" className={styles.ctaBtn} aria-label="Call">
                📞 Call
              </a>
              <a href="https://line.me/ti/p/~tom_tafe" className={styles.ctaBtn} aria-label="Line">
                💬 Line
              </a>
              <a href="mailto:contact@fairprice.com" className={styles.ctaBtn} aria-label="Email">
                ✉️ Email
              </a>
            </div>
          </div>
          <div className={styles.mapCol}>
            <div style={{ marginBottom: '0.7em', fontWeight: 700, fontSize: '1.18rem', color: 'var(--color-primary)' }}>Our Location</div>
            <div className={styles.mapWrapper}>
              <iframe
                title="Google Map - Fair Price Supply Co., Ltd."
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.934953432048!2d100.48425239999999!3d13.7223879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29858809da6a3%3A0xbfdeffe55bd9d101!2s551%20Rim%20Thang%20Rotfai%2C%20Khwaeng%20Bang%20Yi%20Ruea%2C%20Khet%20Thon%20Buri%2C%20Krung%20Thep%20Maha%20Nakhon%2010600!5e0!3m2!1sen!2sth!4v1770091478414!5m2!1sen!2sth"
                width="100%"
                height="340"
                style={{ border: 0, borderRadius: '1.2rem', width: '100%', minHeight: 240 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
