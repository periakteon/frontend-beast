import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XFQ3VDWDJ1" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-XFQ3VDWDJ1');`}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
