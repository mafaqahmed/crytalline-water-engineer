"use server";
import constants from "../contants";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
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
  );
};

export default Sidebar;
