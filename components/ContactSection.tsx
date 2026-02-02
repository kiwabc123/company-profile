'use client'
import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';
import { contactInfo } from '../data/contact';

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const { company, person, address, contact } = contactInfo;

  return (
    <motion.section
      className={styles.contactSection}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 variants={item} className={styles.title}>Contact Us</motion.h2>
      <motion.div
        key="contact-card"
        className={styles.card}
        variants={item}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 120 }}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
      >
        <motion.h3 variants={item}>{company.nameEN}</motion.h3>
        <motion.p variants={item}>{company.nameTH}</motion.p>
        <motion.span variants={item} className={styles.badge}>
          {company.business}
        </motion.span>
        <motion.hr variants={item} />
        <motion.div
          key="contact-person"
          variants={item}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
        >
          <strong>Contact Person</strong>
          <p>
            {person.nameEN} ({person.nickname})<br />
            {person.nameTH}
          </p>
        </motion.div>
        <motion.div
          key="contact-address"
          variants={item}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
        >
          <strong>Address</strong>
          <p>{address.en}</p>
          <p>{address.th}</p>
        </motion.div>
        <motion.ul>
          <motion.li variants={item}>📞 Tel/Fax: {contact.telFax}</motion.li>
          <motion.li variants={item}>📱 Mobile: {contact.mobile}</motion.li>
          <motion.li variants={item}>💬 LINE: {contact.lineId}</motion.li>
          <motion.li variants={item}>✉️ {contact.email}</motion.li>
          {/* No website property in contactInfo.contact */}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}
