"use client";
import Slider from "react-slick";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/carousel/DSC00058_CAROUSEL_1_1440x650_crop_center 1all.png";
import image2 from "@/public/carousel/DSC00198_CAROUSEL_1_1440x650_crop_center 1all.png";
import image3 from "@/public/carousel/DSC09179_CAROUSEL_1_1440x650_crop_center 1all.png";
import image4 from "@/public/carousel/DSC09618_CAROUSEL_1_1440x650_crop_center 1all.png";
import image5 from "@/public/carousel/DSC09802_carousel_1440x650_crop_center 1all.png";

const Banner = () => {
  const [visible, setVisible] = useState(false);
  const carouseImages = [
    {
      image: image1,
      apparel: "heritage hoodies",
      linkToApparel: "/",
      position: "ml-0",
    },
    {
      image: image2,
      apparel: "primium zip hoodies ",
      linkToApparel: "/",
      position: "ml-0",
    },
    {
      image: image3,
      apparel: "premium tees",
      linkToApparel: "/",
      position: "ml-0",
    },
    {
      image: image4,
      apparel: "heritage women`s tanks",
      linkToApparel: "/",
      position: "ml-auto",
    },
    {
      image: image5,
      apparel: "heritage tees",
      linkToApparel: "/",
      position: "ml-auto",
    },
  ];

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="prev-next-button right-5">
        &#129122;
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="prev-next-button left-5">
        &#129120;
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    draggable: true,
    beforeChange: () => {
      // Reset visibility when changing slides
      setVisible(false);
    },
    afterChange: () => {
      // Set visibility to trigger the text animation
      setVisible(true);
    },
  };

  return (
    <Slider {...settings} className="banner-slider">
      {carouseImages.map((data, index) => (
        <div
          key={index}
          className="banner cursor-grab active:cursor-grabbing relative"
        >
          <Image
            src={data.image}
            height={650}
            width={1440}
            alt={`carousel-image-${index}`}
            className={`banner-image`}
            loading="eager"
            priority={true}
          />
          <div className="absolute bg-customBlack opacity-20 top-0 right-0 w-full h-full items-center text-gray-50"></div>
          <div className="absolute top-0 right-0 w-full h-full flex items-center text-gray-50">
            <div
              className={`${data.position} h-full w-1/3 px-24 flex flex-col ${
                data.position === "ml-0" ? "items-start" : "items-end"
              }  justify-center`}
            >
              <h1
                className={`apparel-title text-7xl tracking-wider font-extrabold w-fit ${
                  data.position == "ml-0" ? "text-left" : "text-right"
                }`}
              >
                {data.apparel}
              </h1>
              <Link
                href={data.linkToApparel}
                className=" mt-10 banner-shop-button px-8 py-3 rounded-full text-customBlack"
              >
                shop now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
