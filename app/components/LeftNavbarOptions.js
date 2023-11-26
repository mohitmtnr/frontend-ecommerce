import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const LeftNavbarOptions = ({ brands }) => {
  // brands options
  const brandOptions = (
    <div className="brand-options opacity-0 invisible absolute group-hover:visible group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 translate-y-6  bg-customGray text-white shadow-md">
      <ul>
        <li>
          <a className="hover-line" href="/">
            all brands
          </a>
        </li>
        {brands.map((data, index) => (
          <li key={index}>
            <a className="hover-line" href="/">
              {data.brandName}
            </a>
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
            <a href="/" className="hover-line">
              apparel
            </a>
          </li>
          <li>
            <a href="/" className="hover-line">
              unisex hoodies
            </a>
          </li>
          <li>
            <a href="/" className="hover-line">
              unisex zip hoodies
            </a>
          </li>
          <li>
            <a href="/" className="hover-line">
              unisex sweatshirts
            </a>
          </li>
          <li>
            <a href="/" className="hover-line">
              unisex tees
            </a>
          </li>
          <li>
            <a href="/" className="hover-line">
              women's tanks
            </a>
          </li>
          <li>
            <a href="/" className="hover-line">
              unisex tanks
            </a>
          </li>
        </ul>
        <ul>
          <li className="title">
            <a href="/" className="hover-line">
              home
            </a>
          </li>
          <li>
            <a href="/" className="hover-line">
              phone cases
            </a>
          </li>
          <li>
            <a href="/" className="hover-line">
              framed posters
            </a>
          </li>
          <li>
            <a href="/" className="hover-line">
              posters
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <ul className="left-ul text-gray-50 flex flex-row">
      <li className="group ">
        <a href="/" className="hover-line ">
          brands{" "}
          <KeyboardArrowDownOutlinedIcon fontSize="small" className="pb-1" />
        </a>
        {brandOptions}
      </li>
      <li className="group ">
        <a href="/" className="hover-line">
          shop{" "}
          <KeyboardArrowDownOutlinedIcon fontSize="small" className="pb-1" />
        </a>
        {shopOptions}
      </li>
      <li>
        <a href="/" className="hover-line">
          premium
        </a>
      </li>
      <li>
        <a href="/" className="hover-line">
          gift cards
        </a>
      </li>
    </ul>
  );
};

export default LeftNavbarOptions;
