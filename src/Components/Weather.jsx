import React from "react";

const Weather = ({ list }) => {
  return (
    <table>
      <tbody className="mb-3 p-3">
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
          <td className="px-2">{list.main.pressure}</td>
        </tr>
        <tr className="p-1 bg-slate-300">
          <td className="px-2">Humidity</td>
          <td className="px-2">{list.main.humidity}</td>
        </tr>
        <tr className="p-1 text-slate-300">
          <td className="px-2">Wind Speed</td>
          <td className="px-2">{list.wind.speed}</td>
        </tr>
        {/* <p>Date:{list.dt_txt}</p> */}
        {/* <hr /> */}
      </tbody>
    </table>
  );
};

export default Weather;
