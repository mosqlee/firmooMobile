import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
/*
 * 通用head
 * @export
 * @class
 * @extends {Document}
 */
export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <script src="/static/hd.min.js" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" type="text/css" href="//unpkg.com/antd-mobile/dist/antd-mobile.min.css" />
        </Head>
        <body style={{ margin: '0 auto', maxWidth: '10rem' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
