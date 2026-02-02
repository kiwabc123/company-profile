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
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
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
