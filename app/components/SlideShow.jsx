"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

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
    arrows: false,
  };

  return (
    <div className="my-20 mx-0 cursor-pointer">
      <Slider {...settings}>
        {brands &&
          brands.map((data, index) => (
            <div key={index}>
              <div className="slide-show  bg-customBlack">
                <Link href={data.linkToBrand} className="w-fit">
                  <Image
                    src={data.image}
                    width={375}
                    height={375}
                    alt={`logo-${index}`}
                    className="slide-show-image"
                    loading="eager"
                    priority={true}
                  />
                </Link>

                <div className="slide-show-content text-gray-50 flex flex-col justify-evenly h-full pr-6">
                  <Link
                    href={data.linkToBrand}
                    className="slide-show-brand-name text-right"
                  >
                    {data.brandName}
                  </Link>
                  <Link
                    href={data.linkToBrand}
                    className="underline text-right"
                  >
                    shop now
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
