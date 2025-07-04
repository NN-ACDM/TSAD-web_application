import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center wow fadeInUp relative z-10 pt-6 px-6 border-t border-[#8890A4] border-opacity-40"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="px-4">
            <div className="mb-10">
              <h4 className="mb-4 text-lg font-semibold">Our Partners</h4>
              <ul>
                <li className="relative overflow-hidden mb-3 border-1 rounded-lg">
                  <Image
                    src="/images/partners/Chulalongkorn-University-logo.jpg"
                    alt="logo"
                    width={180}
                    height={20}
                    className="object-contain rounded-lg w-auto h-auto"
                    priority
                  />
                </li>
                <li className="relative overflow-hidden mb-3 border-1 rounded-lg">
                  <Image
                    src="/images/partners/ICO-logo.png"
                    alt="logo"
                    width={180}
                    height={20}
                    className="object-contain rounded-lg w-auto h-auto"
                    priority
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4">
            <div className="mb-10">
              <h4 className="mb-4 text-lg font-semibold ">Address</h4>
              <ul>
                <li>กองจิตเวชและประสาทวิทยา</li>
                <li>Phra Mongkut Klao Hospital</li>
                <li>315 Ratchawithi Rd,</li>
                <li>Thung Phaya Thai,</li>
                <li>Ratchathewi,</li>
                <li>Bangkok 10400</li>
              </ul>
            </div>
          </div>
          <div className="px-4">
            <div className="mb-10">
              <h4 className="mb-4 text-lg font-semibold ">Contact</h4>
              <form>
                <ul>
                  <li>Tel. : 0X-XXX-XXXX</li>
                  <li>Email : happy@tsad.co.th</li>
                </ul>
              </form>
            </div>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <p className="mb-8 max-w-[360px] text-base text-gray-7">
                We create excellent experiences and feeling for each other by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <Link
                  aria-label="social link"
                  href="#"
                  className="px-3 text-gray-7"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
                  </svg>
                </Link>
                <Link
                  aria-label="social link"
                  href="#"
                  className="px-3 text-gray-7"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M20.1236 5.91236C20.2461 5.76952 20.0863 5.58286 19.905 5.64972C19.5004 5.79896 19.1306 5.8974 18.5837 5.95817C19.2564 5.58362 19.5693 5.04828 19.8237 4.39259C19.885 4.23443 19.7 4.09092 19.5406 4.16647C18.8931 4.47345 18.1945 4.70121 17.4599 4.83578C16.7338 4.11617 15.6988 3.6665 14.5539 3.6665C12.3554 3.6665 10.5725 5.32454 10.5725 7.36908C10.5725 7.65933 10.6081 7.94206 10.6752 8.21276C7.51486 8.06551 4.6968 6.71359 2.73896 4.64056C2.60477 4.49848 2.36128 4.51734 2.27772 4.69063C2.05482 5.15296 1.93056 5.66584 1.93056 6.20582C1.93056 7.49014 2.6332 8.62331 3.70132 9.28732C3.22241 9.27293 2.76441 9.17961 2.34234 9.02125C2.13684 8.94416 1.90127 9.07964 1.92888 9.28686C2.14084 10.8781 3.42915 12.1909 5.09205 12.5011C4.75811 12.586 4.40639 12.6311 4.04253 12.6311C3.95431 12.6311 3.86685 12.6284 3.78019 12.6231C3.55967 12.6094 3.38044 12.8067 3.47499 12.9954C4.09879 14.2404 5.44575 15.1096 7.0132 15.1367C5.65077 16.13 3.93418 16.7218 2.06882 16.7218C1.83882 16.7218 1.74015 17.0175 1.9442 17.1178C3.52016 17.8924 5.31487 18.3332 7.22182 18.3332C14.545 18.3332 18.549 12.6914 18.549 7.79843C18.549 7.63827 18.545 7.47811 18.5377 7.31945C19.1321 6.92012 19.6664 6.44528 20.1236 5.91236Z" />
                  </svg>
                </Link>
                <Link
                  aria-label="social link"
                  href="#"
                  className="px-3 text-gray-7"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M11.0297 14.4305C12.9241 14.4305 14.4598 12.8948 14.4598 11.0004C14.4598 9.10602 12.9241 7.57031 11.0297 7.57031C9.13529 7.57031 7.59958 9.10602 7.59958 11.0004C7.59958 12.8948 9.13529 14.4305 11.0297 14.4305Z" />
                    <path d="M14.7554 1.8335H7.24463C4.25807 1.8335 1.83334 4.25823 1.83334 7.24479V14.6964C1.83334 17.7421 4.25807 20.1668 7.24463 20.1668H14.6962C17.7419 20.1668 20.1667 17.7421 20.1667 14.7555V7.24479C20.1667 4.25823 17.7419 1.8335 14.7554 1.8335ZM11.0296 15.4948C8.51614 15.4948 6.53496 13.4545 6.53496 11.0002C6.53496 8.54586 8.54571 6.50554 11.0296 6.50554C13.4839 6.50554 15.4946 8.54586 15.4946 11.0002C15.4946 13.4545 13.5134 15.4948 11.0296 15.4948ZM17.2393 6.91952C16.9436 7.24479 16.5 7.42221 15.9973 7.42221C15.5538 7.42221 15.1102 7.24479 14.7554 6.91952C14.4301 6.59425 14.2527 6.18027 14.2527 5.67758C14.2527 5.17489 14.4301 4.79049 14.7554 4.43565C15.0807 4.08081 15.4946 3.90339 15.9973 3.90339C16.4409 3.90339 16.914 4.08081 17.2393 4.40608C17.535 4.79049 17.7419 5.23403 17.7419 5.70715C17.7124 6.18027 17.535 6.59425 17.2393 6.91952Z" />
                    <path d="M16.0276 4.96777C15.6432 4.96777 15.318 5.29304 15.318 5.67745C15.318 6.06186 15.6432 6.38713 16.0276 6.38713C16.412 6.38713 16.7373 6.06186 16.7373 5.67745C16.7373 5.29304 16.4416 4.96777 16.0276 4.96777Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full mt-6 border-t border-[#8890A4] border-opacity-40 lg:mt-[60px]">
        <p className="text-sm text-base text-gray-4 text-center">
          <span className="text-nowrap">
            Copyright© 2025 All Right Reserved.
          </span>
          {"  "}
          <span className="text-nowrap">
            TSAD Official Website Build Version 0.0.1
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
