import React from "react";
import Link from "next/link";
import NotFoundVector from "@/vectors/NotFoundVector";

const NotFound = () => {
  return (
    <section className="py-20 dark:bg-dark-2 h-fit">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around items-center">
          <div className="w-full px-4 md:w-5/12 lg:w-6/12">
            <NotFoundVector />
          </div>
          <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
            <div>
              <h1 className="mb-5 text-2xl sm:text-2xl md:text-4xl lg:8xl font-semibold">Not Found</h1>
              <h3 className="mb-5 text-1xl sm:text-1xl md:text-2xl lg:4xl font-semibold">
                We Can&#39;t Seem to Find The Page You&#39;re Looking For.
              </h3>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                The page you are looking for does not exist. It might have been
                moved or deleted.
              </p>
              <Link
                href="/"
                className="rounded-md px-7 py-3 text-base font-medium transition hover:bg-primary"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
