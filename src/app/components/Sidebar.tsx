"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import constants from "../contants";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 786) {
      setShowSidebar(false);
    }
  }, []);

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative">
        <div
          className={`absolute -right-7 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
            !showSidebar ? "-translate-x-9" : "translate-x-0"
          } `}
        >
          {showSidebar ? (
            <FaArrowCircleLeft
              className="md:hidden text-primary text-2xl bg-gray-300 rounded-full"
              onClick={() => setShowSidebar(false)}
            />
          ) : (
            <FaArrowCircleRight
              className="md:hidden text-primary text-2xl bg-gray-300 rounded-full"
              onClick={() => setShowSidebar(true)}
            />
          )}
        </div>
        <div
          className={`flex flex-col gap-1 transition-transform duration-300 ${
            !showSidebar ? "-translate-x-10" : "translate-x-0"
          } `}
        >
          {constants.social.map((social, ind) => (
            <Link
              href={social.link}
              key={social.link + ind}
              target="_blank"
              className="group"
              style={{
                backgroundColor: social.color,
              }}
            >
              <div
                className="p-2 md:p-3 group-hover:translate-x-3 group-hover:rounded-r-md transition-transform duration-300"
                style={{
                  backgroundColor: social.color,
                }}
              >
                <social.img className="text-xl sm:text-2xl" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
