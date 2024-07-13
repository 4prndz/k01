import type { AppProps } from 'next/app';
import Layout from '../components/layouts/main';
import '../app/globals.css';
import { ThemeProvider } from 'next-themes';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
