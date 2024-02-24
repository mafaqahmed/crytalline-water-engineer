/* eslint-disable @next/next/no-img-element */
import React from "react";

const TaxHome = () => {
  return (
    <div className="my-20 lg:my-32 max-w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 ">
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
  );
};

export default TaxHome;
