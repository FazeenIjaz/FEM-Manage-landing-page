import React from "react";
import { features } from "../data";

const Features = () => {
  return (
    <section className="flex justify-between  lg:flex-row flex-col gap-20 lg:px-[50px] pb-[0px] px-[30px] py-[30px] lg:py-[50px] lg:mt-[20px] mt-[50px]">
      {/* left */}
      <div className="flex flex-col gap-4 ">
        <h2 className="lg:text-[39px] lg:text-left text-center md:text-[33px] text-[28px] font-semibold text-Dark-Blue ">
          {" "}
          What’s different about Manage?
        </h2>
        <p className="text-[16px] lg:max-w-[350px] md:max-w-[500px] max-w-[300px] lg:mx-0 mx-auto lg:text-left text-center leading-[1.6] text-Dark-Grayish-Blue font-light">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      {/* right */}
      <div className="flex flex-col gap-6 lg:w-[50%]  ">
        {features.map((feature) => (
          <div
            className="flex flex-col gap-4 lg:items-start items-center justify-center"
            key={feature.id}
          >
            <div className="flex gap-2">
              <span className="flex items-center justify-center bg-Bright-Red text-white w-[55px]  h-[27px] rounded-full">
                {feature.id}
              </span>
              <h3 className="md:text-[17px] text-[14px] font-semibold lg:bg-transparent bg-Very-Pale-Red lg:p-0 p-[10px] rounded-2xl text-Very-Dark-Blue ">{feature.title}</h3>
            </div>
            <p className="text-[16px] lg:max-w-[500px] lg:mx-0 mx-auto lg:text-left text-center leading-[1.7] text-Dark-Grayish-Blue font-light md:max-w-[600px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
