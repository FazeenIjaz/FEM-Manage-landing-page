import React from "react";
import logo from "../assets/logo.svg";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-Very-Dark-Blue text-white p-[40px]">
      <footer className="flex items-center lg:flex-row flex-col-reverse justify-around  lg:gap-0 gap-4">
        {/* logo and icons */}
        <>
          <div className="flex flex-col gap-10 ">
            <div className="invert">
              <img src={logo} alt="" />
            </div>
            <div className="flex text-[20px] gap-3 cursor-pointer ">
              <AiOutlineFacebook className="hover:text-Bright-Red " />
              <AiOutlineYoutube className="hover:text-Bright-Red " />
              <FaTwitter className="hover:text-Bright-Red " />
              <FaPinterest className="hover:text-Bright-Red " />
              <FaInstagram className="hover:text-Bright-Red " />
            </div>
          </div>
          {/* 1st link sec */}
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <p className="hover:text-Bright-Red cursor-pointer">Home</p>
              <p className="hover:text-Bright-Red cursor-pointer">Pricing</p>
              <p className="hover:text-Bright-Red cursor-pointer">Products</p>
              <p className="hover:text-Bright-Red cursor-pointer">About Us</p>
            </div>
            {/* 2nd link sec */}
            <div className="flex flex-col gap-2">
              <p className="hover:text-Bright-Red cursor-pointer">Careers</p>
              <p className="hover:text-Bright-Red cursor-pointer">Community</p>
              <p className="hover:text-Bright-Red cursor-pointer">
                Privacy Policy
              </p>
            </div>
          </div>
          {/* last */}
          <div className="flex flex-col gap-10 ">
            <div className="flex gap-3">
              <input
                type="text"
                className="rounded-full p-[10px] px-[15px]"
                placeholder="Updates in your inbox.."
              />
              <button className="bg-Bright-Red w-[50px] rounded-2xl">Go</button>
            </div>
          </div>
        </>
      </footer>

      <div className="lg:text-right text-center lg:mr-[50px] lg:mt-[0] mt-[20px]">
        <p className="text-Dark-Grayish-Blue">
          CopyRight 2020. All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
