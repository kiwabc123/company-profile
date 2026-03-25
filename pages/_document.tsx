import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="FAIR PRICE SUPPLY CO., LTD. - Premium Hotel Amenities, Towels & Bedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Apple iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Company" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PWA Install Color */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
