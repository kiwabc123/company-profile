
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)} mode="wait">
    <Layout>
      <Component {...pageProps} />
    </Layout></AnimatePresence>
  );
}

export default MyApp;
