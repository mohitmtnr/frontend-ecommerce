import React from "react";
import Image from "next/image";
import image1 from "@/public/new arrival/CRYPTORAGGIES_1_EABEDBcopia2_750x_crop_center.webp";
import image2 from "@/public/new arrival/HOSKY_1_003087copia2_2_750x_crop_center.webp";
import image3 from "@/public/new arrival/VB_2_D29F13copia2_750x_crop_center.webp";

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
            <a key={index} href={image.url} className="rounded-md w-full">
              <Image
                height={300}
                width={300}
                src={image.source}
                alt="new arrival images"
                className="rounded-md w-auto h-auto"
              />
            </a>
          ))}
      </section>

      <section className="mt-60"></section>
    </div>
  );
};

export default NewArrival;
