import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
