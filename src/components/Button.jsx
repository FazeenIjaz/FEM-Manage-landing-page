import React from "react";

const Button = ({className}) => {
  return (
    <button
      className={`w-[140px] lg:mx-0 mx-auto h-[45px] rounded-full shadow-lg bg-Bright-Red  ${className} hover:opacity-[0.9] transition-all duration-300 hover:scale-105`}
    >
      Get Started
    </button>
  );
};

export default Button;
