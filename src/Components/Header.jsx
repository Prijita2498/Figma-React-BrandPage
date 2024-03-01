import React from "react";
import brand_logo from "../Images/brand_logo.png";

function Header() {
  return (
    <div className="flex bg-slate-50 h-[60px] w-full shadow-md">
      <div>
        <img className="p-3 ml-20" src={brand_logo} alt="brand_logo" />
      </div>
      <div className="m-auto">
        <ul className="flex justify-center font-bold text-xl py-4 gap-6">
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="float-end p-3 mr-10">
        <button className="bg-red-500 text-white h-[35px] w-[65px]">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
