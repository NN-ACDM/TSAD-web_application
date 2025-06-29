import Breadcrumb from "@/components/Common/Breadcrumb";
import Announcement from "@/components/Announcement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Announcement | TSAD Official Website",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing Page" />
      <Announcement />
      {/* <Faq /> */}
    </>
  );
};

export default PricingPage;
