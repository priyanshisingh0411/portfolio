"use client";

import React from "react";

function Profile() {
  function handleClick() {
    window.open("./priyanshi.pdf", "_blank");
  }

  return (
    <div className="w-full z-10 relative pt-10 flex items-center justify-between">
      <div className="flex items-center">
        <div className=" rounded-lg bg-white/10 ring-10 ring-white/10 inline-block">
          <img
            className="w-30 h-30 rounded-full block"
            src={"./pro.png"}
            alt="profile picture"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold ml-6">Priyanshi Singh</h1>
          <p className="text-md text-gray-300 ml-6 pt-2">Front End Developer</p>
        </div>
      </div>

      <div>
        <button
          onClick={handleClick}
          className="w-30 h-10 text-white text-xl font-semibold hover:bg-white/20 transition rounded-lg bg-white/10 ring-10 ring-white/10 inline-block"
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Profile;
