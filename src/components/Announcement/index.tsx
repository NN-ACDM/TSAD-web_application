"use client";

import SectionTitle from "../Common/SectionTitle";
import "../../app/globals.css";

const Announcement = () => {
  return (
    <section
      id="announcement"
      className="relative z-20 overflow-hidden pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="mb-[60px]">
        <SectionTitle
          subtitle="Catch up our news"
          title="Anouncement"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
      </div>
      {/* <div className="flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}     
        </div> */}
    </section>
  );
};

export default Announcement;
