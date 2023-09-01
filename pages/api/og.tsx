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
            backgroundColor: "white",
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
              src="https://private-user-images.githubusercontent.com/121493635/264938290-89689585-bd87-479c-a0a9-154051adb08f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTM1NDg5NzgsIm5iZiI6MTY5MzU0ODY3OCwicGF0aCI6Ii8xMjE0OTM2MzUvMjY0OTM4MjkwLTg5Njg5NTg1LWJkODctNDc5Yy1hMGE5LTE1NDA1MWFkYjA4Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkwMVQwNjExMThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ZDE2M2RiYWM2ZjM0OGU3NDFkMGRkMTUwMWZjNDJlYzcyYjhlYTg2ZThlNTMzZTY1MjM2ODIzNzUwMTUyZGM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.xre2Nhd782YJfxTNlvoi21rIQQ9KQbTIX5Ir8oF1TKc"
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
              Front-End Beast
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
              marginTop: -15,
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
