import React from "react";
import { testimonials } from "../data";
import Button from "./Button";

const Testimonials = () => {
  return (
    <section className="flex justify-between flex-col gap-20  lg:px-[50px] px-[30px] py-[30px] lg:py-[50px] lg:mt-[20px] mt-[50px] ">
      <h2 className="text-center text-[30px] font-semibold text-Dark-Blue">
        What they’ve said
      </h2>
      <div className="overflow-x-scroll flex gap-20 ">
        {testimonials.map((testimonial) => (
          <div
            className="md:min-w-[390px] relative min-w-[290px] text-center flex flex-col gap-4 bg-Very-Light-Gray p-[20px] h-auto  rounded-md"
            key={testimonial.id}
          >
            <div className="max-w-[50px]  max-h-[50px] mx-auto ">
              <img src={testimonial.avatar} alt="" className="lg:-mt-[50px] -mt-[40px]" />
            </div>
            <h6 className="text-[20px]">{testimonial.name}</h6>
            <p className="text-Dark-Grayish-Blue max-w-full">
              {testimonial.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-auto">
        <Button className="mx-auto text-Very-Light-Gray" />
      </div>
    </section>
  );
};

export default Testimonials;
