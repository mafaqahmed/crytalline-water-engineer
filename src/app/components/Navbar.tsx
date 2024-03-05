"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoMdMenu } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import constants from "../contants";
import Main from "./Main";

import styles from "../styles/Navbar.module.css"; // Import your CSS module

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="relative">
        <div className="bg-white flex items-center justify-between md:block px-5 py-3">
          <div className="text-secondary text-sm flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-7">
            <div className="flex gap-1 items-center">
              <Image
                src="/images/logo.png"
                className="h-8"
                alt="Flowbite Logo"
                width={40}
                height={100}
              />
              <div className="text-md sm-lg:text-lg">
                Crystalline Water Engineer
              </div>
            </div>
            <div className="hidden md:block flex-1">
              <ul
                className={`flex list-none items-center mx-0 ${styles.navbar}`}
              >
                {constants.routes.map((route) => (
                  <li
                    key={route.label}
                    className={`flex-grow hover:text-gray-500 basis-10 text-md sm-lg:text-[1rem] ${
                      pathname === route.link
                        ? "border-b-2 border-secondary"
                        : ""
                    }`}
                  >
                    <Link
                      className="block py-3 w-full text-center"
                      href={route.link}
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link
                href={`tel:${constants.metadata.businessPhone}`}
                target="_blank"
                className="text-primary text-md sm-lg:text-lg font-medium hover:underline flex items-center gap-3"
              >
                <span>
                  <FaPhone />
                </span>
                <span>{constants.metadata.businessPhone}</span>
              </Link>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden">
            <Main Icon={IoMdMenu}>
              <div className="bg-secondary rounded-md w-56 h-auto">
                <ul
                  className={`flex flex-col list-none px-5 mt-2 py-3 text-sm text-center`}
                >
                  {constants.routes.map((route) => (
                    <li key={route.label}>
                      <Link
                        className={`block p-2 rounded-sm ${
                          pathname === route.link ? "bg-primary" : ""
                        }`}
                        href={route.link}
                      >
                        {route.label}
                      </Link>
                      <hr className="mt-1 mb-2 border-t border-gray-500" />
                    </li>
                  ))}
                </ul>
              </div>
            </Main>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
