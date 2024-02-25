import Image from "next/image";
import React from "react";

export default function FeaturesHome() {
  return (
    <main className="max-w-[90%] mx-auto my-20 lg:my-32 overflow-hidden">
      <div className="flex justify-center pb-4 sm:pb-8 featuresc:justify-end px-1 sm:px-5 featuresc:px-0">
        <h1 className="font-bold text-[1.25rem] sm:text-[2.75rem] leading-[25px] sm:leading-[55px] tracking-wide text-primary featuresc:w-[50%]">
          Versatile Water Filtration Solutions: From Homes to Industries
        </h1>
      </div>
      <div className="featuresc:grid featuresc:grid-cols-[50%_50%]">
        <div className="w-full relative justify-center items-center">
          <div className="absolute font-extrabold text-[4rem] sm:text-[6.875rem] leading-[80px] sm:leading-[110px] opacity-[0.07] text-[#212121] z-10">
            Different from others
          </div>
          <div className="grid grid-cols-[50%_50%] h-full">
            <div className="w-[70%] z-20 h-full pt-3 sm:pt-2">
              <p className="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-2 sm:mb-4 md:whitespace-nowrap">
                Domestic & Industries
              </p>
              <p className="font-light text-xs sm:text-base leading-3 tracking-wider text-[#212121]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
            <div className="w-[70%] z-20 h-full pt-3 sm:pt-2">
              <p className="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-2 sm:mb-4 md:whitespace-nowrap">
                Multimedia Filter Plant
              </p>
              <p className="font-light text-xs sm:text-base leading-3 tracking-wider text-[#212121]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
            <div className="w-[70%] z-20 h-full pt-3 sm:pt-2">
              <p className="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-2 sm:mb-4 md:whitespace-nowrap">
                Water Softner Plant
              </p>
              <p className="font-light text-xs sm:text-base leading-3 tracking-wider text-[#212121]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
            <div className="w-[70%] z-20 h-full pt-3 sm:pt-2">
              <p className="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-2 sm:mb-4 md:whitespace-nowrap">
                Reverse Osmosis System
              </p>
              <p className="font-light text-xs sm:text-base leading-3 tracking-wider text-[#212121]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-3 featuresc:mt-0 items-center sm:flex-row flex-col">
          <Image
            src="/images/image5.jpg"
            alt=""
            width={300}
            height={400}
            className=""
          />
          <div className="sm:ml-4 sm:mt-0 mt-4 flex flex-col justify-evenly h-full">
            <p className="font-light text-[0.9rem] sm:text-base leading- sm:leading-7 tracking-wider text-[#212121] pt-2">
              Explore diverse water filtration solutions: domestic/industrial
              plants, multimedia filters, water softeners, and advanced reverse
              osmosis systems for clean, reliable water.
            </p>
            <button className=" capitalize mt-5 p-4 text-base bg-primary font-semibold text-[#fff] leading-4 ">
              New Project
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
