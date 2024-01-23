import React, { useState } from "react";
import { links } from "../data";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between py-[30px] md:px-[50px]">
      <div className="md:px-[0px] px-[50px]">
        <img src={logo} alt="Logo" />
      </div>
      <div className="">
        <nav className="md:flex items-center gap-10 hidden">
          {links.map((link) => (
            <p className="cursor-pointer hover:text-Dark-Grayish-Blue">
              {link.title}
            </p>
          ))}
        </nav>
      </div>
      <div className="lg:block hidden">
        <Button className={"text-Very-Light-Gray"} />
      </div>
      {/* mobile nav */}

      <button
        className="text-[28px]  px-[50px] block md:hidden"
        onClick={toggleMenu}
      >
        {menuOpen ? <IoClose /> : <MdMenu />}
      </button>

      {menuOpen && (
        <div className="w-full h-full backdrop-blur-sm fixed top-20 mx-auto p-[20px] text-[18px] font-[500]">
          <div className="bg-white p-[20px] rounded-md">
            <nav className="flex flex-col items-center gap-10 md:hidden">
              {links.map((link) => (
                <p className="cursor-pointer hover:text-Dark-Grayish-Blue">
                  {link.title}
                </p>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
