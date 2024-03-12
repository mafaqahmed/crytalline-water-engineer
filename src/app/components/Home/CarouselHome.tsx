"use client";
import { useState } from "react";

import Slider from "react-slick";

import { FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  {
    title: "100% Trusted Company",
    desc: "#01 Choice all over Pakistan",
    btnTitle: "Get Started",
    img: "/images/image1.jpg",
  },
  {
    title: "Vast Variety of Water Treatment Plants",
    desc: "Deal in all kind of water treatment plants with full customization",
    btnTitle: "Contact Us",
    img: "/images/image2.jpg",
  },
  {
    title: "Get a Free Quote",
    desc: "Our team is 24/7 available for assistance",
    btnTitle: "Meet Us",
    img: "/images/image3.jpg",
  },
];

const CarouselHome = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    afterChange: (currentSlide: number) => {
      setActiveSlide(currentSlide);
    },
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {carouselData.map((el, ind) => (
          <div key={el.title + ind} className="relative w-full h-[91vh]">
            <div className="absolute left-10 bottom-10 md:left-28 md:bottom-28 z-50">
              <div className="mb-10 md:mb-16">
                <h2
                  className="text-white font-bold text-3xl md:text-5xl"
                  style={{
                    transform:
                      activeSlide === ind ? "none" : "translateX(-200px)",
                    opacity: activeSlide === ind ? 1 : 0,
                    transition:
                      "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                  }}
                >
                  {el.title}
                </h2>
                <p
                  className="text-white ml-2"
                  style={{
                    transform:
                      activeSlide === ind ? "none" : "translateX(-100%)",
                    opacity: activeSlide === ind ? 1 : 0,
                    transition:
                      "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                  }}
                >
                  {el.desc}
                </p>
              </div>
              <button
                className="flex items-center gap-3 bg-primary text-white rounded px-5 py-3"
                style={{
                  transform: activeSlide === ind ? "none" : "translateY(100px)",
                  opacity: activeSlide === ind ? 1 : 0,
                  transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
                }}
              >
                {el.btnTitle}
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
                backgroundImage: `url(${el.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselHome;
