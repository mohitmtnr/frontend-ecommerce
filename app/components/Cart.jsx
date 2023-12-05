import React, { memo } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const Cart = ({ setToggleCart }) => {
  return (
    <section
      className={`cart visible duration-500 text-customBlack !bg-white  overflow-y-scroll rounded-lg mt-3 right-0 absolute flex flex-col shadow-md items-center justify-center`}
      style={{ width: "450px" }}
    >
      <div
        className="flex py-5 rounded-tl-lg rounded-tr-lg px-5  justify-between items-center w-full h-fit"
        style={{ borderBottom: "1px solid #e5e7eb" }}
      >
        <h3 className="text-md  font-extrabold uppercase">Cart</h3>
        <span
          className="text-center cursor-pointer"
          onClick={() => setToggleCart(false)}
        >
          <CloseIcon />
        </span>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <div>
          <AddShoppingCartIcon
            style={{
              fontSize: "100px",
              color: "#212122",
              fontWeight: "lighter",
            }}
          />
        </div>
        <div className="mt-8">
          <p>Your cart is currently empty.</p>
        </div>
        <div className="mt-3">
          <Link
            href="/shop"
            type="button"
            className="start-shopping-button px-8 !py-3  text-white rounded-full text-sm"
          >
            start shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Cart);
