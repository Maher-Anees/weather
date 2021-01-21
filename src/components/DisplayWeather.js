/** @format */

import React from "react";
import HForecast from "./hforecast";
import DForecast from "./dforecast";
import MForecast from "./mforecast";

function DisplayWeather(props) {
  const { weather, forecast, status } = props;

  function setpadding() {
    document
      .getElementById("setheader")
      .setAttribute("style", "padding: 100px;");
    document
      .getElementById("setinput")
      .setAttribute("style", "padding-bottom: 50px;");
  }

  if (weather.cod === 200) {
    const iconurl = `https://openweathermap.org/img/w/${
      weather.cod !== 404 ? weather.weather[0].icon : null
    }.png`;
    const list = [];

    for (var i = 0; i < 40; i++) {
      list.push({
        dt: forecast.list[i].dt,
        iconurl: `https://openweathermap.org/img/w/${
          forecast.cod !== 404 ? forecast.list[i].weather[0].icon : null
        }.png`,
        temp: forecast.list[i].main.temp,
        today: parseInt(new Date(forecast.list[0].dt * 1000).getDay()),
      });
    }

    function updatebg() {
      const bgImage = document.getElementById("setbg");
      const setheading = document.getElementById("setheader");
      const setinput = document.getElementById("setinput");
      bgImage.setAttribute(
        "style",
        `background-image:url(image/${
          weather.cod !== 404 ? weather.weather[0].icon : null
        }.gif);`
      );
      setheading.setAttribute("style", "padding: 100px;");
      setinput.setAttribute("style", "padding-bottom: 50px;");
    }

    function premium() {
      if(status===1) {
        return (
          <section id="faq" className="faq" style={{ overflow: "hidden" }}>
          <div className="container-fluid">
            <ul id="faq-list">
              <li>
                <a
                  data-toggle="collapse"
                  className="collapsed"
                  href="#faq1"
                >
                  <div
                    className="container-fluid text-white text-left"
                    style={{ "padding-left": "3%" }}
                  >
                    <h1>Hourly Forecast</h1>
                  </div>
                  <i className="ion-android-remove text-white"></i>
                </a>
                <div id="faq1" className="collapse" data-parent="#faq-list">
                  <ul id="faq-list" className="text-left">
                    <li>
                      <div
                        className="container-fluid"
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="text-white text-center"
                          style={{
                            "overflow-x": "scroll",
                            position: "relative",
                            display: "flex",
                          }}
                        >
                          {forecast !== undefined
                            ? list.map((num) => (
                                <HForecast
                                  dt={num.dt}
                                  iconurl={num.iconurl}
                                  temp={num.temp}
                                  today={num.today}
                                />
                              ))
                            : null}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  data-toggle="collapse"
                  className="collapsed"
                  href="#faq2"
                >
                  <div
                    className="container-fluid text-white text-left"
                    style={{ "padding-left": "3%" }}
                  >
                    <h1>Daily Forecast</h1>
                  </div>
                  <i className="ion-android-remove text-white"></i>
                </a>
                <div id="faq2" className="collapse" data-parent="#faq-list">
                  <ul id="faq-list" className="text-left">
                    <li>
                      <div
                        className="container-fluid"
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="text-white text-center"
                          style={{
                            "overflow-x": "scroll",
                            position: "relative",
                            display: "flex",
                          }}
                        >
                          {forecast !== undefined
                            ? list.map((num) => (
                                <DForecast
                                  dt={num.dt}
                                  iconurl={num.iconurl}
                                  temp={num.temp}
                                  today={num.today}
                                />
                              ))
                            : null}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  data-toggle="collapse"
                  className="collapsed"
                  href="#faq3"
                >
                  <div
                    className="container-fluid text-white text-left"
                    style={{ "padding-left": "3%" }}
                  >
                    <h1>Monthly Forecast</h1>
                  </div>
                  <i className="ion-android-remove text-white"></i>
                </a>
                <div id="faq3" className="collapse" data-parent="#faq-list">
                  <ul id="faq-list" className="text-left">
                    <li>
                      <div
                        className="container-fluid"
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="text-white text-center"
                          style={{
                            "overflow-x": "scroll",
                            position: "relative",
                            display: "flex",
                          }}
                        >
                          {forecast !== undefined
                            ? list.map((num) => (
                                <MForecast
                                  dt={num.dt}
                                  iconurl={num.iconurl}
                                  temp={num.temp}
                                />
                              ))
                            : null}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
        );
      }
    }

    return (
      <div className="container-fluid">
        {weather.cod !== 404 && forecast.cod !== 404 ? (
          <React.Fragment>
            {updatebg()}
            {setpadding()}
            <div className="row text-white" style={{ padding: "5%" }}>
              <strong>
                <br />
                <h1 style={{ "font-size": "60px" }}>
                  {forecast.city.name}, {forecast.city.country}
                </h1>
                <h4>{new Date().toDateString()}</h4>
              </strong>
            </div>
            <div className="row text-white">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3">
                    <img
                      src={iconurl}
                      className="weather-icon"
                      style={{
                        "background-color": "rgb(255, 255, 255, 0.4)",
                        "border-radius": "100px",
                      }}
                      alt=""
                      width="130"
                    />
                  </div>
                  <div className="col-lg-3">
                    <strong>
                      <h1 style={{ "font-size": "100px" }}>
                        {Math.floor(weather.main.temp - 273.15)}
                        <sup>o</sup>
                      </h1>
                      <span
                        className="weather-main"
                        style={{ "font-size": "20px" }}
                      >
                        {weather.weather[0].main}
                        {", "}
                        {weather.weather[0].description}
                      </span>
                    </strong>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
              <div className="col-lg-6 text-light">
                <div
                  className="container"
                  style={{
                    "background-color": "rgb(0, 0, 0, 0.4)",
                    "border-radius": "20px",
                  }}
                >
                  <br />
                  <div className="row">
                    <div className="col-lg-3">
                      {Math.floor(weather.main.temp_max - 273.15)} /{" "}
                      {Math.floor(weather.main.temp_min - 273.15)} <sup>o</sup>{" "}
                      C
                      <br />
                      <strong>High / Low</strong>
                    </div>

                    <div className="col-lg-3">
                      {weather.main.humidity} %
                      <br />
                      <strong>Humidity</strong>
                    </div>
                    <div className="col-lg-3">
                      {weather.main.pressure} hPa
                      <br />
                      <strong>Pressure</strong>
                    </div>
                    <div className="col-lg-3">
                      {weather.visibility / 1000} Km
                      <br />
                      <strong>Visibility</strong>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-3">
                      {Math.floor((weather.wind.speed * 18) / 5)} Km/hr
                      <br />
                      <strong>Wind</strong>
                    </div>
                    <div className="col-lg-3">
                      {weather.wind.deg} <sup>o</sup>deg
                      <br />
                      <strong>Wind Direction</strong>
                    </div>
                    <div className="col-lg-3">
                      {new Date(
                        weather.sys.sunrise * 1000
                      ).toLocaleTimeString()}
                      <br />
                      <strong>Sunrise</strong>
                    </div>
                    <div className="col-lg-3">
                      {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                      <br />
                      <strong>Sunset</strong>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            
            {premium()}
          </React.Fragment>
        ) : (
          <div className="maincard">
            <h2>{weather.message}</h2>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="maincard text-white">
        {setpadding()}
        <h2 style={{ "padding-bottom": "50px" }}>{weather.message}</h2>
      </div>
    );
  }
}
export default DisplayWeather;
