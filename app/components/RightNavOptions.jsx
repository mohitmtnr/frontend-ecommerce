import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Cart from "./Cart";
import SearchBox from "./SearchBox";

const RightNavOptions = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleSearchBox, setToggleSearchBox] = useState(false);
  return (
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
      <li className="relative">
        <a href="#" onClick={() => setToggleSearchBox(!toggleSearchBox)}>
          <SearchOutlinedIcon fontSize="medium" />
        </a>
        {toggleSearchBox && (
          <SearchBox setToggleSearchBox={setToggleSearchBox} />
        )}
      </li>
      <li style={{ paddingRight: "0px" }} className="p-0 relative">
        <a
          href="#"
          className="group"
          onClick={() => setToggleCart(!toggleCart)}
        >
          <LocalMallOutlinedIcon fontSize="medium" />
          <span className=" group-hover:bg-customYellow notification-badge  bg-gray-50 text-customBlack">
            0
          </span>
        </a>
        {toggleCart && <Cart setToggleCart={setToggleCart} />}
      </li>
    </ul>
  );
};

export default RightNavOptions;
