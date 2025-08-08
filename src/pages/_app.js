import React from "react";
import Head from "next/head";
import '../styles/globals.css'
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <title>Welcome To Lotus Healing</title>
          <link rel="icon" type="image/x-icon" href="/lotus.png"/>
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
          <meta name="keywords" content="Client cunsultant" />
        </Head>
        <Layout>
        <Component {...pageProps} />
      </Layout>
        {/* <Component {...pageProps} /> */}
      </React.Fragment>
  )
}

export default MyApp


