/** @format */

import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import $ from "jquery";
import "./weather.css";
import {fire, facebookProvider} from "./fire";

function Weather() {
  //api variable
  const APIKEY = "ac8513722d885e3436d3cb8b583d7553";
  //handle input
  const [form] = useState({ 
    City: "",
    Country: "",
  });


  //with empty array
  const [Weather, setWeather] = useState([]);
  const [Forecast, setForecast] = useState([]);
  const [LoginState] = useState({
    status: 0,
    title: "",
  });

  function updateLoginSystem() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        var username = user.email.split("@");
        LoginState.title=username[0];
      }
    });
  }

  function submitSignInWithFacebook() {
    if(LoginState.status===0) {
      fire.auth().signInWithPopup(facebookProvider).then((result, error)=>{
        if(error) {
          alert("Error", error);
        } else {
          LoginState.status=1;
          alert("Login Successfully!");
          updateLoginSystem();
        }
      });
    } else {
      fire.auth().signOut();
      LoginState.status=0;
      LoginState.title = "";
      alert("LogOut Successfully!");
    }
  }

  //location
  function updatelocation(e) {
    e.preventDefault();
    $.ajax({
      url: "https://geolocation-db.com/jsonp",
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function (location) {
        form.City = location.city;
        document.getElementById("city1").value = form.City;
        weatherData(e);
      },
    });
  }

  //fetch weather api data
  async function weatherData(e) {
    e.preventDefault();
    if (form.City === "") {
      alert("Add values");
    } else {
      //city name url
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.City}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({
        data: data,
      });

      const data2 = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${form.City}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setForecast({
        data: data2,
      });
    }
  }

  const enterfunc = (e) => {
    if (e.key === "Enter") {
      weatherData(e);
    }
  };

  return (
    <div id="setbg" className="setbg">
      <div className="container-fluid">
        <div className="row" id="setheader" style={{ padding: "160px" }}>
          <div className="col-lg-4"></div>
          <div
            className="col-lg-4 text-white"
            style={{
              "background-color": "rgb(0, 0, 0, 0.4)",
              "border-radius": "50px",
            }}
          >
            <h1 style={{ "font-size": "55px" }}>Weather App</h1>
          </div>
          <div className="col-lg-4 text-right">
            <button
              className="btn btn-dark btn-outline-light btn-lg"
              id="loginID"
              onClick={() => submitSignInWithFacebook()}
            ><i className="fa fa-facebook" style={{background:'blue', padding: '15px', width:'50px', 'border-radius':'90%'}}></i>{LoginState.title}</button>
          </div>
        </div>
        <div
          className="row"
          id="setinput"
          style={{ "padding-bottom": "323px", transition: "0.8s 0.5s" }}
        >
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div
              class="input-group mb-3"
              for="inputdefault"
              style={{
                "background-color": "rgb(0, 0, 0, 0.4)",
                "border-radius": "100px",
                padding: "10px",
              }}
            >
              <input
                type="text"
                id="city1"
                style={{ opacity: "1", "border-radius": "100px" }}
                className="form-control text-dark text-center bg-light"
                name="City"
                placeholder="Enter City Name"
                onChange={(event) => {
                  form.City = event.target.value;
                }}
                onKeyPress={(e) => enterfunc(e)}
              />
              &ensp;
              <div class="input-group-append">
                <button
                  className="btn btn-primary rounded-circle loc-hover"
                  onClick={(e) => updatelocation(e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cursor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
        {Weather.data !== undefined && Forecast.data !== undefined ? (
          <div>
            <DisplayWeather weather={Weather.data} forecast={Forecast.data} status={LoginState.status} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Weather;
