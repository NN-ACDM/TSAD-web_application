import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Home | TSAD Official Website",
  description: "Thai Society for Affective Disorders (since February, 2011)",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
    </main>
  );
}
