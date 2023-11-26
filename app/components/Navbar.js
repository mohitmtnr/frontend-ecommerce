import React from "react";

import LeftNavbarOptions from "./LeftNavbarOptions";
import RightNavOptions from "./RightNavOptions";

const Navbar = ({ brands }) => {
  return (
    <>
      <nav
        style={{ backgroundColor: "#212122" }}
        className="py-2 w-full sticky top-0 z-50"
      >
        <div className="main-content flex items-center justify-between px-9">
          <LeftNavbarOptions brands={brands} />
          <a href="/">
            <img
              width={124}
              height={70}
              alt="brava logo"
              src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
            />
          </a>
          <RightNavOptions />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
