import React, { useEffect } from "react";
import Image from "next/image";
import image1 from "@/public/new arrival/CRYPTORAGGIES_1_EABEDBcopia2_750x_crop_center.webp";
import image2 from "@/public/new arrival/HOSKY_1_003087copia2_2_750x_crop_center.webp";
import image3 from "@/public/new arrival/VB_2_D29F13copia2_750x_crop_center.webp";
import backgroundImage from "@/public/new arrival/burgess-milner-OYYE4g-I5ZQ-unsplash.jpg";
import Link from "next/link";

const NewArrival = () => {
  const newArrivalImages = [
    { source: image1, url: "/" },
    { source: image2, url: "/" },
    { source: image3, url: "/" },
  ];

  return (
    <div
      id="new-arrival"
      className=" flex flex-col justify-center items-center"
    >
      <h1 className="font-extrabold text-5xl pb-4">new arrivals</h1>
      <p style={{ fontFamily: "made-tommy-soft,sans-serif" }}>
        Elevated style you can take with you into the 3D.
      </p>

      <section className="image-container grid grid-flow-row grid-cols-3 gap-7 mt-20">
        {newArrivalImages &&
          newArrivalImages.map((image, index) => (
            <Link key={index} href={image.url} className="rounded-md w-full">
              <Image
                height={400}
                width={400}
                src={image.source}
                alt="new arrival images w-full h-full"
                className="rounded-md"
              />
            </Link>
          ))}
      </section>

      <section
        className="relative my-20 w-full overflow-hidden"
        style={{ height: "450px" }}
      >
        <Image
          id="scroll-image"
          src={backgroundImage}
          height={400}
          width={1000}
          alt="ntf streetstyle"
          className="w-full"
        />
        <div className="absolute left-0 top-0 opacity-20 h-full w-full bg-customBlack "></div>
        <div className="absolute left-0 top-0 text-white  flex flex-col justify-center items-center h-full w-full">
          <h1 className="text-4xl font-extrabold mb-4">ntf streetstyle</h1>
          <p className="text-lg my-3">
            celebrating the iconic designs behind top NFT brands
          </p>
          <Link
            href="/shop"
            type="button"
            className="start-shopping-button px-8 !py-3  text-white rounded-full text-sm"
          >
            start shopping
          </Link>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default NewArrival;
