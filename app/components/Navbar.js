import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#212122" }} className="py-2">
      <div className=" main-content flex items-center justify-between px-9">
        {/* left content */}
        <ul className="left-ul text-gray-50 flex flex-row">
          <li className="group hover:text-customYellow">
            <a href="/">
              brands{" "}
              <KeyboardArrowDownOutlinedIcon
                fontSize="small"
                className="pb-1"
              />
            </a>
          </li>
          <li className="group hover:text-customYellow">
            <a href="/">
              shop{" "}
              <KeyboardArrowDownOutlinedIcon
                fontSize="small"
                className="pb-1"
              />
            </a>
          </li>
          <li>
            <a href="/">premium</a>
          </li>
          <li>
            <a href="/">gift cards</a>
          </li>
        </ul>

        {/* logo */}
        <a href="/">
          <img
            width={124}
            height={70}
            alt="brava logo"
            src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
          />
        </a>

        {/* right content */}
        <ul className="right-ul text-gray-50 flex flex-row">
          <li>
            <a href="/">become an affiliate </a>
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
      </div>
    </nav>
  );
};

export default Navbar;
