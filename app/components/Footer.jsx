import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-gray-100">
      <section className="grid grid-flow-row grid-cols-2 col w-full my-5 pl-10">
        <div className="col-span-1" style={{ width: "500px" }}>
          <h5 className="font-bold">get on the list</h5>

          <p className="my-5">exclusive discounts/giveaways/premier access</p>
          <form className="relative send-email-form box-border flex items-center">
            <input
              type="text"
              id="email"
              required
              className="p-3 rounded-l-full bg-transparent w-72 border-2 border-customBlack "
            />
            <label
              htmlFor="email"
              className="absolute left-2 top-2  px-2 py-1 bg-gray-100 rounded-full"
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
          <div className="flex justify-start items-center my-20">
            <Link href="/twitter">
              <i className="fa-brands fa-twitter rounded-full p-3 text-xl border-2 border-customBlack mr-3"></i>
            </Link>
            <Link href="/tiktok">
              <i className="fa-brands fa-tiktok rounded-full p-3 text-xl border-2 border-customBlack mr-3"></i>
            </Link>
            <Link href="/instagram">
              <i className="fa-brands fa-instagram rounded-full p-3 text-xl border-2 border-customBlack mr-3"></i>
            </Link>
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-3 ">
          <div className="col-span-1">
            <Link href="/shop" className="font-bold">
              shop
            </Link>
            <ul className="mt-4">
              <li>
                <Link href="/brands">brands</Link>
              </li>
              <li>
                <Link href="/apparel">apparel</Link>
              </li>
              <li>
                <Link href="/art">art</Link>
              </li>
              <li>
                <Link href="/accessories">accessories</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <Link href="/company" className="font-bold">
              company
            </Link>
            <ul className="mt-4">
              <li>
                <Link href="/about-us">about us</Link>
              </li>
              <li>
                <Link href="/brava-spotlight">brava spotlight</Link>
              </li>
              <li>
                <Link href="/join-brava">join brava</Link>
              </li>
              <li>
                <Link href="/become-an-affiliate">become an affiliate</Link>
              </li>
              <li>
                <Link href="/privacy-policy">privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/help" className="font-bold">
              help
            </Link>
            <ul className="mt-4">
              <li>
                <Link href="/info@bravaland.com">info@bravaland.com</Link>
              </li>
              <li>
                <Link href="/return/exchange">return/exchanges</Link>
              </li>
              <li>
                <Link href="/faqs">faqs</Link>
              </li>
              <li>
                <Link href="/contact-us">contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <p className="py-7 bg-customBlack w-full text-center text-gray-50 ">
        Copyright &copy; brava 2023. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
