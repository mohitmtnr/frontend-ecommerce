"use client";
import Slider from "react-slick";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images, height, width }) => {
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
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "transform 0.5s",
            transform: `scale(${1 / (images.length - index)})`,
          }}
        >
          <Image
            src={image}
            height={height}
            width={width}
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

export default Carousel;
