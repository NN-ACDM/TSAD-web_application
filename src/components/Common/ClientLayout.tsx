"use client";

import { ReactNode, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PreLoader from "@/components/Common/PreLoader";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({
  children,
  nonce,
}: {
  children: ReactNode;
  nonce: string;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
            <script
              nonce={nonce}
              dangerouslySetInnerHTML={{
                __html: `console.log('Nonce on client')`,
              }}
            />
          </ThemeProvider>
        </SessionProvider>
      )}
    </>
  );
}
