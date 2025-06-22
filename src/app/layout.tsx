import "./globals.css";
import { headers } from "next/headers";
import { ReactNode } from "react";

export const metadata = {
  title: "TSAD Official Website",
  description: "Thai Society for Affective Disorders (since February, 2011)",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || "";

  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
