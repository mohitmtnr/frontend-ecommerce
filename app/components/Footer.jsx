import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-gray-200">
      <section className="grid grid-flow-row grid-cols-2 col w-full my-5 pl-10">
        <div className="col-span-1" style={{ width: "500px" }}>
          <a href="/" className="font-bold">
            get on the list
          </a>

          <p className="my-5">exclusive discounts/giveaways/premier access</p>
          <form className="relative send-email-form box-border flex items-center mb-10">
            <input
              type="text"
              id="email"
              required
              className="p-3 rounded-l-full bg-transparent w-72 border-2 border-customBlack "
            />
            <label
              htmlFor="email"
              className="absolute left-2 top-2  px-2 py-1 bg-gray-200"
            >
              email
            </label>
            <button
              type="submit"
              className=" text-white rounded-r-full bg-customBlack"
            >
              &#129122;
            </button>
          </form>
          <div className="flex justify-start items-center">
            <a>
              <i class="fa-brands fa-twitter rounded-full p-3 text-xl border-2 border-customBlack mr-3"></i>
            </a>
            <a>
              <i class="fa-brands fa-tiktok rounded-full p-3 text-xl border-2 border-customBlack mr-3"></i>
            </a>
            <a>
              <i class="fa-brands fa-instagram rounded-full p-3 text-xl border-2 border-customBlack mr-3"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-3 ">
          <div className="col-span-1">
            <a href="/" className="font-bold">
              shop
            </a>
            <ul className="mt-4">
              <li>
                <a href="/">brands</a>
              </li>
              <li>
                <a href="/">apparel</a>
              </li>
              <li>
                <a href="/">art</a>
              </li>
              <li>
                <a href="/">accessories</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <a href="/" className="font-bold">
              company
            </a>
            <ul className="mt-4">
              <li>
                <a href="/">about us</a>
              </li>
              <li>
                <a href="/">brava spotlight</a>
              </li>
              <li>
                <a href="/">join brava</a>
              </li>
              <li>
                <a href="/">become an affiliate</a>
              </li>
              <li>
                <a href="/">privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="/" className="font-bold">
              help
            </a>
            <ul className="mt-4">
              <li>
                <a href="/">info@bravaland.com</a>
              </li>
              <li>
                <a href="/">return/exchanges</a>
              </li>
              <li>
                <a href="/">faqs</a>
              </li>
              <li>
                <a href="/">contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <p className="py-7 bg-customBlack w-full text-center text-gray-50">
        Copyright &copy; brava 2023. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
