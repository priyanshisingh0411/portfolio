/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

function Testimonials() {
  return (
    // <div className="py-20" id="testimonials">
    <div id="testimonials">
      {/* <h1 className="heading">
        Kind words from&nbsp;
        <span className="text-purple-300">satisfied clients</span>
      </h1> */}
      {/* <div className="flex flex-col items-center max-lg:mt-10"> */}
      <div className="flex flex-col items-center ">
        {/* <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        /> */}

        {/* <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 max-lg: mt-10"> */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 ">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60">
              <img
                src={img}
                alt={name}
                className={`${name === "3rdLife" ? "w-10" : "md:w-10 w-5"}}`}
              />
              {name === "3rdLife" ? null : (
                <img src={nameImg} alt={name} className="md:w-20 w-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
