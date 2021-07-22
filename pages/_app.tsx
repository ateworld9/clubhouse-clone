import Head from 'next/head';
import '../src/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Clubhouse: Drop-in audio chat</title>
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
