import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Engineering intelligent systems with clean code and clarity. Solving real problems through AI-powered logic." />
        <meta property="og:title" content="Dhruv Soni • Software Designer & Engineer" />
        <meta property="og:description" content="Engineering intelligent systems with clean code and clarity. Solving real problems through AI-powered logic." />
        <meta property="og:image" content="https://raw.githubusercontent.com/DhruvSoni1611/DhruvSoni-/main/media/site/89d468b455-1646837228/meta-image-dennis-snellenberg-860x540-crop-q72.jpg" />
        <meta property="og:site_name" content="Dhruv Soni" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google" content="notranslate" />
        <link rel="preload" as="font" href="/assets/fonts/NeueMontreal-Regular.otf" type="font/otf" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}