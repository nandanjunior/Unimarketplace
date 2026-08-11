import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { bold } from "@cloudinary/url-gen/qualifiers/fontWeight";
import { text } from "@cloudinary/url-gen/qualifiers/source";

const Hero = () => {
  return (
    <div
  className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full flex items-center`}
>
  {/* Left Section: Text */}
  <div className={`${styles.section} w-[90%] 800px:w-[50%] px-4`}>
  <h1
      className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] capitalize`}
    >
      <span className="font-bold">Best Collection</span> <br />
      <span>for Campus Needs</span>
    </h1>
    <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
      Connect and transact securely with the UniMarketplace, designed
      exclusively for USM students and staff to buy, sell, and exchange items
      right on our campus. Experience the ease of dealing with peers in a
      trusted environment tailored to your community.
    </p>
    <Link to="/products" className="inline-block">
      <div className={`${styles.button} mt-5`}>
        <span className="text-[#fff] font-[Poppins] text-[18px]">Shop Now</span>
      </div>
    </Link>
  </div>

  {/* Right Section: Image */}
  <div className="hidden 800px:flex w-[50%] justify-end items-center">
    <img
      src="https://res.cloudinary.com/dwa2juwf6/image/upload/v1736258679/11/l247cfxce0wyujbt1i4h.png"
      alt="Campus Marketplace"
      className="w-[120%] max-w-[3000px] h-auto object-contain"
    />
  </div>
</div>

  );
};

export default Hero;
