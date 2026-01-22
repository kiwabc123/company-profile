
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence 
               exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
        >
    <Layout>
      <Component {...pageProps} />
    </Layout></AnimatePresence>
  );
}

export default MyApp;
