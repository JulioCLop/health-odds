import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="fonts/Allan-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="fonts/Allan-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          />
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
}