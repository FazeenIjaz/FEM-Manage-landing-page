import React from "react";
import heroImg from "../assets/illustration-intro.svg";
import Button from "./Button";

const Intro = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse items-center lg:px-[50px] lg:py-[30px]">
      {/* left */}
      <div className=" lg:max-w-[50%] flex flex-col gap-[20px] ">
        <h1 className="lg:text-[58px] md:text-[45px] text-[38px] lg:text-left text-center md:font-bold font-semibold leading-[1.3]">
          Bring everyone together to build better products.
        </h1>
        <p className="text-[16px] lg:max-w-[350px] md:max-w-[500px] max-w-[300px] lg:mx-0 mx-auto md:text-left text-center leading-[1.6] text-Dark-Grayish-Blue font-light">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button className={"text-Very-Light-Gray"} />
      </div>
      {/* right */}
      <div className="">
        <img src={heroImg} alt="Illustration Img.." />
      </div>
    </section>
  );
};

export default Intro;
