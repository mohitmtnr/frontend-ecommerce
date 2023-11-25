"use client";
import React from "react";
import Carousel from "./Carousel";
import image1 from "@/public/brands/Bitfins_logo_1f1299f3-eb5c-43bc-a76b-7b08dc7b454f_375x_crop_center 1all.png";
import image2 from "@/public/brands/cryptoraggies-logo-profilepic-trans-2000px_375x_crop_center 1all.png";
import image3 from "@/public/brands/Logo_375x_crop_center 1all.png";
import image4 from "@/public/brands/meSG3lth_400x400_1_375x_crop_center 1all.png";
import image5 from "@/public/brands/pendulum-brava-logo_375x_crop_center 1all.png";

const SlideShow = () => {
  const carouseImages = [image1, image2, image3, image4, image5];
  return <Carousel images={carouseImages} height={100} width={100} />;
};

export default SlideShow;
