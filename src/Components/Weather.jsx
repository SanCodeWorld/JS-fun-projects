import React from "react";

const Weather = ({ list }) => {
  return (
    <table>
      <tbody className="mb-3 p-3">
        <tr className="p-1 bg-slate-300">
          <td className="px-2">Temperature</td>
          <td className="px-2">{(list.main.temp - 273.15).toFixed(1)}&deg;C</td>
        </tr>
        <tr className="p-1 text-slate-300">
          <td className="px-2">Weather Condition</td>
          <td className="px-2">{list.weather[0].main.toUpperCase()}</td>
        </tr>
        <tr className="p-1 bg-slate-300">
          <td className="px-2">Weather Description</td>
          <td className="px-2">{list.weather[0].description.toUpperCase()}</td>
        </tr>
        <tr className="p-1 text-slate-300">
          <td className="px-2">Atmospheric Pressure</td>
          <td className="px-2">{list.main.pressure} hPa</td>
        </tr>
        <tr className="p-1 bg-slate-300">
          <td className="px-2">Humidity</td>
          <td className="px-2">{list.main.humidity} &#37;</td>
        </tr>
        <tr className="p-1 text-slate-300">
          <td className="px-2">Wind Speed</td>
          <td className="px-2">{(list.wind.speed * 3.6).toFixed(1)} km/hr</td>
        </tr>
        {/* <p>Date:{list.dt_txt}</p> */}
        {/* <hr /> */}
      </tbody>
    </table>
  );
};

export default Weather;
