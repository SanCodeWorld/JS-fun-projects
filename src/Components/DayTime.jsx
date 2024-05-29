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
    <div className="w-52 h-8  bg-white bg-opacity-40 backdrop-blur-sm hover:bg-transparent transition-all  border-white cursor-pointer">
      <h5 className="text-blue-950 text-lg text-center hover:text-white">
        {Day}
      </h5>
    </div>
  );
};

export default DayTime;
