import type { AppProps } from 'next/app';
import Layout from '../components/layouts/main';
import '../app/globals.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
