import React from "react";
import Image from "next/image";

const Cards = ({ source, colorCodes, description, price, collectionUrl }) => {
  return (
    <a
      href={collectionUrl}
      id="collection-card"
      className="group h-full w-full rounded-md "
    >
      <Image
        src={source}
        alt="collections"
        height={400}
        width={400}
        className="rounded-md"
      />

      <section className="p-4">
        {colorCodes &&
          colorCodes.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="inline-block w-5 h-5 rounded-full mr-3"
            ></span>
          ))}
        <p className="mb-2">{description}</p>
        <button className=" border-2 border-200 group-hover:bg-customYellow py-2 px-10 rounded-full">
          Rs. {price}
        </button>
      </section>
    </a>
  );
};

export default Cards;
