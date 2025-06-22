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

  return (
    <html lang="en">
      <head>
        {/* Optional: Example inline script with nonce */}
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
