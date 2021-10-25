import { Button } from '@material-ui/core';
import "./App.css";

import React, { useState,useEffect} from "react";
import Data from "./show.js";
import ButtonAppBar from "./appbar.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Four from "./fourdays.js"
import Fourteen from "./fourtendays.js"


function App() {
  const [location,setlocation] = useState({
    long: "",
    lat: ""
  });

 const [report, setreport] = useState({
    name: "",
    main: String,
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
  const [condition,setcondition]= useState(false);

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
getlocation();

const initialcall=async ()=>{
  const key = "0bff05b94b60a05a8e1beddf0c903813";
   const api =`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}.44&lon=${location.long}.04&units=metric&exclude=hourly,daily&appid=0bff05b94b60a05a8e1beddf0c903813`
   const response = await fetch(api);
   const result = await response.json();
   console.log(result);
   setreport({
     name: result?.name,
     icon: result?.current.weather[0].icon,
     main: result?.current.weather[0].description,
     pressure: result?.current.pressure,
     temp: {
       main: result?.current.temp,
      //  min: result?.main.temp_min,
      //  max: result?.main.temp_max
     },
     wind: result?.current.wind_speed,
     humidity: result?.current.humidity
   });
 
 
  }
  initialcall();



},[]);








 const apicall=async ()=>{
 const key = "0bff05b94b60a05a8e1beddf0c903813";
  const api =`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`
  const response = await fetch(api);
  const result = await response.json();
  console.log(result);
  setreport({
    
    name: result?.name,
    icon: result?.weather[0].icon,
    main: result?.weather[0].description,
    pressure: result.main.pressure,
    temp: {
      main: result?.main.temp,
      min: result?.main.temp_min,
      max: result?.main.temp_max
    },
    wind: result?.wind.speed,
    humidity: result?.main.humidity
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
   
      <Data
        heading = "Current weather"
        city={report.name}
         

         main ={report.main}
         temp = {report.temp.main}
        temp_min = {report.temp.min}
         temp_max = {report.temp.max}
         pressure = {report.pressure}
         icon ={report.icon}
        humidity = {report.humidity}
         wind = {report.wind}
        />
    
  

   




    </div>














  );
}
export default App;
