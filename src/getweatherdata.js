import React, { useState,useEffect} from "react";
import Data from "./showweatherdata.js"
import axios from "axios"

const Getweather=(props)=>{


  const [data, setdata] = useState({
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

   const callapi= async ()=>{const wapi =`api.openweathermap.org/data/2.5/weather?lat=${props.location.lat}&lon=${props.location.long}&appid=0bff05b94b60a05a8e1beddf0c903813`;
   const response = await axios.get(wapi);
   const result = await response.json();
   setdata({
     name: result?.name,
     icon: result?.weather[0].icon,
     main: result?.weather[0].description,
     pressure: result?.main.pressure,
     temp: {
       main: result?.main.temp,
       min: result?.main.temp_min,
       max: result?.main.temp_max
     },
     wind: result?.wind.speed,
     humidity: result?.main.humidity
   });

 };


  useEffect(()=>{

    callapi();

},[])


   // return(
   //<Data
   //   heading = "Current weather"
   //    city = {props.weather.name}
   //
   //    main ={props.weather.main}
   //    temp = {props.weather.temp.main}
   //   temp_min = {props.weather.temp.min}
   //    temp_max = {props.weather.temp.max}
   //    pressure = {props.weather.pressure}
   //    icon ={props.weather.icon}
   //   humidity = {props.weather.humidity}
   //    wind = {props.weather.wind}
   //   />)


   return(<Data
     heading = "Current weather"
      city = {data.name}

      main ={data.main}
      temp = {data.temp.main}
     temp_min = {data.temp.min}
      temp_max = {data.temp.max}
      pressure = {data.pressure}
      icon ={data.icon}
     humidity = {data.humidity}
      wind = {data.wind}
     />)


}



export default Getweather;
