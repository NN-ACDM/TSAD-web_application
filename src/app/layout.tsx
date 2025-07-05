import "./globals.css";
import { ReactNode } from "react";
import { headers } from "next/headers";
import ClientLayout from "@/app/ClientLayout";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = headers();
  const nonce = (await headersList).get("x-nonce") || "";
  const language = (await headersList).get("cookie")?.includes("language=th")? "th": "en";

  return (
    <html lang={language}>
      <head>
        <script nonce={nonce} />
      </head>
      <body>
        <ClientLayout nonce={nonce}>{children}</ClientLayout>
      </body>
    </html>
  );
}
