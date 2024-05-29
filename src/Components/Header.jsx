import React, { useEffect, useState } from "react";
import DayTime from "./DayTime";

const Header = () => {
  console.log("1");

  return (
    <div className="w-4/5 h-10  flex justify-between items-center px-5 bg-gray-600">
      <div className="w-52 h-8  bg-white bg-opacity-40 backdrop-blur-sm hover:bg-transparent transition-all  border-white cursor-pointer">
        <h3 className="text-blue-950 text-lg text-center hover:text-white">
          Weather App
        </h3>
      </div>
      <DayTime />
    </div>
  );
};

export default Header;
