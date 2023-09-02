/* eslint-disable no-console */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "The Front-End Beast article";
    const hasDesc = searchParams.has("desc");
    const desc = hasDesc
      ? searchParams.get("desc")?.slice(0, 100)
      : "Check out the docs article.";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#F0FFFF",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <img
              alt="The Front-End Beast Logotype"
              width={300}
              src="https://frontendbeast.com/images/favicon/android-chrome-512x512.png"
            />
            <p
              style={{
                fontSize: 45,
                fontStyle: "normal",
                fontWeight: "bold",
                color: "black",
                marginLeft: 20,
              }}
            >
              Front-End{" "}
              <span style={{ color: "#0f67bf", marginLeft: "1rem" }}>
                Beast
              </span>
            </p>
          </div>
          <p
            style={{
              fontSize: 45,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "black",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: 30,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "black",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
              marginTop: 20,
            }}
          >
            {desc}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
