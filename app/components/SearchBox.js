import React, { memo } from "react";
import CloseIcon from "@mui/icons-material/Close";

const SearchBox = ({ setToggleSearchBox }) => {
  return (
    <section
      className={`visible duration-500 text-customBlack !bg-white  overflow-y-scroll rounded-lg mt-3 right-0 absolute flex flex-col shadow-md items-center justify-center`}
      style={{ width: "460px" }}
    >
      <div
        className="flex py-4 rounded-tl-lg rounded-tr-lg px-5  justify-between items-center w-full h-fit"
        style={{ borderBottom: "1px solid #e5e7eb" }}
      >
        <form action="/" className="w-80 h-full">
          <label htmlFor="searchInput" className="w-full h-full ">
            <input
              type="text"
              className="w-full py-2 !font-extralight focus:outline-none"
              placeholder="Search for anything..."
            />
          </label>
        </form>
        <span
          className="text-center cursor-pointer"
          onClick={() => setToggleSearchBox(false)}
        >
          <CloseIcon />
        </span>
      </div>
      <div className="flex justify-start items-center uppercase mt-6 mb-10 w-full">
        <p className="!text-xs tracking-wider text-left ml-6">trending now</p>
      </div>
    </section>
  );
};

export default memo(SearchBox);
