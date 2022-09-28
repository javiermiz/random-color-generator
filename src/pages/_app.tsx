import type { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import '@/styles/globals.css';
/**
 * Custom 'App' component.
 *
 * More info: https://nextjs.org/docs/advanced-features/custom-app
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
