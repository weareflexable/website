import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Flexable</title>
        <meta
          name="description"
          content="Why wait in the line when you could just... not."
        />
        <link rel="icon" href="/logos/logo.svg" /> 
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
