import React from "react";
import Link from "next/link";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const LeftNavbarOptions = ({ brands }) => {
  // brands options
  const brandOptions = (
    <div className="brand-options opacity-0 invisible absolute group-hover:visible group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 translate-y-6  bg-customGray text-white shadow-md">
      <ul>
        <li>
          <Link className="hover-line" href="/all-brands">
            all brands
          </Link>
        </li>
        {brands.map((data, index) => (
          <li key={index}>
            <Link className="hover-line" href={data.linkToBrand}>
              {data.brandName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  // shop options
  const shopOptions = (
    <div className="shop-options opacity-0 invisible absolute group-hover:opacity-100 group-hover:visible group-hover:translate-y-0  transition-all duration-200   bg-customGray text-white shadow-md w-screen left-0 translate-y-6 mt-7 ">
      <div className="grid grid-cols-2">
        <ul className="ml-5">
          <li className="title">
            <Link href="/apparel" className="hover-line">
              apparel
            </Link>
          </li>
          <li>
            <Link href="/unisex-hoodies" className="hover-line">
              unisex hoodies
            </Link>
          </li>
          <li>
            <Link href="/unisex-zip-hoodies" className="hover-line">
              unisex zip hoodies
            </Link>
          </li>
          <li>
            <Link href="/unisex-sweatshirts" className="hover-line">
              unisex sweatshirts
            </Link>
          </li>
          <li>
            <Link href="/unisex-tees" className="hover-line">
              unisex tees
            </Link>
          </li>
          <li>
            <Link href="/women-tanks" className="hover-line">
              women's tanks
            </Link>
          </li>
          <li>
            <Link href="/unisex-tanks" className="hover-line">
              unisex tanks
            </Link>
          </li>
        </ul>
        <ul>
          <li className="title">
            <Link href="/home" className="hover-line">
              home
            </Link>
          </li>
          <li>
            <Link href="/phone-cases" className="hover-line">
              phone cases
            </Link>
          </li>
          <li>
            <Link href="/framed-posters" className="hover-line">
              framed posters
            </Link>
          </li>
          <li>
            <Link href="/posters" className="hover-line">
              posters
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <ul className="left-ul text-gray-50 flex flex-row">
      <li className="group ">
        <Link href="/brands" className="hover-line ">
          brands
          <KeyboardArrowDownOutlinedIcon fontSize="small" className="pb-1" />
        </Link>
        {brandOptions}
      </li>
      <li className="group ">
        <Link href="/shop" className="hover-line">
          shop
          <KeyboardArrowDownOutlinedIcon fontSize="small" className="pb-1" />
        </Link>
        {shopOptions}
      </li>
      <li>
        <Link href="/premium" className="hover-line">
          premium
        </Link>
      </li>
      <li>
        <Link href="/gift-cards" className="hover-line">
          gift cards
        </Link>
      </li>
    </ul>
  );
};

export default LeftNavbarOptions;
