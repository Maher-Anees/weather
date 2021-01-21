/** @format */

import React from "react";

function MForecast(props) {
  const { dt, iconurl, temp } = props;
  const datetime = new Date(dt * 1000);
  const [days] = React.useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);

  return (
    <div
      style={{
        "background-color": "rgb(0, 0, 0, 0.4)",
        "border-radius": "40px",
        margin: "6px",
        padding: "15px",
      }}
    >
      <h4>{days[parseInt(datetime.getDay())]}</h4>
      <h4> {datetime.toLocaleTimeString()} </h4>
      <img
        src={iconurl}
        className="weather-icon"
        style={{ "border-radius": "50px" }}
        alt=""
        width="65"
      />
      <h4>
        {Math.floor(temp - 273.15)}
        <sup>o</sup>
      </h4>
    </div>
  );
}

export default MForecast;
