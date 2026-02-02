"use client";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const ContactSectionAnimated = dynamic(
  () => import('../components/ContactSectionAnimated'),
  { ssr: false }
);

export default function Contact() {
  return (
    <>
      <motion.div
      >
        <Head>
          <title>Contact Us | FAIR PRICE SUPPLY CO., LTD.</title>
          <meta name="description" content="Contact information for Fair Price Supply Co., Ltd." />
        </Head>
        <ContactSectionAnimated />
      </motion.div>
    </>
  );
}
