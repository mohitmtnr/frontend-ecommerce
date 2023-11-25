import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// brands options
const brandOptions = (
  <div className="brand-options opacity-0 invisible absolute group-hover:visible group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-200 translate-y-6  bg-customGray text-white shadow-md">
    <ul>
      <li>
        <a className="hover-line" href="/">
          all brands
        </a>
      </li>
      <li>
        <a className="hover-line" href="/">
          $hosky
        </a>
      </li>
      <li>
        <a className="hover-line" href="/">
          bitfins
        </a>
      </li>
      <li>
        <a className="hover-line" href="/">
          cardano stonerz club
        </a>
      </li>
      <li>
        <a className="hover-line" href="/">
          cryptoraggies
        </a>
      </li>
      <li>
        <a className="hover-line" href="/">
          danketsu
        </a>
      </li>
      <li>
        <a className="hover-line" href="/">
          future fest
        </a>
      </li>
      <li>
        <a className="hover-line" href="/">
          pendulum
        </a>
      </li>
      <li>
        <a className="hover-line" href="/">
          vudu brigada
        </a>
      </li>
    </ul>
  </div>
);

// shop options
const shopOptions = (
  <div className="shop-options opacity-0 invisible absolute group-hover:opacity-100 group-hover:visible group-hover:translate-y-0  transition-all duration-200   bg-customGray text-white shadow-md w-screen left-0 translate-y-6 mt-7 ">
    <div className="grid grid-cols-2">
      <ul className="ml-5">
        <li className="title">
          {" "}
          <a href="/" className="hover-line">
            apparel
          </a>{" "}
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
      </ul>
      <ul>
        <li className="title">
          {" "}
          <a href="/" className="hover-line">
            home
          </a>{" "}
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
        <li>
          <a href="/" className="hover-line">
            shop
          </a>
        </li>
      </ul>
    </div>
  </div>
);

// left side elements of the navbar
const leftNavbarElements = (
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
        shop <KeyboardArrowDownOutlinedIcon fontSize="small" className="pb-1" />
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

// right side elements of the navbar
const rightNavbarElements = (
  <ul className="right-ul text-gray-50 flex flex-row">
    <li>
      <a href="/" className="hover-line">
        become an affiliate
      </a>
    </li>
    <li>
      <a href="/">
        <TwitterIcon fontSize="small" />
      </a>
    </li>
    <li>
      <a href="/">
        <i className="fa-brands fa-tiktok" />
      </a>
    </li>
    <li>
      <a href="/">
        <InstagramIcon fontSize="small" />
      </a>
    </li>
    <li>
      <a href="/">
        <PersonOutlineOutlinedIcon fontSize="medium" />
      </a>
    </li>
    <li>
      <a href="#">
        <SearchOutlinedIcon fontSize="medium" />
      </a>
    </li>
    <li style={{ paddingRight: "0px" }}>
      <a href="#">
        <LocalMallOutlinedIcon fontSize="medium" />
      </a>
    </li>
  </ul>
);

const Navbar = () => {
  return (
    <>
      <nav style={{ backgroundColor: "#212122" }} className="py-2">
        <div className=" main-content flex items-center justify-between px-9">
          {leftNavbarElements}
          {/* logo */}
          <a href="/">
            <img
              width={124}
              height={70}
              alt="brava logo"
              src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
            />
          </a>
          {rightNavbarElements}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
