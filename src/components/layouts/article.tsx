import Head from 'next/head';
import { ReactNode } from 'react';

const Layout = ({
  children,
  title
}: {
  children: ReactNode;
  title: string;
}) => {
  const t = `${title} - Takuya Matsuyama`;
  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}
      {children}
    </>
  );
};

export default Layout;
