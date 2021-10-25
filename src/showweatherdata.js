import react from "react";
import "./showweather.css"


const Data=(props)=>{

  const icon = `https://opnpm run deployenweathermap.org/img/wn/${props.icon}@2x.png`;
  

  return(

    <div className="weatherdata" >
    <h2>{props.heading} {props.city}</h2>


    <div className="info" >
    <div>
    <h1 className="tempreture">{props.temp} °C</h1>
    <p>{props.main}</p>

    </div>

    <img alt="" src={icon}></img>


    <div className="phw">
    <p>pressure - {props.pressure}</p>
    <p>humidity - {props.humidity}</p>
    <p >wind - {props.wind}</p></div>

    </div>


    </div>



  )
};
export default Data;
