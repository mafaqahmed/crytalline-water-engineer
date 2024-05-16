/* eslint-disable @next/next/no-img-element */
import React from "react";

const TaxHome = () => {
  return (
    <div className="relative py-10 my-10 lg:my-20 z-10 min-h-[100vh]">
      <div className="mb-14 md:mb-32 md:mt-10 flex flex-col gap-5">
        <h3 className="font-medium text-lg sm:text-xl text-center text-primary">
          A Well Trusted Company
        </h3>
        <h2 className="text-black font-bold text-2xl sm:text-5xl text-center w-[90%] sm:w-[70%] mx-auto">
          With the moto of 100% customer satisfaction and full honesty
        </h2>
        <p className="text-center text-secondary text-[0.75rem] sm:text-sm w-[100%] sm:w-[70%] mx-auto">
          The key to ensuring clean water access, advancing technology in
          treatment methods, and cultivating professional development within a
          collaborative, progressive platform for flourishing water treatment
          solutions.
        </p>
      </div>
      {/* <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 ">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <img src="/images/membership.jpg" alt="" width={300} />
          <p className="mt-2">
            <span className="text-red-700 font-semibold">
              Membership Certificate
            </span>
            <span className="text-gray-500 font-semibold block mt-3 sm:mt-8">
              The Lahore Chamber of Commerce and Industries
            </span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <img src="/images/FBR.png" alt="" width={300} />
          <p className="mt-2">
            <span className="text-red-700 font-semibold">
              Online TaxPayer Verification
            </span>
            <span className="text-gray-500 font-semibold block mt-3 sm:mt-8">
              Federal Board of Revenue (FBR)
            </span>
          </p>
        </div>
      </div> */}
      <div
        className="w-full h-full absolute top-0 left-0 -z-10"
        style={{
          backgroundImage: 'url("/images/bg2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "1",
        }}
      />
    </div>
  );
};

export default TaxHome;
