import "./globals.css";
import { ReactNode } from "react";
import { headers } from "next/headers";
import ClientLayout from "@/components/Common/ClientLayout";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = headers();
  const nonce = (await headersList).get("x-nonce") || "";
  const theme = (await headersList).get("cookie")?.includes("theme=dark") ? "dark " : "";
  return (
    <html lang="en" className={theme}>
      <head>
        <script
          nonce={nonce}
        />
      </head>
      <body>
        <ClientLayout nonce={nonce}>{children}</ClientLayout>
      </body>
    </html>
  );
}
