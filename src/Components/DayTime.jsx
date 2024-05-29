import React, { useEffect, useState } from "react";

const DayTime = () => {
  const [Day, setDay] = useState(new Date().toLocaleString());
  console.log(1);
  useEffect(() => {
    let id = setInterval(() => {
      setDay(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="md:w-52 w-28 h-8   bg-opacity-40 backdrop-blur-sm  transition-all  border-white cursor-pointer flex justify-center items-center">
      <h5 className="hover:text-blue-950 md:text-lg text-xs text-nowrap text-center text-white ">
        {Day}
      </h5>
    </div>
  );
};

export default DayTime;
