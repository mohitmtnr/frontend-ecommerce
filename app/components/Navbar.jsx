import React from "react";
import Image from "next/image";
import LeftNavbarOptions from "./LeftNavbarOptions";
import RightNavOptions from "./RightNavOptions";
import logo from "../../public/brava-logo.webp";
import Link from "next/link";

const Navbar = ({ brands }) => {
  return (
    <>
      <nav
        style={{ backgroundColor: "#212122" }}
        className="py-2 w-full sticky top-0 z-50"
      >
        <div className="main-content flex items-center justify-between px-9">
          <LeftNavbarOptions brands={brands} />
          <Link href="/">
            <Image width={124} height={70} alt="brava logo" src={logo} />
          </Link>
          <RightNavOptions />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
