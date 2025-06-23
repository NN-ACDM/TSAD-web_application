import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="flex justify-center relative overflow-hidden bg-green-600 pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <p className="mx-auto max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Welcome to
                </p>
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Thai Society for Affective Disorders
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Thai Society for Affective Disorders (TSAD) was founded on
                  February 2011 under the supervision of the Psychiatric
                  Association of Thailand.
                </p>

                <div>
                  <p className="mb-4 text-left text-base font-medium text-white/90 pl-4 pr-4">
                    Our Goals:
                    <li className="mb-2">
                      to create a network of psychiatrist who are interested in
                      affective disorders.
                    </li>
                    <li className="mb-2">
                      to promote knowledge management and research on affective
                      disorders
                    </li>
                    <li className="mb-2">
                      to disseminate knowledge about emotional disorders to
                      psychiatrists and doctors form another field and also the
                      public sector.
                    </li>
                    <li className="mb-2">
                      to collaborate and exchange knowledge about affective
                      disorders with other societies, organizations and medical
                      institutions
                    </li>
                  </p>
                  <div
                    className="wow fadeInUp flex items-center justify-center gap-4 text-center"
                    data-wow-delay=".3s"
                  >
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 mb-16">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
