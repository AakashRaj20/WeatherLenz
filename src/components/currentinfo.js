import React from "react";

export default function CurrentInfo(props) {

    const formatTime = (time) => {
        const date = new Date(time * 1000);
        const hours = date.getHours()
        let sunTime
        if(hours >= 12){
            sunTime = hours - 12;
        }else {
            sunTime = hours
        }
        return sunTime
    }

    const sunRise = formatTime(props.sunRise) 
    const sunSet = formatTime(props.sunSet)
    
    return (
        <div className="currentInfo--div">
           <h5 className="info--city">{props.city + ", " + props.country}</h5>
           <h4 className="info--temp">{props.temp}°C</h4>
           <p className="info--feels">Feels {props.feels} °C</p> 
           <h6 className="info--sunTime">Sunrise : {sunRise} AM</h6>
           <h6 className="info--sunTime">Sunset : {sunSet} PM</h6>
           <h4 className="info--weather">{props.weather}</h4>
        </div>
    )
}