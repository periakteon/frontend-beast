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
    link: "https://github.com/periakteon",
  },
  chat: {
    link: "https://twitter.com/periakteon",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    ),
  },
  // docsRepositoryBase: "https://za.com/dahliaOS/documentation/blob/main/",
  toc: {
    extraContent: () => {
      return (
        <>
          <Link target="_blank" href="https://twitter.com/thefrontendbeast">
            🐦 Follow on Twitter →
          </Link>
          {/* <Link target="_blank" href="https://dahliaos.io/donate">
            💝 Support The FE Beast →
          </Link> */}
        </>
      );
    },
    float: true,
  },
  feedback: {
    content: null,
    labels: "feedback",
  },
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
    text: null,
  },
  gitTimestamp: true,
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
  // banner: {
  //   key: "2.0-release",
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   ),
  // },
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
        <meta name="apple-mobile-web-app-title" content="The Front-End Beast" />
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
          content="HTML basics, CSS styling, JavaScript fundamentals, Front-End Beast, The Front-End Beast, Front-end web development, Web development tutorials, Front-end coding, Full Stack learning, Responsive web design, Web development courses, HTML5 features, CSS3 techniques, Interactive web projects, JavaScript frameworks, Front-end optimization, UI/UX design, Progressive web apps, Next.js development, Browser compatibility, Web coding best practices, JavaScript libraries, SEO-friendly websites, Front-end performance, Node.js, Web app development, Tailwind CSS tips"
        />
        <meta
          property="description"
          content={
            meta.description ||
            "Welcome to The Front-End Beast – your ultimate resource for mastering HTML basics, CSS styling, and JavaScript fundamentals. Dive into the world of front-end web development with our comprehensive tutorials, courses, and interactive projects. Learn responsive web design, explore JavaScript frameworks, optimize front-end performance, and discover the power of Next.js development. Whether you're a beginner or aiming for full-stack expertise, our Front-End Beast has everything you need for becoming a web development pro."
          }
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "Welcome to The Front-End Beast – your ultimate resource for mastering HTML basics, CSS styling, and JavaScript fundamentals. Dive into the world of front-end web development with our comprehensive tutorials, courses, and interactive projects. Learn responsive web design, explore JavaScript frameworks, optimize front-end performance, and discover the power of Next.js development. Whether you're a beginner or aiming for full-stack expertise, our Front-End Beast has everything you need for becoming a web development pro."
          }
        />
        <meta
          property="og:image"
          content={
            meta.image ||
            urlcat("https://frontendbeast.com/api/og/", {
              title,
              desc: meta.description ?? undefined,
            })
          }
        />
        <meta
          property="twitter:card"
          content={meta.image ? "summary_large_image" : "summary"}
        />
        <meta property="twitter:site" content="@thefrontendbeast" />
        {route === "/" ? (
          <meta property="twitter:title" content="The Front-End Beast" />
        ) : (
          <meta
            property="twitter:title"
            content={`${title} - The Front-End Beast`}
          />
        )}
        <meta property="twitter:description" content={meta.description} />
        <meta
          property="twitter:url"
          content={`http://frontendbeast.com${asPath}`}
        />
        <meta
          property="twitter:image"
          content={
            meta.image ||
            urlcat("https://frontendbeast.com/api/og/", {
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
