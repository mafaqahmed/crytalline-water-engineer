"use client";
/* eslint-disable @next/next/no-img-element */
import { FaMapMarkedAlt, FaPhoneSquareAlt, FaMailchimp } from "react-icons/fa";

import constants from "../contants";
import { MapComponent } from "../components/Map/MapComponent";

export default function Page() {
  return (
    <>
      <section className="font-sans text-black">
        <div className="text-center h-[75vh] flex items-center justify-center relative">
          <div
            className="w-full h-full absolute top-0 left-0 opacity-35"
            style={{
              backgroundImage: 'url("/images/image3.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="text-primary px-4 rounded">
            <p className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              We would love to hear from you
            </p>
            <p className="text-base lg:text-lg">
              Our friendly team is always here to chat.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 my-20 lg:my-32">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="flex flex-col justify-between gap-3">
              <div className="w-full flex items-center justify-around text-center shadow-sm px-2 md:px-5 py-3 gap-3 md:gap-5">
                <div className="flex flex-col items-center">
                  <FaMapMarkedAlt className="text-primary text-2xl md:text-6xl" />
                  <p className="text-sm md:text-lg font-semibold  whitespace-nowrap">
                    Office Address
                  </p>
                </div>
                <p className="text-xs md:text-base text-gray-700 text-center w-4/5 md:w-2/3">
                  {constants.metadata.businessAddress}
                </p>
              </div>
              <div className="w-full flex items-center justify-around text-center shadow-sm px-2 md:px-5 py-3 gap-3 md:gap-5">
                <div className="flex flex-col items-center">
                  <FaMailchimp className="text-primary text-2xl md:text-6xl" />
                  <p className="text-sm md:text-lg font-semibold  whitespace-nowrap">
                    Chat to Support
                  </p>
                </div>
                <p className="text-xs md:text-base text-gray-700 text-center w-4/5 md:w-2/3">
                  {constants.metadata.businessEmail}
                </p>
              </div>
              <div className="w-full flex items-center justify-around text-center shadow-sm px-2 md:px-5 py-3 gap-3 md:gap-5">
                <div className="flex flex-col items-center">
                  <FaPhoneSquareAlt className="text-primary text-2xl md:text-6xl" />
                  <p className="text-sm md:text-lg font-semibold  whitespace-nowrap">
                    Call to Discuss
                  </p>
                </div>
                <p className="text-xs md:text-base text-gray-700 text-center w-4/5 md:w-2/3">
                  {constants.metadata.businessPhone}
                </p>
              </div>
            </div>
            <img src="/images/contact.gif" alt="contact" width={600} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-20 lg:mt-32 mb-20 lg:mb-32">
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Get in touch
            </p>
            <p className="text-base lg:text-lg">
              We would love to hear from you. Please fill out this form.
            </p>
          </div>
          <div className="w-[100%] md:px-0 md:w-[85%] flex flex-col md:flex-row gap-10 mx-auto mt-12">
            <form className="w-full">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mr-4 md:mb-0">
                  <label className="block mb-2" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name here"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block mb-2" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name here"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-6">
                <div className="mb-6 md:mr-4 md:mb-0">
                  <label className="block mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email here"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block mb-2" htmlFor="phoneNumber">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter your phone number here"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block mb-2" htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  placeholder="Type your message here"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
                >
                  Send message
                </button>
              </div>
            </form>
            <div className="w-full h-80">
              <MapComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
