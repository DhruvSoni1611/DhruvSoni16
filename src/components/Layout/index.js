import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title || 'Dhruv Soni • Software Designer & Engineer'}</title>
        <meta name="description" content={description || 'Engineering intelligent systems with clean code and clarity. Solving real problems through AI-powered logic.'} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}