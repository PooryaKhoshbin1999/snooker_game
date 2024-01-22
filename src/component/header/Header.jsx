import React from "react";
import logo from "../../assest/icons8-snooker-99.png";

const Header = () => {
  return (
    <div className="header w-full px-[1rem] py-[0.5rem] flex flex-row justify-between items-center shadow-md 
    z-2 bg-[#0c6b1a] border-b-[2px] border-black">

      <div className="logo">
        <img src={logo} alt="" className="w-[43px]" />
        <p className="text-[7px]">Snooker App</p>
      </div>

      <div className="headerText text-[20px] font-bold"><p>Snooker App</p></div>

    </div>
  );
};

export default Header;
