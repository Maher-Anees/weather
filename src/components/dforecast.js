/** @format */

import React from "react";

function DForecast(props) {
  const { dt, iconurl, temp, today } = props;
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

  function dayTitle() {
    if (parseInt(datetime.getDay()) === today) {
      return <h4>Today</h4>;
    } else if (parseInt(datetime.getDay()) === today + 1) {
      return <h4>Tommorrow</h4>;
    } else {
      return <h4>{days[parseInt(datetime.getDay())]}</h4>;
    }
  }

  if (
    (datetime.toLocaleTimeString() === "2:00:00 PM" &&
      parseInt(datetime.getDay()) !== today) ||
    (datetime.toLocaleTimeString() === "8:00:00 PM" &&
      parseInt(datetime.getDay()) === today)
  ) {
    return (
      <div
        style={{
          "background-color": "rgb(0, 0, 0, 0.4)",
          "border-radius": "40px",
          margin: "6px",
          padding: "15px",
        }}
      >
        <h4>
          {datetime.getDate() +
            "/" +
            (parseInt(datetime.getMonth()) + 1) +
            "/" +
            datetime.getFullYear()}
        </h4>
        {dayTitle()}
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

export default DForecast;
