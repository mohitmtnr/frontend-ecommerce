import React from "react";
import Image from "next/image";
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
            <Image
              width={124}
              height={70}
              alt="brava logo"
              src="../../public/brava-logo.webp"
            />
          </a>
          <RightNavOptions />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
