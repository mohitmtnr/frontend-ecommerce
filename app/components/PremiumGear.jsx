"use client";
import React from "react";
import Link from "next/link";
import defaultImage from "@/public/new arrival/CRYPTORAGGIES_1_EABEDBcopia2_750x_crop_center.webp";
import Cards from "./Cards";

const PremiumGear = () => {
  const collection = [
    {
      id: 100,
      collectionUrl: "/collections/all",
      source: defaultImage,
      colorCodes: ["black", "green", "orange"],
      price: "5000",
      description: "great product to buy",
    },
    {
      id: 101,
      collectionUrl: "/collections/all",
      source: defaultImage,
      colorCodes: ["black", "green", "orange"],
      price: "5000",
      description: "great product to buy",
    },
    {
      id: 102,
      collectionUrl: "/collections/all",
      source: defaultImage,
      colorCodes: ["black", "green", "orange"],
      price: "5000",
      description: "great product to buy",
    },
    {
      id: 103,
      collectionUrl: "/collections/all",
      source: defaultImage,
      colorCodes: ["black", "green", "orange"],
      price: "5000",
      description: "great product to buy",
    },
    {
      id: 104,
      collectionUrl: "/collections/all",
      source: defaultImage,
      colorCodes: ["black", "green", "orange"],
      price: "5000",
      description: "great product to buy",
    },
    {
      id: 105,
      source: defaultImage,
      colorCodes: ["black", "green", "orange"],
      price: "5000",
      description: "great product to buy",
    },
  ];
  return (
    <div
      id="premium-gear"
      className="flex flex-col justify-center items-center my-20"
    >
      <h1 className=" premium-header font-extrabold text-4xl pb-4">
        premium gear
      </h1>
      <p>
        our favorite design in an elevated package. streetstyle meets soft and
        cozy.
      </p>
      <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-10 my-10">
        {collection &&
          collection.map((data) => (
            <Cards
              key={data.id}
              source={data.source}
              price={data.price}
              colorCodes={data.colorCodes}
              description={data.description}
              collectionUrl={data.collectionUrl}
            />
          ))}
      </div>
      <Link
        href="/shop"
        type="button"
        className="start-shopping-button px-8 !py-3  text-white rounded-full text-sm"
      >
        shop more
      </Link>
    </div>
  );
};

export default PremiumGear;
