import React, { useEffect, useState } from "react";
import DayTime from "./DayTime";

const Header = () => {
  console.log("1");

  return (
    <div className="w-4/5  md:h-10 p-2 min-h-fit  flex md:flex-row flex-col justify-between items-center px-5 bg-gray-600">
      <div className="md:w-52 w-28 h-8  bg-white bg-opacity-40 backdrop-blur-sm hover:bg-transparent transition-all  border-white cursor-pointer flex items-center justify-center">
        <h3 className="text-blue-950 md:text-lg text-sm text-center text-nowrap max-[400px]:text-xs hover:text-white">
          Weather App
        </h3>
      </div>
      <DayTime />
    </div>
  );
};

export default Header;
