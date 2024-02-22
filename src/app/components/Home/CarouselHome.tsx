"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <div
            className="w-full h-[90vh]"
            style={{
              backgroundImage: 'url("/images/image1.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div>
          <div
            className="w-full h-[90vh]"
            style={{
              backgroundImage: 'url("/images/image2.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div>
          <div
            className="w-full h-[90vh]"
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
