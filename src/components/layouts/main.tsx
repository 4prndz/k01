import Head from 'next/head';
import { Navbar } from '../navbar';
import { ReactNode } from 'react';
import Footer from '../../components/footer';

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="pb-8 max-w-screen-lg mx-auto">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>4prndz - Website</title>
      </Head>
      <Navbar />
      <div className="pt-32 mx-auto max-w-screen-md">{children}</div>
      <Footer />
    </main>
  );
};

export default Main;
