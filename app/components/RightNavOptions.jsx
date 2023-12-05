import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Link from "next/link";
import Cart from "./Cart";
import SearchBox from "./SearchBox";

const RightNavOptions = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleSearchBox, setToggleSearchBox] = useState(false);
  return (
    <ul className="right-ul text-gray-50 flex flex-row">
      <li>
        <Link href="/become-an-affiliate" className="hover-line">
          become an affiliate
        </Link>
      </li>
      <li>
        <Link href="/twitter">
          <TwitterIcon fontSize="small" />
        </Link>
      </li>
      <li>
        <Link href="/tiktok">
          <i className="fa-brands fa-tiktok" />
        </Link>
      </li>
      <li>
        <Link href="/instagram">
          <InstagramIcon fontSize="small" />
        </Link>
      </li>
      <li>
        <Link href="/account/login">
          <PersonOutlineOutlinedIcon fontSize="medium" />
        </Link>
      </li>
      <li className="relative">
        <Link
          href="/search"
          onClick={(e) => {
            e.preventDefault();
            setToggleSearchBox((prev) => !prev);
          }}
        >
          <SearchOutlinedIcon fontSize="medium" />
        </Link>
        {toggleSearchBox && (
          <SearchBox setToggleSearchBox={setToggleSearchBox} />
        )}
      </li>
      <li style={{ paddingRight: "0px" }} className="p-0 relative">
        <Link
          href="/cart"
          className="group"
          onClick={(e) => {
            e.preventDefault();
            setToggleCart((prev) => !prev);
          }}
        >
          <LocalMallOutlinedIcon fontSize="medium" />
          <span className=" group-hover:bg-customYellow notification-badge  bg-gray-50 text-customBlack">
            0
          </span>
        </Link>
        {toggleCart && <Cart setToggleCart={setToggleCart} />}
      </li>
    </ul>
  );
};

export default RightNavOptions;
