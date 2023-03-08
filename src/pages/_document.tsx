//write with head
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            type="text/javascript"
            src="https://otpless.com/auth.js"
          ></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
