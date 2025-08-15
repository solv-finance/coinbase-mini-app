import type { Metadata } from "next";

import { Provider } from "@/providers";

import "../assets/css/globals.css";
import "@radix-ui/themes/styles.css";

export async function generateMetadata(): Promise<Metadata> {
  const URL = process.env.NEXT_PUBLIC_URL;
  return {
    title: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
    description: "Solv Mini App - The Future of Bitcoin Finance",
    openGraph: {
      title: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      description: "Solv Mini App - The Future of Bitcoin Finance",
      images: [
        {
          url: "/cover.png"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      description: "Solv Mini App - The Future of Bitcoin Finance",
      images: ["/cover.png"]
    },
    other: {
      "fc:frame": JSON.stringify({
        version: "1",
        imageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
        button: {
          title: `Launch ${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}`,
          action: {
            type: "launch_frame",
            name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
            url: URL,
            splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE,
            splashBackgroundColor:
              process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR
          }
        }
      }),
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
        button: {
          title: `Launch ${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}`,
          action: {
            type: "launch_frame",
            name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
            url: URL,
            splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE,
            splashBackgroundColor:
              process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR
          }
        }
      })
    }
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
