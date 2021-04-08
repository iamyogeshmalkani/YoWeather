import { Button } from '@material-ui/core';
import "./app.css"
import axios from "axios"
import React, { useState,useEffect} from "react";
import Data from "./showweatherdata";
import ButtonAppBar from "./appbar.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Four from "./fourdays.js"
import Fourteen from "./fourtendays.js"
import Getweather from "./getweatherdata.js"

function App() {
  const [location,setlocation] = useState({
    long: "",
    lat: ""
  });
 const [report, setreport] = useState({
    name: "",
    main: "",
    pressure: Number,
    temp: {
      main: Number,
      min: Number,
      max: Number
    },
    wind: Number,
    humidity: Number
  });
  const [input, setinput] = useState("");
  useEffect(()=>{
    const getlocation = async ()=>{await navigator.geolocation.getCurrentPosition( function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setlocation({
          long: position.coords.longitude,
          lat: position.coords.latitude
        });
  });
};

});







 const apicall=async ()=>{
 const key = "0bff05b94b60a05a8e1beddf0c903813";
  const api =`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`
  const response = await fetch(api);
  const result = await response.json();
  console.log(result);
  setreport({
    name: result.name,
    icon: result.weather[0].icon,
    main: result.weather[0].description,
    pressure: result.main.pressure,
    temp: {
      main: result.main.temp,
      min: result.main.temp_min,
      max: result.main.temp_max
    },
    wind: result.wind.speed,
    humidity: result.main.humidity
  });

 }



  const getWeather = (input) => {

    apicall();



  };
  return(<div className="bg">
         <Router>
           <ButtonAppBar />
              <Switch>
                 <Route path="/fourdays" component={Four} />
                  <Route path="/fourteendays" component={Fourteen} />

              </Switch>
         </Router>


         <form className="form">
           <input
            className="searchbar"
            onChange={(e) => {
               setinput(e.target.value);
                   }}
           value={input}>
          </input>

        <Button
         className="get"
         type="button"
         onClick={() => {
             getWeather(input);
          }}>
         Go
       </Button>


    </form>
  <Getweather
  weather={report}
  location={location} />
    </div>














  );
}
export default App;
