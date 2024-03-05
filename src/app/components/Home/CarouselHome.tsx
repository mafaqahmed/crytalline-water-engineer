"use client";
import Slider from "react-slick";

import { FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="relative w-full h-[91vh]">
          <div className="absolute left-10 bottom-10 md:left-28 md:bottom-28 z-50">
            <div className="mb-10 md:mb-16">
              <h2 className="text-white font-bold text-3xl md:text-5xl">
                100% Trusted Company
              </h2>
              <p className="text-white ml-2">#01 Choice all over Pakistan</p>
            </div>
            <button className="flex items-center gap-3 bg-primary text-white rounded px-5 py-3">
              Get Started
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            style={{
              background:
                "linear-gradient(rgba(255,255,255,0), rgba(255,165,0,0.5))",
            }}
          />
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{
              backgroundImage: 'url("/images/image1.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="relative w-full h-[91vh]">
          <div className="absolute left-10 bottom-10 md:left-28 md:bottom-28 z-50">
            <div className="mb-10 md:mb-16">
              <h2 className="text-white font-bold text-3xl md:text-5xl">
                Vast Variety of Water Treatment Plants
              </h2>
              <p className="text-white ml-2">
                Deal in all kind of water treatment plants with full
                customization
              </p>
            </div>
            <button className="flex items-center gap-3 bg-primary text-white rounded px-5 py-3">
              Contact Us
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            style={{
              background:
                "linear-gradient(rgba(255,255,255,0), rgba(255,165,0,0.5))",
            }}
          />
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{
              backgroundImage: 'url("/images/image2.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="relative w-full h-[91vh]">
          <div className="absolute left-10 bottom-10 md:left-28 md:bottom-28 z-50">
            <div className="mb-10 md:mb-16">
              <h2 className="text-white font-bold text-3xl md:text-5xl">
                Get a Free Quote
              </h2>
              <p className="text-white ml-2">
                Our team is 24/7 available for assistance
              </p>
            </div>
            <button className="flex items-center gap-3 bg-primary text-white rounded px-5 py-3">
              Meet Us
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            style={{
              background:
                "linear-gradient(rgba(255,255,255,0), rgba(255,165,0,0.5))",
            }}
          />
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{
              backgroundImage: 'url("/images/image3.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselHome;
