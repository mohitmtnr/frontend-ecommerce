"use client";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import image1 from "@/public/carousel/DSC00058_CAROUSEL_1_1440x650_crop_center 1all.png";
import image2 from "@/public/carousel/DSC00198_CAROUSEL_1_1440x650_crop_center 1all.png";
import image3 from "@/public/carousel/DSC09179_CAROUSEL_1_1440x650_crop_center 1all.png";
import image4 from "@/public/carousel/DSC09618_CAROUSEL_1_1440x650_crop_center 1all.png";
import image5 from "@/public/carousel/DSC09802_carousel_1440x650_crop_center 1all.png";

const Banner = () => {
  const carouseImages = [image1, image2, image3, image4, image5];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {carouseImages.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            height={650}
            width={1440}
            alt={`carousel-image-${index}`}
            className="w-full"
            loading="eager"
            priority={true}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
