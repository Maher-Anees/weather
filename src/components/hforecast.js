/** @format */

import React from "react";

function HForecast(props) {
  const { dt, iconurl, temp, today } = props;
  const datetime = new Date(dt * 1000);

  if (parseInt(datetime.getDay()) === today) {
    return (
      <div
        style={{
          "background-color": "rgb(0, 0, 0, 0.4)",
          "border-radius": "40px",
          margin: "6px",
          padding: "15px",
        }}
      >
        <h4>Today</h4>
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
  } else {
    return null;
  }
}

export default HForecast;
