/* eslint-disable @next/next/no-img-element */
import constants from "../contants";

const Footer = () => {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="/images/image5.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="relative px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div
          className="w-full h-full absolute top-0 left-0"
          style={{
            backgroundImage: 'url("/images/logo.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.2",
          }}
        ></div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 bg-transparent">
          <div>
            <img
              src="/images/logo-detail.png"
              alt="logo"
              width={250}
              className="mb-3"
            />

            <p className="text-primary">
              <span className="text-xs uppercase tracking-wide text-gray-500">
                Call us
              </span>

              <a
                href="#"
                className="block text-2xl font-medium hover:opacity-75 sm:text-3xl"
              >
                {constants.metadata.businessPhone}
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              {constants.social.map((el, ind) => (
                <li key={el.link + ind}>
                  <a
                    href={el.link}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <el.img />
                    <span className="sr-only">Facebook</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <p className="text-gray-700 transition hover:opacity-75">
                    Domestic and Industrial Water Filteration Plant
                  </p>
                </li>
                <li>
                  <p className="text-gray-700 transition hover:opacity-75">
                    Multimedia Filteration Plant
                  </p>
                </li>
                <li>
                  <p className="text-gray-700 transition hover:opacity-75">
                    Water Softner Plant
                  </p>
                </li>
                <li>
                  <p className="text-gray-700 transition hover:opacity-75">
                    Reverse Osmosis System Supplies and Services
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Company Review
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2024. {constants.metadata.businessName}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
