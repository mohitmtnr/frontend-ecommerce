"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const SlideShow = ({ brands }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    cssEase: "linear",
  };

  return (
    <div className="my-20 cursor-pointer">
      <Slider {...settings}>
        {brands &&
          brands.map((data, index) => (
            <div key={index}>
              <div className="slide-show  bg-customBlack">
                <a href={data.linkToBrand}>
                  <Image
                    src={data.image}
                    width={375}
                    height={375}
                    alt={`logo-${index}`}
                    className="slide-show-image"
                    loading="eager"
                    priority={true}
                  />
                </a>

                <div className="slide-show-content text-gray-50 flex flex-col justify-evenly h-full pr-6">
                  <a
                    href={data.linkToBrand}
                    className="slide-show-brand-name text-right"
                  >
                    {data.brandName}
                  </a>
                  <a href={data.linkToBrand} className="underline text-right">
                    shop now
                  </a>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
