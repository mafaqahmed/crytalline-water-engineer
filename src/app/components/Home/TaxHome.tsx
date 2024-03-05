/* eslint-disable @next/next/no-img-element */
import React from "react";

const TaxHome = () => {
  return (
    <div className="bg-gray-100 py-10 my-20 lg:my-32">
      <div className="mb-16">
        <h1 className="font-bold text-3xl sm:text-5xl text-center text-ternary">
          Well Trusted Company
        </h1>
        <p className="text-center text-gray-400 text-sm">
          We are a registered company with the moto of 100% customer
          satisfaction and full honesty
        </p>
      </div>
      <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 ">
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
      </div>
    </div>
  );
};

export default TaxHome;
