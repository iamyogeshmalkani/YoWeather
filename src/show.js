import React from 'react'


export default function Data(props) {
    const icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    return (
        <div class="card text-white bg-dark mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" src={icon} alt="..."/>
            <h5 class="card-title">{props.temp} °C</h5>
            
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">pressure - {props.pressure}</p>
              <p class="card-text">humidity - {props.humidity}</p>
              <p class="card-text">wind - {props.wind}m/</p>

              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
}

