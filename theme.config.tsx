import { useTheme } from "nextra-theme-docs";
import { useState, useEffect } from "react";
import { VercelLogo } from "./components/Icons";
import Image from "next/image";
import lightLogotype from "./public/images/logos/lightLogotype.png";
import darkLogotype from "./public/images/logos/darkLogotype.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import urlcat from "urlcat";

const useDark = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
    return () => {
      false;
    };
  }, [resolvedTheme]);
  return isDark;
};

const config = {
  primaryHue: 200, //550,
  project: {
    link: "https://dahliaos.io/github",
  },
  chat: {
    link: "https://dahliaos.io/discord",
  },
  docsRepositoryBase: "https://za.com/dahliaOS/documentation/blob/main/",
  toc: {
    extraContent: () => {
      return (
        <Link target="_blank" href="https://dahliaos.io/donate">
          💝 Support dahliaOS →
        </Link>
      );
    },
    float: true,
  },
  feedback: { content: "❓ Question? Give us feedback →", labels: "feedback" },
  navigation: { next: true, prev: true },
  darkMode: true,
  footer: {
    text: () => {
      return (
        <>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Link
              href="https://vercel.com?utm_source=frontendBeast&amp;utm_campaign=oss"
              target="_blank"
              style={{ display: "flex", flexDirection: "row", gap: "10px" }}
            >
              Powered By
              <VercelLogo style={{ marginTop: "3px" }} />
            </Link>
            <p style={{ marginTop: "6px", fontSize: "12px" }}>
              © {new Date().getFullYear()} The Front-End Beast
            </p>
          </div>
        </>
      );
    },
  },
  editLink: {
    text: "✍️ Edit this page on GitHub →",
  },
  logo: () => {
    const isDark = useDark();
    return (
      <>
        <Image
          src={isDark ? darkLogotype : lightLogotype}
          width="120"
          alt="The Front-End Beast"
          style={{ marginRight: "10px", marginBottom: "3px" }}
        />
        <span style={{ fontWeight: "600" }}>Documentation</span>
      </>
    );
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – The Front-End Beast",
      };
    }
    return { titleTemplate: "The Front-End Beast" };
  },
  head: () => {
    const { asPath } = useRouter();
    const { route } = useRouter();
    const { title, ...meta } = useConfig().frontMatter;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://frontendbeast.com" />
        <meta
          property="og:url"
          content={`https://frontendbeast.com${asPath}`}
        />
        <meta name="theme-color" content="#ff3d00" />
        <meta property="og:site_name" content="The Front-End Beast" />
        <meta name="og:title" content="The Front-End Beast" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon/favicon-32x32.png"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ff3d00" />
        <meta name="apple-mobile-web-app-title" content="dahliaOS" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/favicon.png"
        />
        <meta name="msapplication-TileColor" content="#ff3d00" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="keywords"
          content="dahlia, documentation, software, flutter, fuchsia, linux, dahliaOS, computer, operating system, os, system, kernel, dart, open source, material, design, zircon, go, rust"
        />
        <meta
          property="description"
          content={
            meta.description ||
            "dahliaOS is a modern, secure, lightweight and responsive operating system, combining the best of GNU/Linux and Fuchsia OS. We are developing a privacy-respecting, fast, secure and lightweight operating system, our goal is to establish a new standard for the desktop platform."
          }
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "dahliaOS is a modern, secure, lightweight and responsive operating system, combining the best of GNU/Linux and Fuchsia OS. We are developing a privacy-respecting, fast, secure and lightweight operating system, our goal is to establish a new standard for the desktop platform."
          }
        />
        <meta
          property="og:image"
          content={
            meta.image ||
            urlcat("https://docs.dahliaos.io/api/og/", {
              title,
              desc: meta.description ?? undefined,
            })
          }
        />
        <meta
          property="twitter:card"
          content={meta.image ? "summary_large_image" : "summary"}
        />
        <meta property="twitter:site" content="@dahliaos_io" />
        {route === "/" ? (
          <meta property="twitter:title" content="dahliaOS Docs" />
        ) : (
          <meta property="twitter:title" content={`${title} - dahliaOS Docs`} />
        )}
        <meta property="twitter:description" content={meta.description} />
        <meta
          property="twitter:url"
          content={`https://docs.dahliaos.io${asPath}`}
        />
        <meta
          property="twitter:image"
          content={
            meta.image ||
            urlcat("https://docs.dahliaos.io/api/og/", {
              title,
              desc: meta.description ?? undefined,
            })
          }
        />
      </>
    );
  },
};

export default config;
