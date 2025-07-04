import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found | TSAD Official Website",
};

const ErrorPage = () => {
  return <NotFound />;
};

export default ErrorPage;
