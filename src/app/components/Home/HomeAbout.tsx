/* eslint-disable @next/next/no-img-element */

import constants from "@/app/contants";

const HomeAbout = () => {
  return (
    <div className="relative border border-transparent bg-transparent">
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{
          backgroundImage: 'url("/images/bg1.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.05",
        }}
      />
      <div className="my-20 md:mt-36 md:mb-16 max-w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-10">
        <div className="mt-5 md:mt-0 z-10">
          <img src="/images/image4.jpg" alt="" width={3000} />
        </div>
        <div>
          <p className="text-red-700 font-semibold">Discover</p>
          <p className="text-slate-800 font-bold">
            <span className="text-red-700 font-extrabold text-3xl">
              {constants.metadata.businessName}
            </span>
            <span className="ml-1 text-2xl">
              - Get clean, safe, and reliable water with{" "}
              {constants.metadata.businessName}.
            </span>
          </p>
          <p className="text-gray-600 text-sm mt-5">
            We are dedicated to providing convenient and efficient water
            treatment solutions tailored to your needs. Whether you are a
            homeowner, a company owner, or an industry professional, we
            understand the importance of clean and safe water. We offer a
            comprehensive range of water treatment solutions designed to enhance
            water quality, improve efficiency, and promote sustainability.
          </p>
          <p className="text-gray-600 text-sm font-medium mt-4 mb-1 ">
            We deal with:
          </p>
          <ul className="text-xs md:text-sm space-y-1 font-semibold tracking-wide md:tracking-wider text-gray-900 list-disc ml-5">
            <li>
              <p>Domestic and industrial water filteration plant</p>
            </li>
            <li>
              <p>Multimedia filter plant</p>
            </li>
            <li>
              <p>Water Softner plant</p>
            </li>
            <li>
              <p>Reverse Osmosis System Supplies and Services</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
