import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/ju.png" />
        <link
          rel="icon"
          type="/ju.png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="/ju.png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/ju.png" />
        <link rel="mask-icon" href="/ju.png" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </div>
  );
};

export default page;
