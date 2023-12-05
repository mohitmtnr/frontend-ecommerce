import React from "react";
import Image from "next/image";

const Cards = ({ source, colorCodes, description, price, collectionUrl }) => {
  return (
    <a
      href={collectionUrl}
      id="collection-card"
      className="h-full w-full rounded-md "
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
              className="inline-block w-5 h-5 rounded-full mr-5"
            ></span>
          ))}
        <p>{description}</p>
        <button>{price}</button>
      </section>
    </a>
  );
};

export default Cards;
