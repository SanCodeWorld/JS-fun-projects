import React, { useEffect, useRef, useState } from "react";
import { API_KEY } from "./API";
import Weather from "./Weather";
import { findExactData } from "./findExactData";

const Body = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({
    latitude: "",
    longitude: "",
    weatherList: [],
  });

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(city);
    setCity("");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (search === "") return;
    const weatherData = async () => {
      //   console.log("effect : " + search);----------------------------------------------------

      const res1 = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${API_KEY}`
      ); //url to get geoLocation data---------------------------
      const data1 = await res1.json();

      let lat = data1[0].lat;
      let lon = data1[0].lon;

      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      ); //url to get weather info----------------
      const data = await res.json();
      console.log(data.list.length);
      setInfo({
        latitude: data.city.coord.lat,
        longitude: data.city.coord.lon,
        weatherList: data.list,
      });
      setShow(true);
    };
    weatherData();
  }, [search]);

  return (
    <>
      <div className="w-4/5 h-11 bg-sky-700 ">
        <form
          className="w-full h-full flex items-center"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="city"
            className="ml-16 mr-4 text-slate-200 font-medium"
          >
            City :{" "}
          </label>
          <input
            ref={inputRef}
            type="text"
            id="city"
            className="w-20 text-slate-200 font-medium pl-2 bg-transparent border-b border-white outline-none focus:w-72 focus:bg-transparent transition-all"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button
            type="submit"
            className="ml-auto mr-40 bg-yellow-200 px-2 py-1 rounded-full hover:bg-yellow-400 border-2 hover:border-white transition-all"
          >
            Get Weather Info.
          </button>
        </form>
      </div>
      {show && (
        <div className="w-4/5 h-60 bg-slate-500 flex flex-col justify-around items-center transition-all">
          <h2 className="font-medium">CITY : {search.toUpperCase()}</h2>
          {info.weatherList.map((item, index) => {
            let found = findExactData(item);
            if (found !== null) {
              return <Weather key={index} list={found} />;
            }
          })}
        </div>
      )}
    </>
  );
};

export default Body;
