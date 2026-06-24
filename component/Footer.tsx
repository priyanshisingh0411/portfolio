"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
// import { FaLocationArrow } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { socialMedia } from "@/data";
import Image from "next/image";

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("singhpriyanshi63@gmail.com"); // Replace with your email
    setCopied(true);
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 min-h-96">
        <Image
          src="footer-grid.svg"
          alt="Footer Grid"
          // className="w-full h-full opacity-50"
          width={1920}
          height={1080}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Open to new&nbsp;
          <span className="text-purple-300 font-bold">challenges&nbsp;</span>
          and ideas
        </h1>

        <p className="text-whitw-200 md:mt-10 my-5 text-center">
          Actively seeking roles and collaborations where I can apply my skills,
          learn, and contribute to well-designed products.
        </p>
        <a href="mailto:singhpriyanshi63@gmail.com">
          <MagicButton
            title={copied ? "Email Copied!" : "Copy My Email"}
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="!bg-[#161a31]"
            handleClick={handleCopy}
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col items-center justify-between">
        <p className="md:text-base text-sm md:font-normal font-light">
          {/* Copyright © 2025 Priyanshi */}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  //   onClick={() => window.open(item.link, "_blank")}
                  key={item.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity -75 bg-black-200 rounded-lg border border-black-00"
                >
                  <Image src={item.img} alt="" width={20} height={20} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
