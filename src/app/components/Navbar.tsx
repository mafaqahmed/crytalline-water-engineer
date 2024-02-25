"use client";
import Image from "next/image";
import Link from "next/link";

import { IoMdMenu } from "react-icons/io";

import constants from "../contants";
import Main from "./Main";

const Navbar = () => {
  return (
    <>
      <nav className="relative">
        <div className="bg-primary flex items-center justify-between sm:block px-5 py-3">
          <div className="text-gray-300 text-sm flex flex-col sm:flex-row items-center sm:justify-between">
            <div className="flex gap-1 items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
                width={50}
                height={100}
              />
              <div className="text-md mobile-sm:text-lg">
                Crystaline Water Engineer
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                href={`tel:${constants.metadata.businessPhone}`}
                target="_blank"
                className="text-xs hover:underline"
              >
                {constants.metadata.businessPhone}
              </Link>
              <button className="bg-secondary text-white rounded-sm cursor-pointer px-1 py-[2px] hover:bg-ternary ease-in-out hidden sm:block">
                New Project
              </button>
            </div>
          </div>
          <div className="sm:hidden">
            <Main Icon={IoMdMenu}>
              <div className="bg-black rounded-md w-56 h-auto">
                <ul className="list-none  px-5 mt-2 py-3 text-sm">
                  {constants.routes.map((route) => (
                    <li key={route.label}>
                      <Link className="hover:underline" href={route.link}>
                        {route.label}
                      </Link>
                      <hr className="mt-1 mb-2 border-t border-gray-500" />
                    </li>
                  ))}
                </ul>
                <button className="bg-secondary text-white w-[83%] mx-5 mb-2 rounded-sm cursor-pointer px-1 py-[2px] hover:bg-ternary ease-in-out">
                  New Project
                </button>
              </div>
            </Main>
          </div>
        </div>
        <div className="bg-primary w-[85%] hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-12 border border-gray-500 z-10">
          <ul className="flex list-none items-center justify-around mx-5 my-3">
            {constants.routes.map((route) => (
              <li key={route.label}>
                <Link className="hover:underline" href={route.link}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
