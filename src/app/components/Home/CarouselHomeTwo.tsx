"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiOutlineGlobal } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SiTrustpilot } from "react-icons/si";
import { ImFilter } from "react-icons/im";
import { GrTechnology } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";

const CarouselHomeTwo = () => {
  const data = [
    {
      title: "Efficiently serving all aross pakistan",
      description:
        "Pure water, Pakistan-wide. Crystalline Water Engineer cover every corner. Clean water, guaranteed.",
      icon: AiOutlineGlobal,
      color: "#194DA8",
    },
    {
      title: "Industry's Proven Technologies",
      description:
        "Industry-leading, proven technologies for unmatched performance, reliability, and innovation.",
      icon: VscWorkspaceTrusted,
      color: "#E878E8",
    },
    {
      title: "Renowned Water Solutions",
      description:
        "Renowned for manufacturing top-tier water treatment plants, setting industry standards worldwide.",
      icon: SiTrustpilot,
      color: "#2F82D6",
    },
    {
      title: "Advanced Filtration methods",
      description:
        "Innovative filtration methods ensuring unparalleled water quality, purity, and sustainability.",
      icon: ImFilter,
      color: "#8ABC3A",
    },
    {
      title: "Advanced Multiple Serving Areas",
      description:
        "Sophisticated multi-service areas with advanced capabilities for enhanced performance and efficiency.",
      icon: GrTechnology,
      color: "#E878E8",
    },
    {
      title: "Lifetime Maintenance Service",
      description:
        "Lifetime maintenance ensures enduring performance, peace of mind, keeping systems running smoothly.",
      icon: GiAutoRepair,
      color: "#194DA8",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1326,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 986,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 564,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 my-10 md:my-16">
      <div className="max-w-[90%] mx-auto overflow-hidden">
        <div className="mb-20 sm:mb-28">
          <h1 className="font-bold text-3xl sm:text-5xl text-center text-ternary">
            Why Choose Us?
          </h1>
          <p className="text-center text-gray-400 text-sm">
            All water treatment related issues are solved here with latest
            technology and industrial standards.
          </p>
        </div>
        <Slider {...settings}>
          {data.map((el, ind) => (
            <div
              key={el.title + ind}
              className="space-y-4 px-5 border-r-2 border-l-2 border-gray-400 h-52 md:h-48 overflow-hidden"
            >
              <el.icon
                className="mx-auto text-5xl"
                style={{ color: el.color }}
              />
              <div className="text-center">
                <p className="text-secondary font-bold text-xl mb-1">
                  {el.title}
                </p>
                <p className="text-secondary text-sm">{el.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselHomeTwo;
