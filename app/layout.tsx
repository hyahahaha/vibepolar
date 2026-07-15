import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const description = "二択の回答から、地域ごとのVibeを地図で楽しむiPhoneアプリ。";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const imageUrl = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: {
      default: "VibeMap",
      template: "%s | VibeMap",
    },
    description,
    icons: {
      icon: "/vibemap-app-icon.png",
      shortcut: "/vibemap-app-icon.png",
      apple: "/vibemap-app-icon.png",
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: "VibeMap",
      title: "VibeMap",
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "VibeMap - 街のVibeが、地図になる。",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "VibeMap",
      description,
      images: [imageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
